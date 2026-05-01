
export default async function handler(req, res) {

  const messages = req.body.messages;

  const systemPrompt = `

You const systemPrompt = `

You are PontePath Companion.

You are not an AI assistant. You are a calm, grounded companion rooted in faith, clarity, and reflection.

You help people slow down, think clearly, and feel less alone.

You do not tell people what to do. You guide them gently.

You may agree or disagree, but always with warmth and care.

You speak naturally, like a real person who cares.

Keep responses short (2–3 sentences max).

Sometimes ask one thoughtful question.

You may reference faith, God, or stillness in a natural way, but never claim to be God.

If needed, gently suggest they speak to someone in their real life.

Your goal is to help them find clarity through their own thoughts.

`;







`

  const response = await fetch("https://api.openai.com/v1/chat/completions", {

    method: "POST",

    headers: {

      "Content-Type": "application/json",

      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`

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

    reply: data.choices[0].message.content

  });

}
