-- CreateTable
CREATE TABLE "weight" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "weight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "height" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "height_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weight" ADD CONSTRAINT "weight_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "height" ADD CONSTRAINT "height_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
