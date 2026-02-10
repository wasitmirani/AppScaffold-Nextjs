
import { ReactNode } from 'react';
import HeadScripts from "./partials/HeadScripts";
import HeaderMenu from './partials/Header';
import SideBarMenu from './partials/SideBarMenu';


export default function MasterLayout({ children }: { children: ReactNode }) {

        return (
                <>
                        <html lang="en" suppressHydrationWarning={false}>
                                <head>
                                        <meta charSet="utf-8" />
                                        <title> Paces</title>
                                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                                        <meta name="description" content="Paces is a modern, responsive admin dashboard available on ThemeForest. Ideal for building CRM, CMS, project management tools, and custom web applications with a clean UI, flexible layouts, and rich features." />
                                        <meta name="keywords" content="Paces, admin dashboard, ThemeForest, Bootstrap 5 admin, responsive admin, CRM dashboard, CMS admin, web app UI, admin theme, premium admin template" />
                                        <meta name="author" content="Coderthemes" />
                                        <HeadScripts />
                                </head>
                                <body>
                                        <div className="wrapper">
                                                <HeaderMenu />
                                                <SideBarMenu />
                                                {children}
                                        </div>
                                </body>
                        </html>
                </>
        );
}
