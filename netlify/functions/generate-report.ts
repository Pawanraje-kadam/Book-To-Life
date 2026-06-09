import { Handler } from "@netlify/functions";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

  try {
    if (!event.body) throw new Error("Missing request body");

    const { bookTitle, age, currentRole, mainGoal, availableHours } = JSON.parse(event.body);

    const systemPrompt = `You are a brutally honest life coach and data-driven analyst.

The user wants to apply the book "${bookTitle}" to achieve this SPECIFIC goal: "${mainGoal}"
Their profile: Age ${age}, Role: ${currentRole}, Available time: ${availableHours} hours/day.

CRITICAL RULES:
1. Every single response field MUST directly reference "${mainGoal}" specifically.
2. NEVER give generic advice. If goal is "lose 10kg" vs "get promoted", the answers must be completely different.
3. If ${availableHours} hours/day is insufficient for "${mainGoal}", the realityScore must be below 40 and risks must explain why.
4. The 30-day, 6-month, 1-year, 5-year predictions must show a REALISTIC progression specific to "${mainGoal}" — not generic growth.
5. If the goal is easy and ${availableHours} is high, realityScore should be 75-95.
6. If the goal is hard and ${availableHours} is low, realityScore should be 20-50.
7. Analyze THIS specific goal fresh — do not give copy-paste generic responses.
8. top3Actions must be concrete steps directly tied to "${mainGoal}" using principles from "${bookTitle}".
9. risks must be specific dangers unique to pursuing "${mainGoal}" with only ${availableHours} hours/day.

Respond ONLY with a valid JSON object matching exactly:
{
  "thirtyDay": "string",
  "sixMonth": "string",
  "oneYear": "string",
  "fiveYear": "string",
  "realityScore": number (1-100),
  "keyPrinciple": "string",
  "risks": ["string", "string", "string"],
  "tradeoffs": ["string", "string"],
  "top3Actions": ["string", "string", "string"],
  "roadmap": [
    { "phase": "string", "focus": "string" },
    { "phase": "string", "focus": "string" }
  ]
}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Analyze my specific goal: "${mainGoal}" — applying the book "${bookTitle}" with ${availableHours} hours/day as a ${currentRole} aged ${age}.` }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) throw new Error("AI failed to generate structural content.");

    JSON.parse(responseContent);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: responseContent,
    };
  } catch (error: any) {
    console.error("AI Engine Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to generate report. Please ensure inputs are valid." }),
    };
  }
};
