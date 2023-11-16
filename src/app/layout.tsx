import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import LogoutNav from "@/components/navbar/LogoutNav";
import theme from "@/theme";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Providers from "../providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={roboto.className}>
          <Providers>
            <Box width={"95%"} maxWidth={"1200"} margin={"auto"}>
              <Box component={"header"} py={1}>
                <LogoutNav />
              </Box>
              {children}
            </Box>
          </Providers>
        </body>
      </ThemeProvider>
    </html>
  );
}
