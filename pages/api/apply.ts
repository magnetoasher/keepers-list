import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const { formData } = req.body

    const user = await prisma.user.create({
      data: {
        twitter: 'twitter',
        discord: 'discord',
        ...formData,
      },
    })

    return res.status(201).json({ user })
  }

  res.status(200).json('Successfully done')
}
