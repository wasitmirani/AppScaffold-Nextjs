import { ReactNode } from 'react';
import HeadScripts from './layouts/backend/partials/HeadScripts';
import LayoutSwitcher from './components/LayoutSwitcher';

export default function Layout({ children }: { children: ReactNode }) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Paces';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{appName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`${appName}, admin dashboard`} />
        <meta name="author" content="wasitmirani" />
        <HeadScripts />
      </head>
      <body>
        <LayoutSwitcher>{children}</LayoutSwitcher>
      </body>
    </html>
  );
}