import { Metadata } from "next";
import React from "react";

export const metadata = (): Metadata => {
  return {
    title: "Download Video",
    description: "Start downloading your favorite videos from YouTube",
  };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
