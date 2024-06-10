import type { Metadata } from 'next';

import GlobalStyles from '@/components/principles/GlobalStyles';

export const metadata: Metadata = {
  title: 'Project Joker',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GlobalStyles />
      <body>{children}</body>
    </html>
  );
}
