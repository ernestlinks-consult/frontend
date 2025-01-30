"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import { useEffect } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // Dynamically load JS
  }, []);
  return (
    <html>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
