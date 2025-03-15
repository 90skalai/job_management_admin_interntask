"use client"; // ✅ Add this at the top

import React, { useState } from "react";
import Link from "next/link";
import CreateJobModal from "./CreateJobModal";
import styles from "./index.module.css";

// Define Job Type
interface Job {
  id: number;
  name: string;
  jobRole: string;
  experience: number;
  salary: number;
  jobType: string;
  endDate: string;
  location: string;
}

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobCreated = (job: Job) => {
    console.log("New job created:", job);
    alert("Job Created Successfully!");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/cmwlogo.png" alt="Logo" />
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/find-jobs">Find Jobs</Link></li>
          <li><Link href="/find-talents">Find Talents</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
        </ul>

        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={() => setIsModalOpen(true)}>Create Jobs</button>
        </div>
      </nav>

      <CreateJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onJobCreated={handleJobCreated} />
    </>
  );
};

export default Navbar;
