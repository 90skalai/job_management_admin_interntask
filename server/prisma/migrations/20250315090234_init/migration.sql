-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "jobRole" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "salary" INTEGER NOT NULL,
    "jobType" TEXT NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
