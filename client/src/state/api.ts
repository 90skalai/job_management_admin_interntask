import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define Project Interface
export interface Project {
  id: number;
  name: string;
  description?: string;
  jobRole?: string;
  experience?: number;
  salary?: number;
  jobType?: string;
  endDate?: string;
  location?: string;
}

// API Configuration
export const api = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: ["Projects"],
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "projects",
      providesTags: ["Projects"],
    }),
    createProject: build.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: "projects",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = api;
