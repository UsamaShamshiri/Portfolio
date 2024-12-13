
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
 
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-200 p-6">
        <div className="animate-fadeInUp">

        <h1 className="text-3xl font-bold text-center  mb-12 text-indigo-700">
          Contact Me
        </h1>

        <div className="flex justify-center items-center">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {/* Contact Info Section */}
              <div
               className={"bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300  "}>
                <FontAwesomeIcon icon={faLocationDot} size="2x" className="text-red-500" />
              <div>
              <h3 className="text-xl font-semibold">Address</h3>

              <a
                    href="https://maps.app.goo.gl/1G2pZMh6bvCR6Rc5A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    Lahore,Pakistan
                  </a>
              </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faPhone} size="2x"  />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-lg">+923076305761</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500" />
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-lg">+923076305761</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-sky-600" />
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/usama-shamshiri-7aaa452a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Usama Shamshiri
                  </a>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faEnvelope} size="2x"  />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a href="mailto:usamashamshiri@gmail.com" className="text-lg hover:underline">
                    usamashamshiri@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media & Website Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-900" />
                <div>
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <a
                    href="https://github.com/UsamaShamshiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Usama_Shamshiri
                  </a>
                </div>
              </div>

              <div className="bg-white p-6  rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faGlobe} size="2x" />
                <div>
                  <h3 className="text-xl font-semibold">Website</h3>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                    My Website
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 flex items-center space-x-4 hover:scale-105  duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-700" />
                <div>
                  <h3 className="text-xl font-semibold">Facebook</h3>
                  <a
                    href="https://www.facebook.com/usama.shamshiri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Usama Shamsheri
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Contact;

