import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/html-5.png";
import PhotoShopImg from "../assets/images/physics.png";
import AdobeImg from "../assets/images/js.png";
import SketchImg from "../assets/images/icons8-tailwind-css-100.png";
import InvisionImg from "../assets/images/wordpress.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Front-End Development </p>
                <p className="cursus university">
                  Sharpener Tech / 2023 - 2024
                </p>
                <p className="cursus">
                  I completed the Complete Front-End Development Bootcamp at
                  Sharpener Tech, mastering modern web technologies like HTML,
                  CSS, JavaScript, and React.js.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor of Computer Application</p>
                <p className="cursus university">
                  Crescent Institute / 2014 - 2016
                </p>
                <p className="cursus">
                  I have a Bachelor's in Computer Applications with an 8.5 CGPA
                  from B.S. Abdur Rahman Crescent Institute of Science and
                  Technology, specializing in software development.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor"> Higher Secondary Certificate</p>
                <p className="cursus university">
                  Natesan Vidyasala/ 2019 - 2020
                </p>
                <p className="cursus">
                  I hold a Bachelor's in Computer Applications with an 8.5 CGPA
                  from B.S. Abdur Rahman Crescent Institute of Science and
                  Technology, where I gained a strong foundation in computer
                  science, programming, and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor"> Software Developer</p>
                <p className="cursus university">
                  Desizntech — / 2024 - Current
                </p>
                <p className="cursus">
                  I built responsive interfaces with ReactJS, Redux, and
                  Tailwind CSS, supporting 100+ users, and optimized API
                  connections, reducing response times by 25%.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor"> Software Developer Internship</p>
                <p className="cursus university">
                  Quantzi Infotech Private Limited / 2024
                </p>
                <p className="cursus">
                  I developed and debugged 50+ features and 30 bugs, improving
                  performance by 20%. Collaborating with 5+ team members, I also
                  wrote 50+ unit tests and updated 20+ documentation files.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Freelancer</p>
                <p className="cursus university">Freelancer/ 2023 - 2024</p>
                <p className="cursus">
                  As a Freelancer (2023-2024), I provided custom web development
                  solutions, focusing on responsive design, performance
                  optimization, and client collaboration for high-quality
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="79" className="progress-item fade_up">
            sd
          </div>
          <div data-num="92" className="progress-item fade_up">
            sd
          </div>
          <div data-num="85" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="76" className="progress-item fade_up">
            ds
          </div>
          <div data-num="83" className="progress-item fade_up">
            ds
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up">
            <img src={FigmaImg} alt="figma-img" className="skillImg" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>HTML, CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up">
            <img src={PhotoShopImg} alt="photoshop-img" className="skillImg" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>React</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} alt="adobe-xd-img" className="skillImg" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>JavaScript</p>
            </div>
          </div>

          <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg} alt="sktech-img" className="skillImg" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>tailwind</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" className="skillImg" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>wordpress</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      {/* <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Awards.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">Awwwards Interior</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">The Webby Awards</p>
                    <p className="award-winner-text">Nominee</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">EWA Design</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">BEST Star</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
