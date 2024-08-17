import ReadButton from "@/components/global/ReadButton";
import "./ourMission.css";

const OurMission = () => {
  return (
    <div className="mission-holder py-[3.5rem]">
      <div className="our-mission flex justify-center items-center text-center pt-40 flex-col gap-2">
        <h2 className="text-white items-center  font-medium text-[2rem] leading-10">
          خطط لموسمك المقبل وإكتشف عروضنا الحصرية
        </h2>
        <p className="text-white items-center  text-[16px] leading-6 ">
          إتخذ قرار الشراء المثالي بمساعدة كتالوجنا التفصيلي{" "}
        </p>
        <ReadButton>إطلب كتالوجك الآن</ReadButton>
      </div>
    </div>
  );
};

export default OurMission;
