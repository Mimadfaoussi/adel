import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adel-campaign.local"),
  title: "عادل قراش | مرشح لتطوير الرياضة في البلدية",
  description:
    "الصفحة الرسمية للحملة المحلية لعادل قراش، مدرب رياضي وأستاذ تربية بدنية يعمل على تطوير الرياضة، دعم الشباب، وتعزيز المشاركة المجتمعية.",
  keywords: [
    "عادل قراش",
    "انتخابات محلية",
    "تطوير الرياضة",
    "دعم الشباب",
    "البلدية",
    "كرة السلة",
    "التربية البدنية"
  ],
  openGraph: {
    title: "عادل قراش | مرشح لتطوير الرياضة في البلدية",
    description:
      "برنامج محلي يركز على الشباب، الرياضة، الأحياء، ذوي الهمم، والحوكمة الشفافة.",
    locale: "ar_DZ",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar-DZ" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
