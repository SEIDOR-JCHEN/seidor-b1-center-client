import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seidor - ProdAssist",
  description: "Production app",
};

export default function ProdassistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>CUSTOM SIDEBER</h2>
      {children}
      <div>ProdassistLayoutasdasd</div>
    </>
  );
}
