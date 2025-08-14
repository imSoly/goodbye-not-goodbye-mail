import { ICON_HEX_COLOR } from "@/app/lib/constant";

export default function HamburgerIcon() {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill={ICON_HEX_COLOR}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
}
