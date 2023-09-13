// components/Timeline.js

const Timeline = () => {
  const milestones = [
    {
      year: "Jul 2023 - Aug 2023",
      job: "Java Developer at Go International Service ",
      description: [
        "Responsible for developing and maintaining Java applications, ensuring their functionality and performance meet industry standards.",
        "Collaborate with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        "Implement best practices and adhere to coding standards to produce clean, efficient, and maintainable code.",
        "Participate in code reviews, troubleshooting, and debugging to identify and resolve issues.",
        "Contribute to the design and architecture of software systems, ensuring scalability, reliability, and security.",
        "Tools: Java, Spring Framework, Maven, Git, IntelliJ IDEA, PostgreSQL, Kafka, Next JS, Scylla DB, Continent 8",
      ],
    },
    {
      year: "Jan 2020 - Mei 2023 ",
      job: "Full Stack Developer at Bank KEB Hana Indonesia ",
      description: [
        "Spearheaded the development and maintenance of the corporate website, ensuring its optimal functionality and seamless user experience.",
        "Successfully designed, developed, and maintained Hana Mobile Apps, delivering high-quality mobile solutions that aligned with industry standards and user expectations.",
        "Proficiently developed, maintained, and provided support for mobile applications utilizing iOS and/or Android platforms, leveraging strong technical skills and expertise.",
        "Took charge of the development and maintenance of Hana Pioneer, a key software component, ensuring its efficiency, reliability, and adherence to project requirements.",
        "Played a pivotal role in developing and maintaining a Microservices architecture for a new internal project, employing cutting-edge technologies and best practices to enhance scalability and flexibility.",
        "Tools : Android Studio, STS, Microsoft Visual Code, Eureka Services Discovery, Spring Boot, AWS,Docker, Git, NGINX, MYSQL, CI / CD on Gitlab, Kibana , Swagger, Next Js",
      ],
    },
    {
      year: "Jul 2019 - Dec 2020",
      job: "Business Analyst at Bank KEB Hana Indonesia ",
      description: [
        "Collaborated with business users to gather requirements.",
        "Conducted analysis of the current process, identifying issues, boundaries, and project timelines.",
        "Identified opportunities for process and function automation by establishing clear process boundaries.",
        "Designed and developed the desired future-state process in collaboration with business users.",
        "Prepared User Requirement Specifications to document the needs of the users.",
        "Created comprehensive Functional Specification Documents.",
        "Developed and maintained Hana Pioneer, ensuring its continued functionality and efficiency.",
        "Tools: Android studio, SQL Server 2008",
      ],
    },
    {
      year: "Jul 2018 - Jul 2019 ",
      job: "Android Developer at Intikom Berlian Mustika ",
      description: [
        "Developed Hana Recruitment applications for both iOS and Android platforms.",
        "Tools: Android Studio, Kotlin, Xcode, SQL Server 2008",
      ],
    },
    {
      year: "Jun 2017 - Jul 2018",
      job: "Android Developer at XYBase Inc.",
      description: [
        "Developed and maintained hybrid applications for ad hoc purposes in airport environments.",
        "Tools: Visual code, Ionic, Kotlin, Cordova, SQL Server 2008",
      ],
    },
  ];

  return (
    <section
      className="bg-[#1f242d] min-h-screen text-white p-4 sm:p-6"
      id="skill"
      data-aos="zoom-in-down"
      data-aos-duration="1500"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          My
          <span className="text-2xl sm:text-3xl font-bold text-[#0ef] mx-2">
            Journey
          </span>
        </h1>
      </div>

      <div className="relative m-4 sm:m-8 rounded-lg">
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#0ef] z-0"></div>

        <div className="relative z-10">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row mb-4 sm:mb-8 justify-between"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              {/* Card */}
              <div
                className={`w-full sm:w-1/2 p-2 sm:p-6 ${
                  index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                } relative`}
              >
                {index % 2 === 0 && (
                  <div className="rounded-lg shadow-lg p-4 sm:p-6 bg-white text-black">
                    <h3 className="font-bold text-lg">{milestone.year}</h3>
                    <p className="font-semibold mt-2">{milestone.job}</p>
                    <ul className="m-4 list-disc">
                      {milestone.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Circle Marker */}
              <div className="flex justify-center items-center z-50 relative mb-4 sm:mb-0">
                <div className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px] rounded-full bg-[#0ef]"></div>
              </div>

              <div
                className={`w-full sm:w-1/2 p-2 sm:p-6 ${
                  index % 2 === 0 ? "sm:pl-12" : "sm:pr-12"
                } relative`}
              >
                {index % 2 !== 0 && (
                  <div className="rounded-lg shadow-lg p-4 sm:p-6 bg-white text-black">
                    <h3 className="font-bold text-lg">{milestone.year}</h3>
                    <p className="font-semibold mt-2">{milestone.job}</p>
                    <ul className="m-4 list-disc">
                      {milestone.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
