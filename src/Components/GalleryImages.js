import React from "react";
import image1 from "../Assets/Gallery/Images/laptop1.jpg";
import image2 from "../Assets/Gallery/Images/laptop2.jpg";
import image3 from "../Assets/Gallery/Images/laptop3.jpg";
import image4 from "../Assets/Gallery/Images/laptop4.jpg";
import image5 from "../Assets/Gallery/Images/laptop5.jpg";
import image6 from "../Assets/Gallery/Images/laptop6.jpg";
import image7 from "../Assets/Gallery/Images/laptop7.jpg";
import image8 from "../Assets/Gallery/Images/laptop8.jpg";
import image9 from "../Assets/Gallery/Images/laptop9.jpg";
import image10 from "../Assets/Gallery/Images/laptop10.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";

const GalleryImages = () => {
  const images = [
    {
      id: 1,
      img: image1,
    },
    {
      id: 2,
      img: image2,
    },
    {
      id: 3,
      img: image3,
    },
    {
      id: 4,
      img: image4,
    },
    {
      id: 5,
      img: image5,
    },
    {
      id: 6,
      img: image6,
    },
    {
      id: 7,
      img: image7,
    },
    {
      id: 8,
      img: image8,
    },
    {
      id: 9,
      img: image9,
    },
    {
      id: 10,
      img: image10,
    },
  ];
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10">
      {images.map((item, i) => (
        <PhotoProvider
        key={i}
        speed={() => 1000}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
      >
          <PhotoView key={item.id} src={item.img}>
            <img src={item.img} alt=""  className="border border-purple-400 rounded-lg" />
          </PhotoView>
        </PhotoProvider>
      ))}
    </div>
  );
};

export default GalleryImages;
