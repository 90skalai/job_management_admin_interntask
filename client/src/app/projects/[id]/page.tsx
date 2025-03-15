"use client";

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/projectHeader";

type Props = {params:{id:string};
};


const Projects= ({params}: Props) => {
    const {id}=params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
       
    </div>
  )
};

export default Projects;