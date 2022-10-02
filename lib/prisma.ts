import { PrismaClient } from '@prisma/client'

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

let prisma: PrismaClient

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }

    prisma = global.prisma
  }
}

export default prisma
