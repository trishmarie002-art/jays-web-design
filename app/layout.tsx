export const metadata = {
  title: "Cheap & Affordable Web Design in TX | Jay's Web Design Services",
  description: "Web design in San Antonio, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
