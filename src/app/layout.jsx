import "./globals.css";
import { TimelineProvider } from "../context/TimelineContext";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <TimelineProvider>
          <Toaster />
          {/* Page Content */}
          <div className="grow">
            {children}
          </div>
          {/* Footer */}
          <Footer />  
        </TimelineProvider>
      </body>
    </html>
  );
}