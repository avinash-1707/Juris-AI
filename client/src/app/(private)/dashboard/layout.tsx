import { ProtectedLayout } from "@/components/dashboard/protected-layout";
import DashboardLayout from "@/components/dashboard/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | JurisAI",
  description:
    "Access your contract analysis dashboard in JurisAI. View uploaded documents, recent analyses, and AI-detected legal insights all in one place.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <main className="flex-1 overflow-x-hidden bg-white overflow-y-auto p-6">
          {children}
        </main>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
