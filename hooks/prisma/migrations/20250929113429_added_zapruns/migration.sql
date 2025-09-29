-- CreateTable
CREATE TABLE "public"."zapRun" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,

    CONSTRAINT "zapRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."zapRunOutbox" (
    "id" TEXT NOT NULL,
    "zapRunid" TEXT NOT NULL,

    CONSTRAINT "zapRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "zapRunOutbox_zapRunid_key" ON "public"."zapRunOutbox"("zapRunid");

-- AddForeignKey
ALTER TABLE "public"."zapRun" ADD CONSTRAINT "zapRun_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "public"."Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."zapRunOutbox" ADD CONSTRAINT "zapRunOutbox_zapRunid_fkey" FOREIGN KEY ("zapRunid") REFERENCES "public"."zapRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
