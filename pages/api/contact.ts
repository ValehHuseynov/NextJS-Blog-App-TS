// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  message: string;
  data?: { email: string; name: string; message: string };
};

const { MANGODB_USERNAME, MANGODB_PASSWORD } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database

    const newMessage = {
      email,
      name,
      message,
    };

    let client: any;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${MANGODB_USERNAME}:${MANGODB_PASSWORD}@cluster0.svvju.mongodb.net/NextJS-Blog-App?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      await db.collection("message").insertOne(newMessage);

      res.status(201).json({
        message: "Successfully stored message!",
        data: newMessage,
      });
      client.close();
      return;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
  }
}
