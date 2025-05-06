import { useEffect, useState } from "react";

interface UseAppearOnScrollProps {
  appearAfter?: number;
  isMobile?: boolean;
}

export const useAppearOnScroll = ({
  appearAfter = 0,
  isMobile,
}: UseAppearOnScrollProps) => {
  const [shouldAppear, setShouldAppear] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > appearAfter) {
        setShouldAppear(true);
      } else {
        setShouldAppear(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [appearAfter, isMobile]);

  return { shouldAppear };
};
