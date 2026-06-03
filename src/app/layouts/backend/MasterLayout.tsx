
import { ReactNode } from 'react';
import HeaderMenu from './partials/Header';
import SideBarMenu from './partials/SideBarMenu';

export default function MasterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <HeaderMenu />
      <SideBarMenu />
      {children}
    </div>
  );
}
