import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gammatech",
  description: "Your school digital solution for better education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics gtag.js code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0YY71GGXKE"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YY71GGXKE');
          `}
        </script>
      </Head>
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
