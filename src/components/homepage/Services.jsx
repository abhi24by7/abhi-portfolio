import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Frontend",
    "Backend",
    "Problem solving ",
    "C++",
    "UI/UX Design",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML CSS",
    
    "Figma",
    "ReactJS",
    "NodeJS",
    "Express JS",
    "TailwindCSS",
    "MongoDB",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="experience" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="Specializing in design and web-related endeavors, I, as a full-stack web developer with a 
          passion for C++ programming and problem-solving, strive to provide impactful and elevated digital experiences through my services. 
          My aim is to deliver solutions that resonate with users and leave a lasting impression."
          items={expertiseItems}
        />
        <ServiceUi
          title="my tech stack."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
