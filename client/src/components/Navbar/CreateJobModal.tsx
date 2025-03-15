"use client";
import React, { useState } from "react";
import { useCreateProjectMutation } from "../../state/api";
import styles from "./CreateJobModal.module.scss";

// Define Props Interface
interface CreateJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobCreated: (job: any) => void;
}

const CreateJobModal: React.FC<CreateJobModalProps> = ({ isOpen, onClose, onJobCreated }) => {
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const [jobData, setJobData] = useState({
    name: "",
    jobRole: "",
    experience: "",
    salary: "",
    jobType: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateJob = async () => {
    console.log("Submitting job data:", jobData);

    try {
      const formattedJobData = {
        ...jobData,
        experience: parseInt(jobData.experience) || 0,
        salary: parseInt(jobData.salary) || 0,
      };

      const newJob = await createProject(formattedJobData).unwrap();
      console.log("Job created successfully:", newJob);
      onJobCreated(newJob);
      onClose();
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Failed to create job. Please check API logs.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2 className={styles["modal-title"]}>Create Job</h2>
        <input type="text" name="name" placeholder="Job Name" value={jobData.name} onChange={handleChange} className={styles["modal-input"]} />
        <input type="text" name="jobRole" placeholder="Role" value={jobData.jobRole} onChange={handleChange} className={styles["modal-input"]} />
        <input type="number" name="experience" placeholder="Experience" value={jobData.experience} onChange={handleChange} className={styles["modal-input"]} />
        <input type="number" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} className={styles["modal-input"]} />
        <input type="text" name="jobType" placeholder="Type (Full-time, Part-time)" value={jobData.jobType} onChange={handleChange} className={styles["modal-input"]} />
        <input type="date" name="endDate" value={jobData.endDate} onChange={handleChange} className={styles["modal-input"]} />
        <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} className={styles["modal-input"]} />

        <div className={styles["modal-buttons"]}>
          <button onClick={handleCreateJob} disabled={isLoading} className={`${styles["modal-button"]} ${styles["create-button"]}`}>
            {isLoading ? "Creating..." : "Create Job"}
          </button>
          <button onClick={onClose} className={`${styles["modal-button"]} ${styles["close-button"]}`}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
