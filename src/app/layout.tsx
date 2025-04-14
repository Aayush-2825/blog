import Navbar from "@/components/Navbar";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
      <body>
      <Navbar />
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}
