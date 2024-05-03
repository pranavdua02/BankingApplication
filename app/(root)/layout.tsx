

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
  <main>
    SIDEBAR
    {children} 
  </main>
  );
}