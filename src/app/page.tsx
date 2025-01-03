"use client";

import { ColorBubbles } from "@/helpers/color-bubbles";

export default function ColorGuessingGameEntrance() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden'>
      <ColorBubbles />
    </div>
  );
}
