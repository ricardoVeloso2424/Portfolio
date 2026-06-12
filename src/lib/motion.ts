import type { MotionProps, Variants } from "framer-motion";

export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const TRANSITION_HOVER = { duration: 0.3, ease: EASE_PREMIUM };
export const TRANSITION_REVEAL = { duration: 0.6, ease: EASE_PREMIUM };

export const reveal = (animated: boolean, amount = 0.2, delay = 0): MotionProps =>
  animated
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { ...TRANSITION_REVEAL, delay },
        viewport: { once: true, amount },
      }
    : {};

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};

export const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE_PREMIUM } },
};
