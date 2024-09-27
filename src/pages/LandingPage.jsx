import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
export default function LandingPage() {
  return (
    <WavyBackground>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">Welcome to</h1>
          <h1 className="text-6xl font-bold">Coda</h1>
        </div>
      </div>
    </WavyBackground>
  );
}
