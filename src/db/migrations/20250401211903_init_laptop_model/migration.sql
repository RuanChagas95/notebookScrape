-- CreateTable
CREATE TABLE "Laptop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "options" TEXT NOT NULL
);
