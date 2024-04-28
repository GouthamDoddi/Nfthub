import Navigation from './navigation'

import "./globals.css";
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head />
      <body>
        <div className="app" style={{ width: '100% !important', overflow: 'hidden', background: 'linear-gradient(to right bottom, rgb(249 251 251), rgb(237 228 231))'}}>
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

