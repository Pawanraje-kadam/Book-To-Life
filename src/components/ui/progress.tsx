import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: number }
>(({ className, value, ...props }, ref) => {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full flex-1 transition-all duration-1000",
          clamped < 50 ? "bg-destructive" : clamped < 75 ? "bg-yellow-500" : "bg-green-500"
        )}
        style={{ transform: `translateX(-${100 - clamped}%)` }}
      />
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }
