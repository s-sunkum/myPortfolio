import React, { Component } from "react";
import "./experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#280d5a", color: "#fff" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <div className="column1">
            <h3 className="vertical-timeline-element-title">
              Jerome High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dublin, Ohio</h4>
            <p>High School Diploma</p>
            <p>Date: 2016 - 2020</p>
          </div>
          <div className="column2">
            <img src={require("./Knot.png")} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#280d5a", color: "#fff" }}
          icon={<WorkIcon></WorkIcon>}
        >
          <div className="column1">
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern - Rovisys
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Aurora, Ohio</h4>
            <p>
              Developed internal applications for Enterprise Web Development
              Team and operated data collection procedures for Industrial
              Artificial Intelligence division.
            </p>
            <p>Date: May 2022 - August 2022</p>
          </div>
          <div className="column2">
            <img src={require("./rovisys.png")} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#280d5a", color: "#fff" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <div className="column1">
            <h3 className="vertical-timeline-element-title">
              The Ohio State University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Columbus, Ohio
            </h4>
            <p>Bachelor's Degree in Computer Science</p>
            <p>2020 - Present</p>
          </div>
          <div className="column2">
            <img src={require("./osu.png")} />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
