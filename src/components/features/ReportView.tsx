import { ReportData } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, AlertTriangle, ShieldAlert, CheckCircle2, Milestone, Clock } from "lucide-react";

export function ReportView({ report, onReset }: { report: ReportData; onReset: () => void }) {
  return (
    <div className="container max-w-4xl py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button variant="ghost" onClick={onReset} className="mb-6 -ml-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Start Over
      </Button>

      <div className="mb-10 text-center space-y-4">
        <Badge variant="secondary" className="px-4 py-1 text-sm mb-2">AI Life Projection</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Your Projected Reality</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 border-primary pl-4 text-left italic bg-secondary/30 p-4 rounded-r-lg">
          "{report.keyPrinciple}"
        </p>
      </div>

      <Card className="mb-10 border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-2/3">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" /> Reality Score
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Probability of achieving your goal based on your time constraints.
              </p>
              <Progress value={report.realityScore} className="h-3" />
            </div>
            <div className="text-center">
              <span className="text-5xl font-black">{report.realityScore}</span>
              <span className="text-muted-foreground">/100</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" /> Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {report.risks.map((risk, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-destructive" />
                  {risk}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <ShieldAlert className="h-5 w-5" /> Tradeoffs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {report.tradeoffs.map((tradeoff, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {tradeoff}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Milestone className="h-6 w-6 text-primary" /> Trajectory Timeline
      </h3>
      <div className="relative border-l-2 border-border ml-3 md:ml-6 mb-12 space-y-8 pb-4">
        {[
          { time: "30 Days", text: report.thirtyDay, active: true },
          { time: "6 Months", text: report.sixMonth },
          { time: "1 Year", text: report.oneYear },
          { time: "5 Years", text: report.fiveYear },
        ].map((point, i) => (
          <div key={i} className="relative pl-8">
            <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background ${point.active ? 'bg-primary' : 'bg-muted-foreground'}`} />
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" /> {point.time}
            </h4>
            <p className="text-muted-foreground leading-relaxed bg-card p-4 rounded-lg border shadow-sm">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" /> Immediate Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {report.top3Actions.map((action, i) => (
                <div key={i} className="flex gap-4 p-3 bg-secondary/50 rounded-lg">
                  <div className="font-bold text-primary text-xl">0{i + 1}</div>
                  <p className="text-sm font-medium pt-1">{action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Roadmap</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {report.roadmap.map((step, i) => (
                <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                  <h4 className="text-xs font-bold text-primary uppercase mb-1">{step.phase}</h4>
                  <p className="text-sm text-muted-foreground">{step.focus}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
