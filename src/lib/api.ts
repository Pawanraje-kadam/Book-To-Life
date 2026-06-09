import { PredictionInput } from "@/schemas/prediction";

export interface ReportData {
  thirtyDay: string;
  sixMonth: string;
  oneYear: string;
  fiveYear: string;
  realityScore: number;
  keyPrinciple: string;
  risks: string[];
  tradeoffs: string[];
  top3Actions: string[];
  roadmap: Array<{ phase: string; focus: string }>;
}

export async function generateReport(data: PredictionInput): Promise<ReportData> {
  const response = await fetch("/.netlify/functions/generate-report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to generate report. The server might be busy.");
  return response.json();
}
