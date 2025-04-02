/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Laptop` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Laptop_link_key" ON "Laptop"("link");
