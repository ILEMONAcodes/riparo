import React from 'react';
import AgentSidebar from './_components/agent-sidebar';

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#FAF8F5]">
      {/* AGENT SIDEBAR COMPONENT */}
      <AgentSidebar />

      {/* AGENT MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}