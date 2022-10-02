-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "bioA" TEXT NOT NULL,
    "bioB" TEXT NOT NULL,
    "bioC" TEXT NOT NULL,
    "bioD" TEXT NOT NULL,
    "bioE" TEXT NOT NULL,
    "worldA" TEXT NOT NULL,
    "worldB" TEXT NOT NULL,
    "worldC" TEXT NOT NULL,
    "referralA" TEXT NOT NULL,
    "referralB" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_discord_key" ON "User"("discord");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitter_key" ON "User"("twitter");
