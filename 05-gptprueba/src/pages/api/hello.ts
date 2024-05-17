// // hello.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { OpenAI } from "openai";

// // Initialize OpenAI instance
// const openai = new OpenAI();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   const { param } = req.query;

//   try {
//     // Generate response from OpenAI
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: param }],
//     });

//     const resText = chatCompletion.choices[0].message.content; // Extracting content

//     // Send response
//     res.status(200).json({ resText });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
