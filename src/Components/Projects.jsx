
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { IoMdInformationCircleOutline } from "react-icons/io";


function Projects() {
  return (
    <div className="h-[100vh] bg-[#e9e8e8] pb-10 md:pb-20 w-full md:block hidden">
        <div className=" px-10 lg:px-20 font-bold text-2xl flex items-center gap-2"><h1>Reviews</h1><div className="tooltip" data-tip="Please don't mind. I don't have real reviews so that I have to put the fake one."><IoMdInformationCircleOutline/></div></div>
        <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Michael Smith</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Outstanding developer! The project was flawless and communication was excellent throughout. Five stars!
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Emily Johnson</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Exceptional work! Delivered ahead of schedule and exceeded all expectations. Highly recommended
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">James Williams</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Remarkable job! The website looks fantastic and functions perfectly. Couldn't be happier.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Sarah Thompson</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Incredible skills and professionalism. The best full stack developer I've worked with. Will hire again.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">David Anderson</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Amazing experience! Delivered high-quality work on time and was very responsive. Strongly recommend!
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Olivia Brown</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Top-notch service and expertise. Brought our vision to life with precision and creativity. Highly satisfied!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: " md:col-span-3",
    thumbnail: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-3",
    thumbnail:
      "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-4",
    thumbnail:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg",
  },
];

export default Projects
