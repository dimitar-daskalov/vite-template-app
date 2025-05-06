import { useEffect, useState } from "react";

interface UseIsMobileProps {
  breakpoint?: number;
}

export const useIsMobile = ({ breakpoint = 768 }: UseIsMobileProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const updateIsMobile = () => {
      setIsMobile(mql.matches);
      setLoading(false);
    };

    updateIsMobile();
    mql.addEventListener("change", updateIsMobile);

    return () => {
      mql.removeEventListener("change", updateIsMobile);
    };
  }, [breakpoint]);

  return { isMobile, loading };
};
