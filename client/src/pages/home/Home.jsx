import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Pub from '../../components/pub';
import Flight from '../../components/flight';
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import PropertyList from '../../components/propertyList/PropertyList';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Offer from './../../components/offer/offer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Header />
      <div className="mt-16 flex flex-col items-center gap-4">
        <Pub />
        <strong className="w-[1024px] text-2xl relative top-5 text-[#314b56] font-serif">
          {t('homeOffersTitle')}
        </strong>
        <p className="w-[1024px] text-[#9fa9af] font-serif">
          {t('homeOffersDescription')}
        </p>
        <Offer />
        <div className="flex justify-end gap-2 md:w-[1024px] md:relative top-2">
          <FaChevronCircleLeft className="size-6 cursor-pointer" />
          <FaChevronCircleRight className="size-6 cursor-pointer" />
        </div>
        <Flight />
        <strong className="w-[1024px] text-2xl relative top-5 text-[#314b56] font-serif">
          {t('exploreTunisiaTitle')}
        </strong>
        <h5 className="w-[1024px] text-[#9fa9af] font-serif">
          {t('exploreTunisiaDescription')}
        </h5>
        <Featured />
        <strong className="w-[1024px] text-2xl relative top-5 text-[#314b56] font-serif">
          {t('browseByPropertyTypeTitle')}
        </strong>
        <h5 className="w-[1024px] text-[#9fa9af] font-serif">
          {t('browseByPropertyTypeDescription')}
        </h5>
        <PropertyList />
        <strong className="w-[1024px] text-2xl relative top-5 text-[#314b56] font-serif">
          {t('homeGuestsLoveTitle')}
        </strong>
        <h5 className="w-[1024px] text-[#9fa9af] font-serif">
          {t('homeGuestsLoveDescription')}
        </h5>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
