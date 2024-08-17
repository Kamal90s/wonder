import "./style.css";
import { Tajawal } from "next/font/google";

const cairo = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});
const ReadButton = ({ children }: any) => {
  return (
    <button
      className={`${cairo.className}read-button text-xl py-2 px-10 font-semibold bg-[#f8f8f8] text-black mt-3 z-30`}
    >
      {children}
    </button>
  );
};

export default ReadButton;
