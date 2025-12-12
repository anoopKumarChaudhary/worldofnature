"use client";
import { useEffect } from "react";

let lockCount = 0;
let originalOverflow = "";
let originalPaddingRight = "";
let originalPosition = "";
let originalTop = "";
let savedScrollY = 0;

function getScrollbarCompensation() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function touchMoveHandler(e: TouchEvent) {
  const el = (e.target as Element).closest?.("[data-scrollable]");
  if (el) return;
  e.preventDefault();
}

export default function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (locked) {
      if (lockCount === 0) {
        originalOverflow = document.body.style.overflow;
        originalPaddingRight = document.body.style.paddingRight;
        originalPosition = document.body.style.position;
        originalTop = document.body.style.top || "";
        savedScrollY = window.scrollY || window.pageYOffset || 0;
        const comp = getScrollbarCompensation();
        if (comp > 0) document.body.style.paddingRight = `${comp}px`;
        document.body.style.overflow = "hidden";
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          document.body.style.position = "fixed";
          document.body.style.top = `-${savedScrollY}px`;
          document.addEventListener("touchmove", touchMoveHandler, { passive: false });
        }
      }
      lockCount++;
    } else {
      if (lockCount > 0) lockCount--;
      if (lockCount === 0) {
        document.body.style.overflow = originalOverflow || "";
        document.body.style.paddingRight = originalPaddingRight || "";
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          document.body.style.position = originalPosition || "";
          document.body.style.top = originalTop || "";
          window.scrollTo(0, savedScrollY);
          document.removeEventListener("touchmove", touchMoveHandler);
        }
      }
    }

    return () => {
      if (locked) {
        if (lockCount > 0) lockCount--;
        if (lockCount === 0) {
          document.body.style.overflow = originalOverflow || "";
          document.body.style.paddingRight = originalPaddingRight || "";
          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            document.body.style.position = originalPosition || "";
            document.body.style.top = originalTop || "";
            window.scrollTo(0, savedScrollY);
            document.removeEventListener("touchmove", touchMoveHandler);
          }
        }
      }
    };
  }, [locked]);
}
