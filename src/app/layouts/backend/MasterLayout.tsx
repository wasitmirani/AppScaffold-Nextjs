
import { ReactNode } from 'react';
// import LayoutSwitcher from "./partials/Switcher";
// import HeaderMenu from "./partials/Header";
// import SideBarMenu from "./partials/SideBarMenu";
import HeadScripts from "./partials/HeadScripts";

export default function MasterLayout({ children }: { children: ReactNode }) {

        return (
                <>
                        <html lang="en" suppressHydrationWarning={false}>
                                <head>
                                        <meta charSet="utf-8" />
                                        <title>Projects Dashboard | Multipurpose Tailwind CSS 4 & Bootstrap 5 Admin Dashboard Template Template</title>
                                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                                        <meta name="description" content="Paces is a modern, responsive admin dashboard available on ThemeForest. Ideal for building CRM, CMS, project management tools, and custom web applications with a clean UI, flexible layouts, and rich features." />
                                        <meta name="keywords" content="Paces, admin dashboard, ThemeForest, Bootstrap 5 admin, responsive admin, CRM dashboard, CMS admin, web app UI, admin theme, premium admin template" />
                                        <meta name="author" content="Coderthemes" />
                                        <HeadScripts />
                                </head>
                                <body>
                                        <div className="wrapper">
                                        {children}
                                        </div>
                                </body>
                        </html>
                </>
        );
}
