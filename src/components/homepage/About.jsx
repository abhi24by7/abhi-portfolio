import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile-pic.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Abhi leaning on a guard rail in front of a lake"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am an final year Computer Science undergrad
              @ National Institute of Technology, Jamshedpur.
              <br></br>
              <br></br>
              {/* I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact. 😎 */}
              I excel in constructing comprehensive web applications, emphasizing my proficiency in frontend development. 
              Additionally, I enjoy tackling analytical challenges in the realm of data structures and algorithms, 
              employing the enchanting powers of C++ to weave my programming magic.
              <br></br>
              <br></br>
              When I am not developing or coding, I enjoy reading books, especially classic literature, 
              and showcasing my amateur photography skills on my {" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.instagram.com/_abhiiii24/"
              >
                Instagram 📸
              </a>
              {" "}stories.
              <br />
              <br />
              If you would like to know more about me:{" "}
              <a className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://drive.google.com/file/d/18Mfk9NY_VDDWHkdKk3QG6XmYG39IVouy/view?usp=sharing">
                  My Resume 📄
                </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
