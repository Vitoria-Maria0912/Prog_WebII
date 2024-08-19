/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClientMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClientMovies" DROP CONSTRAINT "_ClientMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientMovies" DROP CONSTRAINT "_ClientMovies_B_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'AVAILABLE';

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "_ClientMovies";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "loginId" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_loginId_key" ON "Customer"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "Login_username_key" ON "Login"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerMovies_AB_unique" ON "_CustomerMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerMovies_B_index" ON "_CustomerMovies"("B");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerMovies" ADD CONSTRAINT "_CustomerMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerMovies" ADD CONSTRAINT "_CustomerMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
