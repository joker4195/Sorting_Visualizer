import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function ProjectCard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft data-aos="fade-up-right">
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {list.demo && (
                <a
                  className="btn PrimaryBtn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
