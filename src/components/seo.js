import React from "react";

export default function SEO({children}) {
    return(
        <>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            {children}
        </>
    )
}