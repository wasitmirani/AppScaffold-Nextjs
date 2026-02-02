import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (
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
	);
};

export default SideBar;