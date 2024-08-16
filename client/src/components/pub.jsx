import React from "react";
import shop from "../assets/shop.png";
import pay from "../assets/pay.png";
import install from "../assets/install.png";
import download from "../assets/download.png";
import { useTranslation } from "react-i18next";

const Pub = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center lg:p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-full gap-3 lg:space-y-0 space-y-8">
        <div className="flex flex-col justify-center items-center gap-2 p-3 rounded-2xl shadow-xl w-50 h-40 cursor-pointer">
          <img src={download} alt="download" className="w-20" />
          <strong className="font-semibold">{t("feature1Title")}</strong>
          <h5 className="text-gray-500 md:text-[12px] text-center">
            {t("feature1DescriptionLine1")}
            <br />
            <span className="block text-center mb-3">
              {t("feature1DescriptionLine2")}
            </span>
          </h5>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 p-3 rounded-2xl shadow-xl w-50 h-40 cursor-pointer">
          <img src={shop} alt="shop" className="w-20" />
          <strong className="font-semibold">{t("feature2Title")}</strong>
          <h5 className="text-gray-500 md:text-[12px] text-center">
            {t("feature2DescriptionLine1")}
            <br />
            <span className="block text-center mb-3">
              {t("feature2DescriptionLine2")}
            </span>
          </h5>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 p-3 rounded-2xl shadow-xl w-50 h-40 cursor-pointer">
          <img src={pay} alt="pay" className="w-20" />
          <strong className="font-semibold">{t("feature3Title")}</strong>
          <h5 className="text-gray-500 md:text-[12px] text-center">
            {t("feature3DescriptionLine1")}
            <br />
            <span className="block text-center mb-3">
              {t("feature3DescriptionLine2")}
            </span>
          </h5>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 p-3 rounded-2xl shadow-xl w-50 h-40 cursor-pointer">
          <img src={install} alt="install" className="w-20" />
          <strong className="font-semibold">{t("feature4Title")}</strong>
          <h5 className="text-gray-500 md:text-[12px] text-center">
            {t("feature4DescriptionLine1")}
            <br />
            <span className="block text-center mb-3">
              {t("feature4DescriptionLine2")}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Pub;
