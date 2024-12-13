import Doctorpic from "../Pics/Screenshot (1).png";
import TicTactoe from "../Pics/Screenshot (14).png";
import Password from "../Pics/Screenshot (15).png";
import MMB from "../Pics/Screenshot (16).png";
import Portfolio from "../Pics/Screenshot (19).png";

  

function Projects() {
    return (
      <>
        <div className="bg-gray-200 p-6 ">
          <div className="animate-fadeInUp">

          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doctor Appointment App */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-gray-400 w-full max-w-xs md:max-w-sm lg:max-w-64 mx-auto">
             <a
              href="https://github.com/UsamaShamshiri/FYP"
              rel="noreferrer"

              target="_blank"
              >


            
              <img
                alt="Doctor"
                className="w-full h-40  rounded-lg shadow-lg shadow-gray-400"
                src={Doctorpic}
              />
              <h1 className="font-bold mt-4">Doctor Appointment App</h1>
              <h4 className="text-sm text-gray-600">HTML | CSS | PHP</h4>
              <p className="mt-2 text-sm text-gray-800">
                Online platform for appointment
              </p>
              </a>
            </div>
  
            {/* Marriage Bureau Website */}
            <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-400 w-full max-w-xs md:max-w-sm lg:max-w-64 mx-auto">
             <a
             href="https://github.com/UsamaShamshiri/Marriage-Bureau"
             target="_blank"
             rel="noreferrer">

            
              <img
                alt="MMB"
                className="w-full h-40  rounded-lg shadow-lg shadow-gray-400"
                src={MMB}
              />
              <h1 className="font-bold mt-4">Marriage Bureau Website</h1>
              <h4 className="text-sm text-gray-600">React | Java | Spring Boot</h4>
              <p className="mt-2 text-sm text-gray-800">
                Online platform for matchmaking
              </p>
              </a>
            </div>
  
            {/* Tic Tac Toe */}
            <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-400 w-full max-w-xs md:max-w-sm lg:max-w-64 mx-auto">
             <a 
             href="https://github.com/UsamaShamshiri/web-projects/tree/main/TIC-TAC_TOE"
             target="_blank"
             rel="noreferrer">

             
              <img
                alt="TTT"
                className="w-full h-40  rounded-lg shadow-lg shadow-gray-400"
                src={TicTactoe}
              />
              <h1 className="font-bold mt-4">Tic Tac Toe</h1>
              <h4 className="text-sm text-gray-600">HTML | CSS | JavaScript</h4>
              <p className="mt-2 text-sm text-gray-800">
                Simple Tic Tac Toe game for practice
              </p>
              </a>
            </div>
  
            {/* Password Generator */}
            <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-400 w-full max-w-xs md:max-w-sm lg:max-w-64 mx-auto">
             <a href="https://github.com/UsamaShamshiri/web-projects/tree/main/passwordgenerator"
             target="_blank"
             rel="noreferrer"
             >
             <img
                alt="PG"
                className="w-full h-40  rounded-lg shadow-lg shadow-gray-400"
                src={Password}
              />
              <h1 className="font-bold mt-4">Password Generator</h1>
              <h4 className="text-sm text-gray-600">React | JavaScript</h4>
              <p className="mt-2 text-sm text-gray-800">
                Random password generator
              </p>
             </a>
             
            </div>
  
            {/* Portfolio Website */}
            <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-400 w-full max-w-xs md:max-w-sm lg:max-w-64 mx-auto">
              <a 
              href="/">
              <img
                alt="Portfolio"
                className="w-full h-40  rounded-lg shadow-lg shadow-gray-400"
                src={Portfolio}
              />
              <h1 className="font-bold mt-4">Portfolio Website</h1>
              <h4 className="text-sm text-gray-600">React | JavaScript</h4>
              <p className="mt-2 text-sm text-gray-800">
                Portfolio website to showcase my skills
              </p>
              </a>
             
            </div>
          </div>
          </div>

        </div>
      </>
    );
  }
  
  export default Projects;
  
  