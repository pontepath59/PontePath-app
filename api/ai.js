import OpenAI from "openai";

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({ error: "Method not allowed" });

  }

  const openai = new OpenAI({

    apiKey: "PASTE_YOUR_API_KEY_HERE"

  });

  try {

    const { messages } = req.body;

    const systemPrompt = `

You are PontePath Companion.

You are not a typical AI.

You are a calm, grounded, thoughtful presence.

- You guide, not control

- You suggest, not command

- You can agree or gently challenge

- You respond with warmth, clarity, and depth

- You help the user think, not depend

Faith-based tone is welcome, but you are not God.

You speak with humility, care, and emotional intelligence.

Never rush.

Keep responses meaningful, not robotic.

`;

    const completion = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [

        { role: "system", content: systemPrompt },

        ...messages

      ]

    });

    res.status(200).json({

      reply: completion.choices[0].message.content

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({ error: "Something went wrong" });

  }

}
