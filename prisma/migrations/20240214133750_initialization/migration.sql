-- CreateTable
CREATE TABLE "Exercice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Exercice" ENABLE ELECTRIC;
