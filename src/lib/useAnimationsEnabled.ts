"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};

/**
 * Animations only run after hydration and when the user has not requested
 * reduced motion. Server-rendered HTML therefore never hides content, so the
 * page stays fully readable if JavaScript fails to load.
 */
export function useAnimationsEnabled() {
  const prefersReducedMotion = useReducedMotion();
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return hydrated && !prefersReducedMotion;
}
