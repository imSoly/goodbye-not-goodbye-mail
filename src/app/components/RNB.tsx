"use client";

import clsx from "clsx";
import { NB_CLASS_NAME } from "../lib/constant";

function RNB() {
  return (
    <nav className={clsx(NB_CLASS_NAME, "gap-4")}>
      <div className="flex items-center justify-between">RNB</div>
    </nav>
  );
}

export default RNB;
