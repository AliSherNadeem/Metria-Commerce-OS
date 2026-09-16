import "./globals.css";
export const metadata = { title: "Metria Commerce OS", description: "European commerce decision intelligence" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
