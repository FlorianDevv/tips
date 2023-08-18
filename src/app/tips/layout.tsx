import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Tips",
  description: "Tips for you guys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
