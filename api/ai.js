export default async function handler(req, res) {

  try {

    const messages = req.body.messages || [];

    const systemPrompt = `

You are PontePath Companion.

You are a calm, thoughtful companion focused on clarity and reflection.

You help people slow down and understand what they are feeling.

You do not give orders. You guide through perspective.

You may gently challenge or agree, but always with warmth and respect.

Keep responses short (2–4 sentences).

Often reflect what they said in a deeper way.

Ask one meaningful follow-up question when it feels right.

Never overwhelm. Never repeat yourself.

You may reference faith naturally, but do not preach.

Your goal is to help them see their situation more clearly.

`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {

      method: "POST",

      headers: {

        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        model: "gpt-4o-mini",

        messages: [

          { role: "system", content: systemPrompt },

          ...messages

        ]

      })

    });

    const data = await response.json();

    res.status(200).json({

      role: "assistant",

      content: data.choices[0].message.content

    });

  } catch (error) {

    res.status(500).json({ error: "Something went wrong." });

  }

}
