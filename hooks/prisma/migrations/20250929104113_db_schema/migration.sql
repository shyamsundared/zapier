-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Zap" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Zap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trigger" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,
    "TriggerId" TEXT NOT NULL,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."availableTriggers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "availableTriggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Action" (
    "id" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."availableActions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "availableActions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "public"."Trigger"("zapId");

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "public"."Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_TriggerId_fkey" FOREIGN KEY ("TriggerId") REFERENCES "public"."availableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "public"."availableActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "public"."Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
