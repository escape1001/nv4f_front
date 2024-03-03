import './globals.css'
import StyledComponentsRegistry from '@/lib/registry';




export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

  return (
    <>
      <html>
        <body>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}