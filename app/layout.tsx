import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Double D IT",
  description:
    "Welcome to Double D IT, your trusted partner in innovative technology solutions. Explore our services, projects, and career opportunities.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${montserrat.className} flex flex-grow h-full antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col flex-1">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
