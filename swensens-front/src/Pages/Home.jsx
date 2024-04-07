import React, { useState } from "react";

const Home = () => {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FGRAB 4.4 1440x810px SW-01_0.jpg?alt=media";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FAW 22_03_24 Pack_1440x810px_0.jpg?alt=media";
  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FMANGO-Loyalty-1440x810px.jpg?alt=media";
  const img4 =
    "https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FCAKE-MANGO-Loyalty-1440x810px.jpg?alt=media";

  const images = [img1, img2, img3, img4];
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 2 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === images.length - 3 ? 0 : curr + 1));

  return (
    <React.Fragment>
      <div className="bg-gradient-to-b h-full lg:h-fit lg:pb-44 w-screen from-pinkBang to-pink ">
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-0">
            <div className="mt-10 lg:hidden">
              <img
                alt="loading"
                src="https://swensens1112.com/images/banner-image.svg"
              ></img>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="mx-4 lg:mx-0">
              <div className="text-[40px] pt-10 pl-10 text-white">
                สมัครเป็นสมาชิก สเวนเซ่นส์วันนี้
                พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
              </div>
              <div className="text-[20px] pt-4 pl-10 text-white">
                พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้ ยิ่งคุ้ม ใครๆ
                ก็สมัครได้
                ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ
                รอไม่ได้แล้ว สมัครเลย
              </div>
            </div>
          </div>
          <div className="col-span-0 lg:col-span-1">
            <div className="mt-10 hidden lg:block">
              <img
                alt="loading"
                src="https://swensens1112.com/images/banner-image.svg"
              ></img>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="flex justify-center items-center mt-4">
              <img
                alt="loading"
                src="https://swensens1112.com/images/button/EN_normal.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="my-4 ml-4 text-3xl">Super deal</div>
      <div className="flex w-screen justify-center items-center mb-20">
        <div className="overflow-hidden w-[392px] md:w-[784px] lg:w-fit relative">
          <div
            className="flex transition-transform ease-out duration-500 mr-10"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {[
              ...images.map((s) => (
                <img
                  key={s}
                  alt="loading"
                  src={s}
                  className="w-[60%] md:w-[380px] lg:w-1/2 object-cover px-4"
                />
              )),
            ]}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={() => prev()}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => next()}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className=" bottom-0 mt-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2 ">
              {images
                .filter((_, num) => num % 2 === 0)
                .map((s, i) => (
                  <div
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurr(i);
                    }}
                    className={`transition-all w-10 h-2 bg-primary rounded-full  ${
                      curr === i ? "p-0.5" : "bg-gray-500"
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="my-4 ml-4 text-3xl">News</div>

      <div className="bg-[url('https://swensens1112.com/images/bg-page-bottom.jpg')] w-screen h-fit">
        <div className="flex justify-center items-center text-[30px] pt-10">
          Download on
        </div>
        <div className="flex flex-row justify-center items-center pt-10 gap-4">
          <img
            alt="loading"
            src="https://swensens1112.com/images/google-play.png"
            className="w-[40%] object-contain"
          ></img>
          <img
            alt="loading"
            src="https://swensens1112.com/images/app-store.png"
            className="w-[40%] object-cover"
          ></img>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <img
            alt="loading"
            src="https://swensens1112.com/images/app-screen-webp.webp"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
