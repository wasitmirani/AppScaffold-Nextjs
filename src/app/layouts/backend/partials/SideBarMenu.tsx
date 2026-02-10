import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (
		<aside id="app-menu" className="app-menu">

			<a href="index.html" className="logo-box">

				<span className="logo logo-light">
					<span className="logo-lg">
						<img src="/images/logo.png" alt="logo" />
					</span>
					<span className="logo-sm">
						<img src="/images/logo-sm.png" alt="small logo" />
					</span>
				</span>


				<span className="logo logo-dark">
					<span className="logo-lg">
						<img src="/images/logo-black.png" alt="dark logo" />
					</span>
					<span className="logo-sm">
						<img src="/images/logo-sm.png" alt="small logo" />
					</span>
				</span>
			</a>


			<div className="h-topbar justify absolute end-5 top-0 flex items-center">
				<button id="button-hover-toggle">
					<i className="iconify tabler--circle align-middle size-5"></i>
				</button>
			</div>


			<div className="relative min-h-0 grow">
				<div className="size-full">
					<div id="user-profile-settings" className="sidenav-user p-5 bg-[url(/images/user-bg-pattern.svg)]">
						<div className="flex items-center justify-between">
							<div>
								<a href="#!" className="link-reset">
									<img src="/images/users/user-1.jpg" alt="user-image" className="mb-3 size-9 rounded-full" />
									<span className="sidenav-user-name block font-bold text-nowrap">David Dev</span>
									<span className="text-xs font-semibold" data-lang="user-role">Art Director</span>
								</a>
							</div>

							<div>

								<div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
									<button className="cursor-pointer" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
										<i className="iconify tabler--settings ms-1 size-6 align-middle"></i>
									</button>

									<div className="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons">

										<div className="py-2 px-3.5">
											<h6 className="text-xs">Welcome back 👋!</h6>
										</div>


										<a href="#!" className="dropdown-item">
											<i className="iconify tabler--user-circle me-1 align-middle text-lg"></i>
											<span className="align-middle">Profile</span>
										</a>


										<a role='button' className="dropdown-item">
											<i className="iconify tabler--settings-2 me-1 align-middle text-lg"></i>
											<span className="align-middle">Account Settings</span>
										</a>


										<a role='button' className="dropdown-item">
											<i className="iconify tabler--lock me-1 align-middle text-lg"></i>
											<span className="align-middle">Lock Screen</span>
										</a>

										<a role='button' className="dropdown-item text-danger">
											<i className="iconify tabler--logout me-1 align-middle text-lg"></i>
											<span className="align-middle">Log Out</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="sidenav-menu">
						<ul className="side-nav hs-accordion-group px-2.5 pb-16.5">
							{/*  Start::slide__category*/}
							{menuList?.length > 0 &&
								menuList.map((item, index) => (
									item.type === 'heading' && (
										<li key={index} className="menu-title">
											<span >{item.title}</span>
										</li>
									) ||
									item.type === 'single' && (
										<li key={index} className="menu-item">
											<Link href={item.link} className="menu-link">
												<span className="menu-icon"><i className={`iconify ${item.icon} `} ></i></span>
												<span className="menu-text">{item.title}</span>
											</Link>
										</li>
									)
									|| item.type === 'multi' && (
										<li key={index} className="menu-item hs-accordion">
											<a role='button' className="hs-accordion-toggle menu-link">
												<span className="menu-icon"><i className={`iconify ${item.icon}`}></i></span>
												<span className="menu-text">{item.title}</span>
												<span className="menu-arrow"></span>
											</a>
											<ul className="sub-menu hs-accordion-content hs-accordion-group hidden">
												{item.sub_menu?.map((sub_item: any, sub_index: number) => (
													<li key={sub_index} className="menu-item">
														<Link href={sub_item.link} className="menu-link">
															<span className="menu-text">{sub_item.title}</span>
														</Link>
													</li>
												))}
											</ul>
										</li>
									)
								))}
						</ul>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;