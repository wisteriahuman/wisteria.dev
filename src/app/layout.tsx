import React from "react";
import SearchAppBar from "@/components/layout/SearchAppBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <html lang="ja">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* 各ページの head.tsx で <title> の設定がされています */}
          </head>
          <body style={{ backgroundColor: "#1e1c2f", color: "#ffffff"}}>
            <SearchAppBar />
            <main>{children}</main>
            <footer></footer>
          </body>
        </html>
      </>
    );
}