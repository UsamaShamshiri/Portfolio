import React, { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );
    const currentSection = sectionRef.current;    if (sectionRef.current) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
    return (
      <>
      <div className="bg-gray-200 ">

      
        {/* About Me Section */}
        <div className=" flex flex-col items-center justify-center h-screen px-4 animate-fadeInUp " >
          <div className="text-center w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">About Me</h1>
            <p className="text-md md:text-base lg:text-lg  leading-relaxed ">
              Graduate Software Engineer skilled in Java and Spring Boot, with experience in building and troubleshooting
              backend solutions that work smoothly with frontend interfaces. Skilled in React and creating responsive, user-friendly
              applications. A motivated team player focused on quality and continuous learning in software development.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?id=1ySrNPKSj8WcoawYA9rquMTQ27xMG4rtT&export=download"
              className="  bg-indigo-700 text-white px-8 py-4 rounded-full shadow-xl hover:bg-indigo-500 "
            >
              Download Resume
            </a>
          </div>
        </div>
  
        {/* Skills Section */}
        <div
              ref={sectionRef}

         className={` flex flex-col items-center h-screen px-4 py-8 ${
        isVisible ? 'animate-fadeInUp' : ''
      }`}>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-sky-300">My Skills</h2>
  
            {/* Skill Bars */}
            {[
              { label: "Java", percentage: 70 },
              { label: "Spring Boot", percentage: 75 },
              { label: "JavaScript", percentage: 70 },
              { label: "React", percentage: 80 },
              { label: "MongoDB", percentage: 60 },
            ].map((skill, index) => (
              <div className="mb-6" key={index}>
                <label className="block text-lg font-medium mb-1">{skill.label}</label>
                <div className="text-right text-sm font-medium text-gray-700">{skill.percentage}%</div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-700 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  >

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        

        </div>
      </>
    );
  }
  
  export default About;
  
