import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Invesapra",
      description:
        "A web-based application development project designed to meet the client's specific needs. Focus on performance, security, and optimal user experience.",
      tags: ["Laravel", "Back-end", "Front-end"],
      image: "/mockup1.png",
      bgColor: "bg-gray-100",
      url: "https://github.com/dewaradtya/ukk-inventaris",
    },
    {
      id: 2,
      title: "Smk Nusa",
      description:
        "A web-based application development project designed to meet the client's specific needs. Focus on performance, security, and optimal user experience.",
      tags: ["Back-End", "Laravel"],
      image: "/smknusa.png",
      bgColor: "bg-gray-300",
      url: "https://www.smkn1purwosari.sch.id/",
    },
    {
      id: 3,
      title: "MPM Motor",
      description:
      "A web-based application development project designed to meet the client's specific needs. Focus on performance, security, and optimal user experience.",
      tags: ["Laravel", "Back-end", "Front-end"],
      image: "/mpm.png",
      bgColor: "bg-gray-200",
      url: "https://github.com/dewaradtya/mpm-motor",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Selected projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Baris pertama dengan 2 kolom */}
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden ${project.bgColor}`}
            >
              <a
                href={`${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-4xl text-black font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-md md:text-lg max-w-md mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-white bg-black/20 backdrop-blur-md bg-opacity-70 rounded-full text-sm md:text-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-auto max-h-80 md:max-h-96 w-full rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>
          ))}

          {/* Baris kedua dengan 1 kolom full width */}
          <div className="col-span-1 md:col-span-2">
            {projects.slice(2, 3).map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden ${project.bgColor}`}
              >
                <a
                  href={`${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 text-center md:text-left p-8 md:p-12">
                      <h3 className="text-2xl md:text-4xl text-black font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-md md:text-lg max-w-md mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-white bg-black/20 backdrop-blur-md bg-opacity-70 rounded-full text-sm md:text-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-80 md:max-h-96 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <a
            href="https://github.com/dewaradtya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="text-md md:text-2xl underline text-black mr-4">
              View all projects
            </span>
            <FaArrowRight className="w-5 md:w-6 h-5 md:h-6 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
