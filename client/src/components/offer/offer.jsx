import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-h-full md:w-auto md:max-h-[auto] flex flex-wrap md:flex-nowrap justify-between md:justify-start gap-5 z-[1]">
      <div className="relative text-white overflow-hidden w-full md:w-[500px] flex-1 rounded-sm">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o="
          alt="img"
          className="object-cover transition-all duration-500 rounded-3xl hover:scale-110"
        />
        <div className="absolute text-center flex justify-start items-start flex-col left-0 md:left-[50px] bottom-0 md:bottom-[50px] w-full">
          <h4>{t("offerTitle")}</h4>
          <h6>{t("offerTittleSecond")}</h6>
          <Link to="/">
            <button className="butn bg-[#048a98] text-[white] h-10 cursor-pointer mt-[10%] border-[none] rounded-xl p-2">
              {t("btnOffer")}
            </button>
          </Link>
        </div>
      </div>

      <div className="relative text-white overflow-hidden w-full md:w-[500px] flex-1 rounded-sm ">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o="
          alt="img"
          className="object-cover transition-all duration-500 rounded-3xl hover:scale-110 rounded-3xl"
        />
        <div className="absolute text-center flex justify-start items-start flex-col left-0 md:left-[50px] bottom-0 md:bottom-[50px] w-full">
          <h4>{t("offerTitle")}</h4>
          <h6>{t("offerTittleSecond")}</h6>
          <Link to="/">
            <button className="butn bg-[#048a98] text-[white] h-10 cursor-pointer mt-[10%] border-[none] rounded-xl p-2">
              {t("btnOfferSecond")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
