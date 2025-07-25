import PremiumPhoto from "../assets/premium_photo-.avif";
import Carousel1 from "../assets/homeCarousel/Carousel1.jpg";
import Carousel2 from "../assets/homeCarousel/Carousel2.png";
import Carousel3 from "../assets/homeCarousel/Carousel3.jpg";

// --hospitality projects
import Govinda1 from "../assets/hospitality/govinda1.jpg";
import Govinda2 from "../assets/hospitality/govinda2.jpg";
import Govinda3 from "../assets/hospitality/govinda3.jpg";
import Govinda4 from "../assets/hospitality/govinda4.jpg";
import Govinda5 from "../assets/hospitality/govinda5.jpg";

// ---residential projects
import Shaikh6 from "../assets/residential/shaikh6.png";
import Shaikh1 from "../assets/residential/shaikh1.png";
import Shaikh3 from "../assets/residential/shaikh3.png";
import Shaikh4 from "../assets/residential/shaikh4.png";
import Shaikh5 from "../assets/residential/shaikh5.png";
import Shaikh2 from "../assets/residential/shaikh2.png";
import Shaikh7 from "../assets/residential/shaikh7.png";
// -----
import Daga1 from "../assets/residential/daga1.jpg";
import Daga2 from "../assets/residential/daga2.jpg";
import Daga3 from "../assets/residential/daga3.jpg";
import Daga4 from "../assets/residential/daga4.jpg";
import Daga5 from "../assets/residential/daga5.jpg";
import Daga6 from "../assets/residential/daga6.jpg";
import Daga7 from "../assets/residential/daga7.jpg";

// ---
import Chenani1 from "../assets/residential/chenani1.png";
import Chenani2 from "../assets/residential/chenani2.png";
import Chenani3 from "../assets/residential/chenani3.png";
import Chenani4 from "../assets/residential/chenani4.png";
import Chenani5 from "../assets/residential/chenani5.png";
import Chenani6 from "../assets/residential/chenani6.png";
import Chenani7 from "../assets/residential/chenani7.png";

export const customDesignContentLinks = [
  {
    id: 1,
    title: "4 BHK Premium Daga",
    thumbnail: Carousel1,
    videoUrl: "https://youtu.be/QebQtokag3M?si=Yh_i3CZvhH7AZHTu",
  },
  {
    id: 2,
    title: "4 BHK Chenani",
    thumbnail: Carousel2,
    videoUrl: "https://youtu.be/xGKD2URFYyQ?si=6-CBWDbTr6ygWYrx",
  },
  {
    id: 3,
    title: "CA Ashok Choudary",
    thumbnail: Carousel3,
    videoUrl: "https://youtube.com/shorts/D42gMZy-eYY?si=n74lOwqfQAFZcjUQ",
  },
  {
    id: 4,
    title: "Classic Denim Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo quidem reprehenderit quibusdam.",
    thumbnail: PremiumPhoto,
    videoUrl: "https://youtu.be/Qe4s3M9ax7A?si=FziEuEsjPBPodQAc",
  },
];

export const commericalProjectsLinks = [
  {
    url: "commerical_1",
    coverPhoto: Carousel3,
    photos: ["https://youtube.com/shorts/D42gMZy-eYY?si=n74lOwqfQAFZcjUQ"],
  },
  // { url: "commerical_2", photos: [] },
  // { url: "commerical_3", photos: [] },
];

export const residentionalProjectsLinks = [
  {
    url: "residential_1",
    coverPhoto: Shaikh6,
    photos: [
      { roomName: "Hall", image: Shaikh4 },
      { roomName: "Decent Wall", image: Shaikh3 },
      { roomName: "Dinning Room", image: Shaikh1 },
      { roomName: "Kitchen", image: Shaikh2 },
      { roomName: "Wash Basin", image: Shaikh5 },
      { roomName: "Bedroom", image: Shaikh7 },
    ],
  },
  {
    url: "residential_2",
    coverPhoto: Daga1,
    photos: [
      { roomName: "Enterance", image: Daga7 },
      { roomName: "TV Unit", image: Daga2 },
      { roomName: "Dinning Room", image: Daga3 },
      { roomName: "Master Bedroom", image: Daga4 },
      { roomName: "Bedroom TV unit", image: Daga5 },
      { roomName: "Queen Bedroom ", image: Daga6 },
    ],
  },
  {
    url: "residential_3",
    coverPhoto: Chenani1,
    photos: [
      { roomName: "Main Hall", image: Chenani2 },
      { roomName: "Terrace", image: Chenani3 },
      { roomName: "Dinning Room", image: Chenani4 },
      { roomName: "Modular Kitchen", image: Chenani5 },
      { roomName: "Theater Room", image: Chenani6 },
      { roomName: "Master Bedroom", image: Chenani7 },
    ],
  },
];

export const hospalityProjectsLinks = [
  {
    url: "hospitality_1",
    coverPhoto: Govinda1,
    photos: [Govinda2, Govinda3, Govinda4, Govinda5],
  },
];
