import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (

		<aside className="app-sidebar" id="sidebar">

			{/*  Start::main-sidebar-header*/}
			<div className="main-sidebar-header">
				<Link href="index.html" className="header-logo">
					<img src="/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
					<img src="/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
					<img src="/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
					<img src="/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
					<img src="/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
					<img src="/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
				</Link>
			</div>
			{/*  End::main-sidebar-header*/}

			{/*  Start::main-sidebar*/}
			<div className="main-sidebar" id="sidebar-scroll">

				<nav className="main-menu-container nav nav-pills flex-col sub-open">
					<div className="slide-left" id="slide-left">
						<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
							<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
					</div>
					<ul className="main-menu">
						{/*  Start::slide__category*/}
						{menuList?.length > 0 &&
							menuList.map((item, index) => (
								item.type === 'heading' && (
									<li key={index} className="slide__category">
										<span className="category-name">{item.title}</span>
									</li>
								) ||
								item.type === 'single' && (
									<li key={index} className="slide">
										<Link href={item.link} className="side-menu__item">
											<i className={`${item.icon} side-menu__icon text-xl`} ></i>
											<span className="side-menu__label">{item.title}</span>
										</Link>
									</li>
								)
								|| item.type === 'multi' && (
									<li key={index} className="slide has-sub">
										<Link href="#" className="side-menu__item">
											<i className={`${item.icon} side-menu__icon text-xl`} ></i>
											<span className="side-menu__label">{item.title}</span>
											<i className="ri-arrow-down-s-line side-menu__angle"></i>
										</Link>
										<ul className="slide-menu child1">
											<li className="slide side-menu__label1">
												<a href="javascript:void(0)">Maps</a>
											</li>
											{item.sub_menu?.map((sub_item: any, sub_index: any) => (
												// side-menu__label1
												// ${sub_index == 1 ? 'side-menu__label1' : ''}
												<li key={sub_index} className={`slide`}>
													<Link href={sub_item.link} className="side-menu__item" >
														{sub_item.title}
													</Link>
												</li>
											))}
										</ul>



									</li>
								)
							))}


					</ul>
					<div className="slide-right" id="slide-right">
						<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
							<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
						</svg>
					</div>
				</nav>
			
			</div>

		</aside>

		
			
	);
};

export default SideBar;