"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f4" }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Dashboard onMenuClick={() => setSidebarOpen(true)} />
    </div>
  );
}
