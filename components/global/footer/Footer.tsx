import FooterLinks from "./FooterLinks";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <div className="bg-[#F5F4F4] lg:px-[4.5rem] pt-[2.5rem] pb-4">
      <MainFooter />
      {/* <FooterLinks/> */}
      <p className="text-center text-[12px] mt-5  text-[#737373]">
        © جميع الحقوق محفوظة شركه وندر للتجارة
      </p>
    </div>
  );
};

export default Footer;
