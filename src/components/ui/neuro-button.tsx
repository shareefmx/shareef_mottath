import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const neuroButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-light transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 tracking-tight",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_14px_0_hsl(var(--primary)/0.3),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_0_hsl(var(--primary)/0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[-2px] active:translate-y-[0px] active:shadow-[0_2px_10px_0_hsl(var(--primary)/0.3),inset_0_-2px_0_0_rgba(0,0,0,0.2)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_4px_14px_0_hsl(var(--secondary)/0.3),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_0_hsl(var(--secondary)/0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[-2px]",
        glow:
          "bg-primary text-primary-foreground shadow-[0_4px_14px_0_hsl(var(--glow)/0.3),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_0_hsl(var(--glow)/0.6),0_0_40px_hsl(var(--glow)/0.3),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[-2px] transition-all duration-300",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-11 px-8 py-2.5 rounded-xl",
        sm: "h-9 px-6 rounded-lg text-xs",
        lg: "h-14 px-10 rounded-2xl text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeuroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neuroButtonVariants> {
  asChild?: boolean;
}

const NeuroButton = React.forwardRef<HTMLButtonElement, NeuroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(neuroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NeuroButton.displayName = "NeuroButton";

export { NeuroButton, neuroButtonVariants };
