import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import { Nothing } from "./components/nothing/nothing";
import { Input } from "./components/input/input";

import Logo from "../public/logo.png";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div className="logo">
            <img src={Logo.src}/>
          </div>
          <div className="container">
            <div className="h1">
              Today
            </div>
            <br />
            <Input/>
            <br />
            <Todos/>

            <br /><br /><br /><br />
            <Nothing/>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
