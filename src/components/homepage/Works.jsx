import nestaway from "/src/assets/images/nestaway-desktop.png";
import cloudf from "/src/assets/images/cloudf-square.png";
import drl from "/src/assets/images/drl.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://nest-away-abhi.netlify.app/"
            img={nestaway}
            alt="nest away website mockup"
            name="nestaway "
            type="Web Development • Fullstack"
            year="2023"
            tools="JavaScript • MongoDB • ExpressJS • ReactJS • NodeJS • TailwindCSS"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://cloud-f-system.netlify.app/"
            img={cloudf}
            alt="cloudF landing page mockup"
            name="cloud-F "
            type="Frontend Development"
            year="2022"
            tools="ReactJS • Redux • Firebase"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/abhi24by7/deep-RL"
            img={drl}
            alt="deepRL project description"
            name="Deep RL based Computational offloading (academic project)"
            type="Machine Learning • Deep Reinforcement Learning"
            year="2023"
            tools="Pyhton • Jupyter notebook "
          />
        </div>
        {/* <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div> */}
      </div>
    </section>
  );
}
