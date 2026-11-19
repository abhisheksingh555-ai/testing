
export default function PasswordShowLayout({ children }: 
    Readonly<{ children: React.ReactNode; }>) {
        return <section className="min-h-screen bg-gray-100">
            {children}
        </section>;
}