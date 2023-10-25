import { AppProvider } from "@Context/AppProvider";
import AuthProvider from "@Context/AuthProvider";
import FrontEndProvider from "@Context/FrontEndProvider";
import "@styles/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AppProvider>
            <FrontEndProvider>
              <>{children}</>
            </FrontEndProvider>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
