import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter App",
  description: "A simple Next.js counter application",
};

export default function CounterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="min-h-screen bg-gray-100">{children}</section>;
}
