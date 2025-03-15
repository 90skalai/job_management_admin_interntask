import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all projects
export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving projects: ${error.message}` });
  }
};

// Create a new project
export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { name, description, jobRole, experience, salary, jobType, endDate, location } = req.body;

  try {
    const newProject = await prisma.project.create({
      data: { name, description, jobRole, experience, salary, jobType, endDate, location },
      select: { 
        id: true, 
        name: true, 
        description: true, 
        jobRole: true, 
        experience: true, 
        salary: true, 
        jobType: true, 
        endDate: true, 
        location: true 
      }, // Ensure id is returned
    });

    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating a project: ${error.message}` });
  }
};
