-- CreateTable
CREATE TABLE "family" (
    "id" SERIAL NOT NULL,
    "family_name" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "family_user" (
    "id" SERIAL NOT NULL,
    "family_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "family_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "child" (
    "id" SERIAL NOT NULL,
    "family_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "child_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diaper" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "time_of_last_change" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "diaper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feed" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sleep" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "sleep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medical" (
    "id" SERIAL NOT NULL,
    "child_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "medical_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "family_user_id_key" ON "family"("user_id");

-- AddForeignKey
ALTER TABLE "family_user" ADD CONSTRAINT "family_user_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child" ADD CONSTRAINT "child_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diaper" ADD CONSTRAINT "diaper_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sleep" ADD CONSTRAINT "sleep_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medical" ADD CONSTRAINT "medical_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
