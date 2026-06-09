import { Handler } from "@netlify/functions";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

  try {
    if (!event.body) throw new Error("Missing request body");

    const { bookTitle, age, currentRole, mainGoal, availableHours } = JSON.parse(event.body);

    const systemPrompt = `You are an elite, brutally honest career and life architect. 
Your job is to predict the REALISTIC outcome if a user strictly applies the book "${bookTitle}" to their life.
Consider the user's age (${age}), current role (${currentRole}), main goal (${mainGoal}), and available hours per day (${availableHours}).
If their available hours are too low for the goal, point it out realistically as a risk. DO NOT use motivational fluff.
CRITICAL INSTRUCTION: You must respond ONLY with a valid JSON object matching exactly:
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
        { role: "user", content: `Predict my trajectory for applying "${bookTitle}".` }
      ],
      temperature: 0.2,
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
