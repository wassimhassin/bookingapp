import "./footer.css";

const Footer = () => {
  return (
    <div className="w-full md:w-[1024px] text-xs">
      <div className="w-full flex flex-wrap justify-center md:justify-between mb-4 md:mb-10">
        <ul className="list-none p-0">
          <li className="text-blue-900 cursor-pointer mb-2.5">Countries</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Regions</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Cities</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Districts</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Airports</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Hotels</li>
        </ul>
        <ul className="list-none p-0">
          <li className="text-blue-900 cursor-pointer mb-2.5">Homes </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Apartments </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Resorts </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Villas</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Hostels</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Guest houses</li>
        </ul>
        <ul className="list-none p-0">
          <li className="text-blue-900 cursor-pointer mb-2.5">Unique places to stay </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Reviews</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Unpacked: Travel articles </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Travel communities </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Seasonal and holiday deals </li>
        </ul>
        <ul className="list-none p-0">
          <li className="text-blue-900 cursor-pointer mb-2.5">Car rental </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Flight Finder</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Restaurant reservations </li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Travel Agents </li>
        </ul>
        <ul className="list-none p-0">
          <li className="text-blue-900 cursor-pointer mb-2.5">Curtomer Service</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Partner Help</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Careers</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Sustainability</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Press center</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Safety Resource Center</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Investor relations</li>
          <li className="text-blue-900 cursor-pointer mb-2.5">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 booking.</div>
    </div>
  );
};

export default Footer;
