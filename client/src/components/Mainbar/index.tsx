"use client";

import React from "react";
import { useGetProjectsQuery } from "@/state/api";
import "./JobCard.css"; // Ensure you create this CSS file for styling

const JobCard = () => {
  const { data: projects } = useGetProjectsQuery();

  return (
    <div className="job-container">
      {projects?.map((project) => (
        <div key={project.id} className="job-card">
          <div className="job-header">
            <span className="job-time">24h Ago</span>
          </div>
          <h3 className="job-title">{project.jobRole}</h3>
          <p className="company-name">{project.name}</p>
          <div className="job-info">
            <span>👤 {project.experience || "1-3 yr Exp"}</span>
            <span>📍 {project.location || "Onsite"}</span>
            <span>💰 {project.salary || "12LPA"}</span>
          </div>
          <p className="job-description">
            {project.description ||
              "A user-friendly interface lets you browse stunning photos and videos."}
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
