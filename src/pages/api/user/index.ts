import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await prisma.user.findFirst();
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
