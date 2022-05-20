import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const body = req.body;
      return res.status(200).json(body);
    }
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (err: any) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
