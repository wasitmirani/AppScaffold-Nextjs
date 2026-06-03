import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (
		<>
		side bar
		</>
		// <aside id="app-menu" className="app-menu">

		
		// 			<div id="sidenav-menu">
		// 				<ul className="side-nav hs-accordion-group px-2.5 pb-16.5">
		// 					{/*  Start::slide__category*/}
		// 					{/* {menuList?.length > 0 &&
		// 						menuList.map((item, index) => (
		// 							item.type === 'heading' && (
		// 								<li key={index} className="menu-title">
		// 									<span >{item.title}</span>
		// 								</li>
		// 							) ||
		// 							item.type === 'single' && (
		// 								<li key={index} className="menu-item">
		// 									<Link href={item.link} className="menu-link">
		// 										<span className="menu-icon"><i className={`iconify ${item.icon} `} ></i></span>
		// 										<span className="menu-text">{item.title}</span>
		// 									</Link>
		// 								</li>
		// 							)
		// 							|| item.type === 'multi' && (
		// 								<li key={index} className="menu-item hs-accordion">
		// 									<a role='button' className="hs-accordion-toggle menu-link">
		// 										<span className="menu-icon"><i className={`iconify ${item.icon}`}></i></span>
		// 										<span className="menu-text">{item.title}</span>
		// 										<span className="menu-arrow"></span>
		// 									</a>
		// 									<ul className="sub-menu hs-accordion-content hs-accordion-group hidden">
		// 										{item.sub_menu?.map((sub_item: any, sub_index: number) => (
		// 											<li key={sub_index} className="menu-item">
		// 												<Link href={sub_item.link} className="menu-link">
		// 													<span className="menu-text">{sub_item.title}</span>
		// 												</Link>
		// 											</li>
		// 										))}
		// 									</ul>
		// 								</li>
		// 							)
		// 						))} */}
		// 				</ul>
		// 			</div>
			
			
		// </aside>
	);
};

export default SideBar;