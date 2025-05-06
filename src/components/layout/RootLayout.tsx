import { Header } from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <section>
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
};
