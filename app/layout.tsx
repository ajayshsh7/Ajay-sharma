import "./globals.css";
import "./layout.module.css";
import type { Metadata } from "next";
import styles from '../components/navbar.module.css';
import Navbar from "../components/Navbar"; 
import PageTransition from '@/components/PageTransition'; 
import RouteLoad from '@/components/RouteLoad';

export const metadata: Metadata = {
  title: "Ajay Sharma",
  description: "My portfolio for web development and UI/UX design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
