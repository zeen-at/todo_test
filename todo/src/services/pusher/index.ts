import type { NextApiRequest, NextApiResponse } from 'next';
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export default function createTodo(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channel, event, data } = req.body;
    pusher.trigger(channel, event, data); 
    res.status(200).json({ message: "Todo created successfully" });
  } else {
    res.status(405).json({ error: "Unable to create Todo" });
  }
}

