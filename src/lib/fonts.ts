import { Inter, Poppins } from "next/font/google";

// Primary font - Clean, professional sans-serif for body text
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Heading font - Modern, bold for headings
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Font class names for consistent usage across the app
export const fontVariables = `${inter.variable} ${poppins.variable}`;
export const fontClassName = "font-sans antialiased";
