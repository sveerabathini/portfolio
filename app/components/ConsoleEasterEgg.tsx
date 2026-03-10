"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    const msg = "%c$ whoami\n%cSai Krishna Veerabathini\n\n%cPlatform Engineer | DevOps | Kubernetes | Cloud Automation\n👋 Hey! You found the console. Nice work.\n📧 saikrishnav92@gmail.com | 🔗 github.com/sveerabathini";
    console.log(msg, "color: #22d3ee; font-weight: bold;", "color: #fff; font-size: 14px;", "color: #a3a3a3; font-size: 11px;");
  }, []);

  return null;
}
