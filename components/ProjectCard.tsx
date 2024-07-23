import React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

interface Project {
  projectName: string;
  projectDesc: string;
  techstack?: string;
  workDone: string;
  hostedUrl: string;
  association: string;
  images?: string[];
  impact: string;
  projectThumbnail: string;
}

const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <Card>
      <div className="project-card">
        <img
          src={data.projectThumbnail}
          alt={data.projectName}
          className="project-thumbnail"
        />
        <div className="project-details">
          <h3>{data.projectName}</h3>
          <p>{data.projectDesc}</p>
          <p>
            <strong>Work Done: </strong>
            {data.workDone}
          </p>
          <p>
            <strong>Association: </strong>
            {data.association}
          </p>
          <p>
            <strong>Impact: </strong>
            {data.impact}
          </p>
          {data.techstack && (
            <div>
              <strong>Tech Stack: </strong>
              <span className="col-span-2">
                {data.techstack.split(",").map((x) => (
                  <Chip key={x} size="small" className="m-1">
                    {x}
                  </Chip>
                ))}
              </span>
            </div>
          )}
          {data.hostedUrl && (
            <a href={data.hostedUrl} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
