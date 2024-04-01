import Header from '@/components/Header';
import './globals.css'
import AuthProvider from '@/context/authContext';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <html>
          <body>
            <Header/>
              {children}
          </body>
        </html>
      </AuthProvider>
    </>
  );
}