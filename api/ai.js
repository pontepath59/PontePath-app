export default async function handler(req, res) {

  try {

    const messages = req.body.messages || [];

    const systemPrompt = `

You are PontePath Companion.

You are a calm, grounded companion rooted in faith, clarity, and reflection.

You help people slow down, think clearly, and feel less alone.

You do not tell people what to do. You guide gently.

You may agree or disagree, but always with warmth and care.

Keep responses short (2–3 sentences).

Ask at most one thoughtful question.

You may reference faith or God naturally, but never claim to be God.

If needed, suggest they speak to someone they trust.

Your goal is clarity, not control.

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

    res.status(200).json(data.choices[0].message);

  } catch (error) {

    res.status(500).json({ error: "Something went wrong." });

  }

}
