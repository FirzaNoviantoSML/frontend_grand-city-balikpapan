import React, { forwardRef } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, HTMLMotionProps } from "framer-motion";

type SlideInProps = HTMLMotionProps<"div"> & {
  position?: "left" | "right" | "top" | "bottom";
  isOpen: boolean;
  widthFull?: boolean;
};

const SlideIn = forwardRef<HTMLDivElement, SlideInProps>(
  ({ children, position = "left", isOpen, widthFull, className, ...props }, ref) => {
    const variants = {
      left:   { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
      right:  { initial: { x: "100%" },  animate: { x: 0 }, exit: { x: "100%" } },
      top:    { initial: { y: "-100%" }, animate: { y: 0 }, exit: { y: "-100%" } },
      bottom: { initial: { y: "100%" },  animate: { y: 0 }, exit: { y: "100%" } },
    } as const;

    return (
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            ref={ref}
            initial={variants[position].initial}
            animate={variants[position].animate}
            exit={variants[position].exit}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={clsx(
              "fixed top-0 z-50 bg-gray-900 shadow-lg",
              widthFull && "h-full w-full",
              position === "left"  && "left-0",
              position === "right" && "right-0",
              position === "top"   && "left-0 w-full",
              position === "bottom"&& "bottom-0 left-0 w-full",
              className
            )}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

SlideIn.displayName = "SlideIn";
export default SlideIn;
