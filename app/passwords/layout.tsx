import React from "react";
import NotesNav from "@/components/component/NotesNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row flex-1 h-screen w-[100vw] overflow-y-hidden overflow-x-hidden">
      <NotesNav />
      <main className="flex-1 min-w-[70vw] overflow-y-hidden p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
