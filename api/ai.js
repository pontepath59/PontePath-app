import OpenAI from "openai";

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({ error: "Method not allowed" });

  }

  const openai = new OpenAI({

  apiKey: "sk-proj-8Zg8tJm7I11S3I3KC8VncVUm..."

});


  try {

    const { messages } = req.body;

    const systemPrompt = `

You are PontePath Companion.

You are calm, thoughtful, and grounded.

You guide people toward clarity — not control.

- You suggest, not command

- You can agree or gently challenge

- You help people think, not depend

- You respond with warmth and depth

Faith-based tone is welcome, but you are not God.

You speak with humility and care.

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
