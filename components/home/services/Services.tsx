import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { BsBricks } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <div className="services flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7 px-12 py-16">
      <div className="card flex flex-col items-center  text-center">
        <HiSpeakerphone className="text-7xl text-[#204561] mb-6" />
        <h3 className="text-2xl font-medium mb-2 ">قيمة كبيرة كل يوم</h3>
        <p className=" lg:max-w-[400px]">اكتشف عروضنا وخصوماتنا اليومية</p>
      </div>
      <div className="card flex flex-col items-center text-center">
        <TbTruckDelivery className="text-7xl text-[#204561] mb-6" />
        <h3 className="text-2xl font-medium mb-2 ">شحن واسترجاع بكل سهوله</h3>
        <p className=" lg:max-w-[400px]">
          استمتع بتجربة شحن سهله وإذا لما يعجبك المنتج، يمكنك اعادته لنا بكل
          سهولة
        </p>
      </div>
      <div className="card flex flex-col items-center  text-center">
        <RiCustomerServiceFill className="text-7xl text-[#204561] mb-6" />

        <h3 className="text-2xl font-medium mb-2 ">خدمة عملاء استثنائية</h3>
        <p className=" lg:max-w-[400px]">
          فريقنا لخدمة العملاء مستعد دائما للمساعدة
        </p>
      </div>
      <div className="card flex flex-col items-center  text-center">
        <BsBricks className="text-7xl text-[#204561] mb-6" />
        <h3 className="text-2xl font-medium mb-2 ">بدائل بلا نهاية</h3>
        <p className=" lg:max-w-[400px]">
          تشكيله كبيره و رائعه من المنتجات، التي تمت على يد مصممين من ثقافات
          ودول مختلفه
        </p>
      </div>
    </div>
  );
};

export default Services;
