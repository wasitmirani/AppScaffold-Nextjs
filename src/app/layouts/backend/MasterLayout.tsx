
import { ReactNode } from 'react';
// import LayoutSwitcher from "./partials/Switcher";
// import HeaderMenu from "./partials/Header";
// import SideBarMenu from "./partials/SideBarMenu";

export default function MasterLayout({ children }: { children: ReactNode }) {

    return (
       <>
       
       <html lang="en">
       <head>
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
       </head>
       <body>
               {children}
       </body>
       </html>
     
            </>
    );
}
