import logo from "../Pics/IUB_LOGO.png"
import Git from "../Pics/WhatsApp Image 2024-12-04 at 2.38.13 PM (1).jpeg"
import JavaP from "../Pics/WhatsApp Image 2024-12-04 at 2.38.14 PM.jpeg"
import JavaB from "../Pics/WhatsApp Image 2024-12-04 at 2.38.14 PM.jpeg"
import Spring from "../Pics/WhatsApp Image 2024-12-04 at 2.38.13 PM (2).jpeg"

function Edu() {
 
    return (
        <>
            <div className="p-6 bg-gray-200  min-h-screen">
                <div className="animate-fadeInUp">

                {/* Education Section */}
                <section className="mb-16">
                    <h1 className="text-3xl font-bold text-center text-indigo-700 ">Education</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                        <img
                            alt="logo"
                            src={logo}
                            className="w-32 h-32 rounded-full  shadow-lg"
                        />
                        <div className="text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Bachelor's in Software Engineering
                            </h2>
                            <h3 className="text-lg text-gray-600 ">Islamia University of Bahawalpur</h3>
                            <p className="text-md  text-gray-600">2020-2024</p>
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section>
                    <h1 className="text-3xl font-bold text-center text-indigo-700 ">Certifications</h1>

                    {/* Spring Certification */}
                    <div className="  mt-12 flex justify-center mb-8 ">
                        <div className=" bg-white p-6 rounded-lg shadow-lg  shadow-gray-400 md:w-1/2">
                            <div className="flex items-center mb-4">
                                <img
                                    alt="Spring"
                                    src={Spring}
                                    className="w-16 h-16 rounded-full border-2 border-black  mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Spring 6 & Spring Boot 3</h3>
                                    <p className="text-sm text-gray-500">
                                        Spring | Spring Boot | Spring Data JPA | Spring Security | MVC | Spring JDBC
                                    </p>
                                    <p className="text-sm text-gray-500">Telusko | Dec 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Java for Programmers Certification */}
                    <div className="flex justify-center mb-8">
                        <div className=" p-6 bg-white rounded-lg shadow-lg shadow-gray-400 w-full  md:w-1/2 ">
                            <div className="flex items-center mb-4">
                                <img
                                    alt="JavaP"
                                    src={JavaP}
                                    className="w-16 h-16 rounded-full border-2 border-black  mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Java for Programmers</h3>
                                    <p className="text-sm text-gray-500">Core Java</p>
                                    <p className="text-sm text-gray-500">Telusko | Dec 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Java for Beginners Certification */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400  md:w-1/2">
                            <div className="flex items-center mb-4">
                                <img
                                    alt="JavaB"
                                    src={JavaB}
                                    className="w-16 h-16 rounded-full border-2 border-black  mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Java for Beginners</h3>
                                    <p className="text-sm text-gray-500">
                                        Java | OOP | Java8 (Features) | JDBC | Exception Handling | MultiThreading
                                    </p>
                                    <p className="text-sm text-gray-500">Telusko | Dec 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Git & GitHub Certification */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-400 w-full md:w-1/2">
                            <div className="flex items-center mb-4">
                                <img
                                    alt="Git"
                                    src={Git}
                                    className="w-16 h-16 rounded-full border-2 border-black mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Git & GitHub</h3>
                                    <p className="text-sm text-gray-500">Git | GitHub | VCS</p>
                                    <p className="text-sm text-gray-500">Telusko | Dec 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

            </div>
        </>
    );
}

export default Edu;
