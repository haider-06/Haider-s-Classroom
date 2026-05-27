import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive/50 placeholder:text-destructive/40",
        outline: "border-input hover:border-accent",
        secondary: "border-secondary bg-secondary/50 hover:border-secondary/80",
        ghost: "border-transparent hover:border-accent hover:bg-accent/5",
        link: "border-bottom border-b-0 border-b-border hover:border-b-primary",
      },
      size: {
        default: "h-10 py-2 px-3",
        sm: "h-9 px-2",
        lg: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? "span" : "input"
    return (
      <Component
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      )
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }