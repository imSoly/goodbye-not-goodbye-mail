"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const components = [
  { id: "button", label: "Button" },
  { id: "modal", label: "Modal" },
  { id: "tooltip", label: "Tooltip" },
  { id: "dropdown", label: "Dropdown" },
  { id: "menu", label: "Menu" },
  { id: "tabs", label: "Tabs" },
  { id: "accordion", label: "Accordion" },
  { id: "card", label: "Card" },
  { id: "list", label: "List" },
];

export default function StyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("button");

  // 해시 변경 감지
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(hash);
        // 해당 섹션으로 스크롤
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // 초기 해시 설정
    if (!window.location.hash) {
      window.location.hash = "#button";
    } else {
      handleHashChange();
    }

    // 해시 변경 이벤트 리스너
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (componentId: string) => {
    setActiveSection(componentId);
    window.location.hash = `#${componentId}`;
  };

  return (
    <main className="flex h-screen">
      <nav
        className="w-64 min-w-64 border-r border-border p-4"
        role="navigation"
        aria-label="Component navigation"
      >
        <ul className="flex flex-col gap-2">
          {components.map((component) => (
            <li key={component.id}>
              <button
                onClick={() => handleNavClick(component.id)}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeSection === component.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {component.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {children}
      </div>
    </main>
  );
}
