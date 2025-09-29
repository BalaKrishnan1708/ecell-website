import type * as React from "react"
import { cn } from "@/lib/utils"

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4"
}

export function AnimatedHeading({ as = "h2", className, children, ...rest }: Props) {
  const Tag = as
  return (
    <Tag className={cn("font-semibold tracking-tight text-pretty", "relative", className)} {...rest}>
      {children}
    </Tag>
  )
}
