"use client";

import React from 'react';
import styles from "./navfilter.module.css";
import { useState } from "react";

type Props = {}

const Navfilter = (props: Props) => {
    const [salaryRange, setSalaryRange] = useState<[number, number]>([50000, 80000]);
  return (
    <div className={styles.filterContainer}>
    {/* Search Bar */}
    <div className={styles.searchBox}>
    <img src="Vector.png" alt="Logo" />
      <input type="text" placeholder="Search By Job Title, Role" />
    </div>
    <div className={styles.verticalline }></div>
    {/* Preferred Location */}
    <div className={styles.dropdown}>
    <img src="Location.png" alt="Logo" />
      <select>
        <option>Preferred Location</option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
      </select>
    </div>
    <div className={styles.verticalline }></div>
    {/* Job Type */}
    <div className={styles.dropdown}>
    <img src="Vector1.png" alt="Logo" />
      <select>
        <option>Job type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
      </select>
    </div>
     <div className={styles.verticalline }></div>
    {/* Salary Slider */}
    <div className={styles.salaryContainer}>
        <div className={styles.salarycontainermain}>
        <div className={styles.salarycontainer2}>
       <span>Salary Per Month</span>
      <span className={styles.salaryValue}>
        ₹{(salaryRange[0] / 1000).toFixed(0)}k - ₹{(salaryRange[1] / 1000).toFixed(0)}k
      </span>
       </div>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min="30000"
          max="150000"
          value={salaryRange[0]}
          onChange={(e) =>
            setSalaryRange([Number(e.target.value), salaryRange[1]])
          }
        />
        <input
          type="range"
          min="30000"
          max="150000"
          value={salaryRange[1]}
          onChange={(e) =>
            setSalaryRange([salaryRange[0], Number(e.target.value)])
          }
        />
      </div>
        </div>
      
      
    </div>
  </div>
  )
}

export default Navfilter