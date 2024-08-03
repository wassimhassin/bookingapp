import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { useState } from "react";

const Featured = () => {
  const { data, loading } = useFetch(
    "https://booking-aku5.onrender.com/api/hotels/countByCity?cities=tunis,bizert,mahdia,hammamet,sousse"
  );

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 pt-[0%] pb-[5%] px-[5%]">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <Link>
            <div className="featuredItem rounded-2xl">
              <img
                src="https://thumbs.dreamstime.com/b/avenue-habib-bourguiba-%C3%A0-tunis-tunisie-avec-la-tour-de-l-horloge-extr%C3%A9mit%C3%A9-173707031.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>tunis</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
          </Link>

          <div className="featuredItem2 rounded-2xl">
            <img
              src="https://tunisie.co/uploads/images/content/bizerte-290320-8.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>bizert</h1>
              <h2>{data[1]} properties </h2>
            </div>
          </div>

          <div className="featuredItem3 rounded-2xl">
            <img
              src="https://afriquemagazine.com/sites/default/files/inline-images/img4_0.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>mahdia</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem4 rounded-2xl">
            <img
              src="https://media.istockphoto.com/id/1138505123/fr/photo/monastir-en-tunisie-est-une-ville-ancienne-et-une-destination-touristique-populaire-sur-la.jpg?s=612x612&w=0&k=20&c=PT61JjOMdUyYX971VPnIG080cq0aNSi5G34poQmQhrg="
              alt="h"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>hammamet</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>

          <div className="featuredItem5 rounded-2xl">
            <img
              src="https://www.meteocity.com/images/cache/seo/images/download/blocks/sousse-shutterstock-560089576-625ea201ed633543934890.jpg"
              alt="h"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>sousse</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>

          <Link>
            <div className="featuredItem rouded-2xl" rounded-2xl>
              <img
                src="https://thumbs.dreamstime.com/b/avenue-habib-bourguiba-%C3%A0-tunis-tunisie-avec-la-tour-de-l-horloge-extr%C3%A9mit%C3%A9-173707031.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>tunis</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Featured;
