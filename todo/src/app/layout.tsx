import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoProvider } from "../context/Provider";
import { ReduxProvider } from "@/redux/Provider";
import TanstackQuery from "../utils/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A real-time collaborative to-do list application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <TanstackQuery>
            <TodoProvider>
              <ToastContainer />
              {children}
            </TodoProvider>
          </TanstackQuery>
        </ReduxProvider>
      </body>
    </html>
  );
}
