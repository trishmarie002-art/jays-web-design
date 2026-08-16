export const metadata = {
  title: "Jay's Web Design",
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
