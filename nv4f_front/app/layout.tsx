import Header from '@/components/Header';
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <StyledComponentsRegistry>
            <Header/>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}