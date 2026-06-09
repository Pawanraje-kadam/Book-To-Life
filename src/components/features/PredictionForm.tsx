import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { predictionSchema, type PredictionInput } from "@/schemas/prediction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateReport, type ReportData } from "@/lib/api";
import { ReportView } from "./ReportView";

export function PredictionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<PredictionInput>({
    resolver: zodResolver(predictionSchema),
  });

  const onSubmit = async (data: PredictionInput) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    setReport(null);
    try {
      const generatedReport = await generateReport(data);
      setReport(generatedReport);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (report) return <ReportView report={report} onReset={() => setReport(null)} />;

  return (
    <div className="container max-w-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Configure Your Trajectory</h2>
        <p className="text-muted-foreground">Provide context. Be honest for realistic predictions.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-3xl border shadow-sm">
        {errorMsg && (
          <div className="p-4 bg-destructive/10 text-destructive border rounded-md text-sm">
            {errorMsg}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="bookTitle">Book Title</Label>
          <Input id="bookTitle" placeholder="e.g. Deep Work" {...register("bookTitle")} />
          {errors.bookTitle && <p className="text-sm text-destructive">{errors.bookTitle.message}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="age">Your Age</Label>
            <Input id="age" type="number" placeholder="28" {...register("age")} />
            {errors.age && <p className="text-sm text-destructive">{errors.age.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="availableHours">Daily Dedicated Hours</Label>
            <Input id="availableHours" type="number" step="0.1" placeholder="1.5" {...register("availableHours")} />
            {errors.availableHours && <p className="text-sm text-destructive">{errors.availableHours.message}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentRole">Current Role</Label>
          <Input id="currentRole" placeholder="e.g. Junior Dev" {...register("currentRole")} />
          {errors.currentRole && <p className="text-sm text-destructive">{errors.currentRole.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="mainGoal">Main Goal</Label>
          <Textarea id="mainGoal" placeholder="Focus better" className="resize-none" {...register("mainGoal")} />
          {errors.mainGoal && <p className="text-sm text-destructive">{errors.mainGoal.message}</p>}
        </div>
        <Button type="submit" className="w-full h-12 text-lg" isLoading={isSubmitting}>
          Generate My Future Reality
        </Button>
      </form>
    </div>
  );
}
