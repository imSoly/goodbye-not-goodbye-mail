"use client";

import { useNavigateStore } from "@/store/navigateStore";
import clsx from "clsx";
import Image from "next/image";
import { NB_CLASS_NAME } from "../lib/constant";

function LNB() {
  const { isCollapsed } = useNavigateStore();

  return (
    <nav
      className={clsx(
        NB_CLASS_NAME,
        "gap-4 transition-all duration-300"
        // isCollapsed ? "w-" : "w-3xs"
      )}
    >
      <div
        className={clsx(
          "w-fit flex items-center justify-between bg-[#c2e7ff] rounded-2xl py-4 px-4 font-medium gap-4"
        )}
      >
        <Image
          src="/images/icons/create_black_24dp.png"
          alt="write"
          width={24}
          height={24}
        />
        {!isCollapsed && <span className="text-sm mr-2">편지쓰기</span>}
      </div>
    </nav>
  );
}

export default LNB;
