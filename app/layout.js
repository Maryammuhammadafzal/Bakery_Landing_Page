import { Lato, Great_Vibes } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";


// const lato = Lato({
//   variable: "--font-lato",
//   subsets: ["latin"],
//   weight: [ 400, 700],
//   display: 'swap'
// });

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: 'swap'
});

export const metadata = {
  title: "Creme Crust",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${greatVibes.className}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </head>
      <body >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

{/* <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card> */}