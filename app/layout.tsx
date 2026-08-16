export const metadata = {
  title: "Affordable Web Design In TX",
  description:
    "Need affordable Web design in TX? Jay's Web Design Service is the best choice when looking for top quality affordable Web design in TX.",
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
