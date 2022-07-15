import React, { useState } from "react";
import "./slideBar.css";
import Linefill from "./LineFill/linefill";

function SlideBar(props) {
  const [descvis, setdesvis] = useState(0);
  const [timer, settimer] = useState(4100);

  const circular = () => {
    setdesvis((descvis + 1) % 5);
    props.setView((descvis + 1) % 5);
  };

  setTimeout(circular, timer);

  const { setView } = props;
  const getUi = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className="outerslide">
          <div>
            <Linefill height={descvis} index={index} />
          </div>

          <div
            className={`${descvis === index ? "borderclass" : ""} `}
            onClick={() => {
              setView(index);
              setdesvis(index);
              settimer(500000);
            }}
          >
            <div
              className={`${descvis === index ? "internal" : "internaltext"}`}
            >
              <h3>{data.name}</h3>
            </div>
            {descvis === index && (
              <div>
                <p>{data.descripion}</p>
                <a href={data.link}>Learn More</a>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return <div className="leftcontent">{getUi(details)}</div>;
}

export default SlideBar;

const details = [
  {
    name: "Automated Testing",
    descripion:
      "Perform automated browser tests on a scalable, secure, and reliable automation cloud. Run Selenium, Cypress, Appium, Hyperexecute, Playwright and Puppeteer tests at scale on 3000+ browsers and devices",
    link: "https://www.lambdatest.com/automation-testing",
  },
  {
    name: "HyperExecute",
    descripion:
      "Blazing fast test execution on cloud that will beat your local test execution speeds. A LambdaTest exclusive platform that is guaranteed faster than any other cloud grid offering.",
    link: "https://www.lambdatest.com/hyperexecute",
  },
  {
    name: "Live Testing",
    descripion:
      "Perform live interactive cross browser testing of your public or locally hosted websites and web apps on 3000+ real mobile and desktop browsers running on real operating system.",
    link: "https://www.lambdatest.com/feature",
  },
  {
    name: "Mobile App Testing",
    descripion:
      "Perform live interactive testing of your mobile apps on a multitude of Android and iOS devices. Test and debug your mobile apps faster on both Emulators/Simulators or online real device cloud.",
    link: "https://www.lambdatest.com/mobile-app-testing",
  },
  {
    name: "Test at Scale",
    descripion:
      "Accelerate your whole pipeline from dev to release. Get faster feedback on code changes, manage flaky tests, and keep master green. Industry-leading test intelligence platform.",
    link: "https://www.lambdatest.com/test-at-scale",
  },
];
