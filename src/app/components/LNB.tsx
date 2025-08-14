"use client";

import clsx from "clsx";
import { useState } from "react";
import { NB_CLASS_NAME } from "../lib/constant";

function LNB() {
  // TODO: context로 관리
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <nav
      className={clsx(NB_CLASS_NAME, "gap-4", isCollapsed ? "w-16" : "w-3xs")}
    >
      <div className="flex items-center justify-between">LNB</div>
    </nav>
  );
}

export default LNB;
