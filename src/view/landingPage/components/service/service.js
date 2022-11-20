import React from "react";
import "./service.css";
import FadeInSection from "../../../../shared/fade";
import useOnScreen from "../../../../shared/intersection";
const Service = () => {
  const [isWeb, setWeb] = React.useState(false);
  const [isMark, setMark] = React.useState(false);
  const [isMech, setMech] = React.useState(false);
  const [isGrpahic, setGrpahic] = React.useState(false);
//   const ref = React.useRef()
//   const isVisible = useOnScreen(ref)
  return (
    <div className="service">
      <div className="container">
        <FadeInSection>
          <h2 className={`Serve  is-visible `}>Our Service</h2>
        </FadeInSection>
        <div className="service_container">
          <div className="left_side">
            <ul
              className={`service_cat`}
              style={
                {
                //   position: isVisible ? "fixed" : "relative",
                //   top: isVisible ? "30%" : "30px",
                //   bottom: isVisible ? "30%" : "10%",
                }
              }
            >
              <li>
                <div
                  style={{ display: "flex" }}
                  className={`web ${isWeb ? "active" : ""}`}
                >
                  <sup>01</sup> <p>Website Development</p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                  className={`strategy ${isMark ? "active" : ""}`}
                >
                  <sup>02</sup>
                  <p> Strategy, Matkting&Maintenace</p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                  className={`web ${isGrpahic ? "active" : ""}`}
                >
                  <sup>03</sup>
                  <p>Graphic Design</p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                  className={`web ${isMech ? "active" : ""}`}
                //   ref={ref}

                >
                  <sup>04</sup>
                  <p> Mchanical Design</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right_side">
            
          {/* {console.log(isVisible)} */}
            <FadeInSection>
              <div
                className={`web`}
                // style={{ display: !isWeb ? "none" : "" }}
              >
                <ul>
                  <li>UX</li>
                  <li>Corporate Website</li>
                  <li>E-Commerce</li>
                  <li>Landing Page</li>
                  <li>E-Portfolio/CV</li>
                  <li>Landing Wordpress</li>
                </ul>
                <p>
                  From one-page site to complex admin panels, we are ready to
                  create your own website using the latest technologies. Fast
                  page load speed, responsive, user-friendly and eye-catching
                  are our main criterias to tailor your website for your target
                  audience.
                </p>
                <a href="#web">learn more</a>
              </div>
            </FadeInSection>
            <div
              className="markting"
            //   ref={ref}
              // style={{ display: !isMarkting ? "none" : "" }}
            >
              <ul>
                <li>SEO</li>
                <li>Online Advertising</li>
                <li>Hosting</li>
                <li>Maintenance</li>
                <li>Domain Purchase</li>
                <li>QA Testing</li>
              </ul>
              <p>
                We provide technical assistance with software tools, enabling
                you reaching for the right audience at the right time to boost
                traffic to your website. We assist in keeping projects updated,
                from technology changes to the addition of new functionality.
              </p>
              <a href="#markting">learn more</a>
            </div>
            <div
              className="graphic"
              // style={{ display: !isGraphic ? "none" : "" }}
            >
              <ul>
                <li>Flyer</li>
                <li>Infographics</li>
                <li>Poster</li>
                <li>Social Media</li>
                <li>Restaurant Menu</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Cards</li>
              </ul>
              <p>
                From one-page site to complex admin panels, we are ready to
                create your own website using the latest technologies. Fast page
                load speed, responsive, user-friendly and eye-catching are our
                main criterias to tailor your website for your target audience.
              </p>
              <a href="#graphic">learn more</a>
            </div>
            <div
              className="mech"
              // style={{ display: !isMech ? "none" : "" }}
            >
              <ul>
                <li>SOLIDWORKS</li>
                <li>AutoCAD</li>
                <li>Design Consultancy</li>
                <li>3D Modelling</li>
                <li>Simulation</li>
                <li>Rendering</li>
              </ul>
              <p>
                We design and customize your mechanical concept idea from
                scratch that meets user needs and objectives. Using SOLIDWORKS
                or AutoCAD, We improve the ease of product use, reduce cost, and
                increase efficiency and accuracy.
              </p>
              <a href="#mech">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
