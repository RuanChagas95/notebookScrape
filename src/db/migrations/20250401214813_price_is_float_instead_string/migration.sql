/*
  Warnings:

  - You are about to alter the column `price` on the `Laptop` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Laptop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "options" TEXT NOT NULL
);
INSERT INTO "new_Laptop" ("brand", "description", "id", "image", "link", "options", "price", "rating", "reviewCount", "title") SELECT "brand", "description", "id", "image", "link", "options", "price", "rating", "reviewCount", "title" FROM "Laptop";
DROP TABLE "Laptop";
ALTER TABLE "new_Laptop" RENAME TO "Laptop";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
