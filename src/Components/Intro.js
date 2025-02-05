

import Pic from "../Pics/IconPic.png";

function Intro() {
  return (
    <>
      <div className=" flex flex-col-reverse   lg:flex-row justify-around items-center w-full h-screen bg-gray-200 px-6 lg:px-16 py-10">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6 max-w-xl animate-fadeInUp ">
          <h1 className="text-4xl md:text-5xl font-semibold text-indigo-700">
            I'm Usama Shamshiri
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-2xl ">
            Software Engineer | Java Developer
          </h2>
          <p className="text-lg  mt-4">
            Passionate about building scalable and efficient software solutions. I specialize in Java, Spring Boot, and web technologies. Let's connect and create something amazing together!
          </p>

          <div className="mt-8">
            <a
              href="https://drive.google.com/uc?id=1Hd065nu9YARN8bUv_ggnaffilkNx4AjP&exprt=download"
              className="  bg-indigo-700 text-white px-8 py-4 rounded-full shadow-xl hover:bg-indigo-500 "
            >
              Download Resume
            </a>
          </div>
          
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 animate-fadeInUp ">
          <img
            src={Pic}
            alt="Profile Pic"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}

export default Intro;


