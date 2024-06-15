import './styles/globals.css'
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header2 from "./components/Header2";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LifeCheck",
  description: "Quality of life assessment tool",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header2 />
          <div className="pt-20">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
