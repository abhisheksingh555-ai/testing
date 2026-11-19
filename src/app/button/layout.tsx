export default function LikeButtonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className="min-h-screen bg-gray-100">{children}</section>;
}
