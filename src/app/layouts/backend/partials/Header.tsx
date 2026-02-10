'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderMenu: React.FC = () => {
	return (
		<>
			<header className="app-header">
				<div className="container-fluid flex items-center justify-between">
					<div className="flex items-center gap-2.5">
						<div className="logo-topbar">
							<Link href="/" className="logo-box">
								<div className="logo-light">
									<Image
										src="/images/logo.png"
										className="logo-lg h-6"
										alt="Light logo"
										width={120}
										height={24}
									/>
									<Image
										src="/images/logo-sm.png"
										className="logo-sm h-6"
										alt="Small logo"
										width={40}
										height={24}
									/>
								</div>

								<div className="logo-dark">
									<Image
										src="/images/logo-black.png"
										className="logo-lg h-6"
										alt="Dark logo"
										width={120}
										height={24}
									/>
									<Image
										src="/images/logo-sm.png"
										className="logo-sm h-6"
										alt="Small logo"
										width={40}
										height={24}
									/>
								</div>
							</Link>
						</div>

						{/* Sidenav Menu Toggle Button */}
						<button
							id="button-toggle-menu"
							className="btn rounded-full bg-primary btn-icon text-white"
						>
							<i className="iconify tabler--menu-4 text-xl"></i>
						</button>

						{/* Topnav Menu Toggle Button for Horizontal */}
						<div className="topnav-toggle-button">
							<button
								type="button"
								className="hs-collapse-toggle btn topnav-toggle-button"
								data-hs-collapse="#topnav-menu"
								id="topnav-menu-collapse"
								aria-expanded="false"
								aria-controls="topnav-menu"
								aria-label="Toggle navigation"
							>
								<i className="iconify tabler--menu-4 text-xl"></i>
							</button>
						</div>

						{/* Topbar Search */}
						<div id="search-box-rounded" className="hidden xl:flex">
							<div className="input-icon-group">
								<i className="iconify tabler--search input-icon text-lg text-(--topbar-item-color)/50! placeholder:opacity-50"></i>
								<input
									type="search"
									id="topbar-search"
									className="form-input w-57.5 rounded-full! border-(--topbar-search-border)! bg-(--topbar-search-bg)! text-(--topbar-item-color)! placeholder:opacity-50"
									placeholder="Quick Search..."
								/>
							</div>
						</div>

						{/* Mega Menu */}
						<div id="megamenu-columns" className="md:inline-flex hidden">
							<div className="topbar-item hs-dropdown relative inline-flex">
								<button
									className="topbar-link hs-dropdown-toggle btn px-2.5! font-medium"
									type="button"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
									Mega Menu <i className="iconify tabler--chevron-down"></i>
								</button>

								<div
									className="hs-dropdown-menu p-0 md:min-w-3xl"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="dropdown-menu"
								>
									<div style={{ maxHeight: '380px' }} data-simplebar="">
										<div className="grid md:grid-cols-3">
											<div className="p-3">
												<h5 className="py-2 px-3.5 font-semibold mb-2 text-sm">
													Dashboard &amp; Analytics
												</h5>
												<ul className="list-unstyled megamenu-list">
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Sales Dashboard
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Marketing Dashboard
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Finance Overview
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															User Analytics
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Traffic Insights
														</Link>
													</li>
												</ul>
											</div>

											<div className="p-3">
												<h5 className="py-2 px-3.5 font-semibold mb-2 text-sm">
													Project Management
												</h5>
												<ul className="list-unstyled megamenu-list">
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--minus align-middle me-1 text-default-400"></i>
															Kanban Workflow
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--minus align-middle me-1 text-default-400"></i>
															Project Timeline
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--minus align-middle me-1 text-default-400"></i>
															Task Management
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--minus align-middle me-1 text-default-400"></i>
															Team Members
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--minus align-middle me-1 text-default-400"></i>
															Assignments
														</Link>
													</li>
												</ul>
											</div>

											<div className="p-3 bg-light/50">
												<h5 className="py-2 px-3.5 font-semibold mb-2 text-sm">
													User Management
												</h5>
												<ul className="list-unstyled megamenu-list">
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															User Profiles
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Access Control
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Security Settings
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															User Groups
														</Link>
													</li>
													<li>
														<Link href="#" className="dropdown-item">
															<i className="iconify tabler--chevron-right align-middle me-1 text-default-400"></i>
															Authentication
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id="megamenu-apps" className="md:inline-flex hidden">
							<div className="topbar-item hs-dropdown relative inline-flex">
								<button
									className="topbar-link hs-dropdown-toggle btn px-2.5! font-medium"
									type="button"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
									Apps <i className="iconify tabler--chevron-down"></i>
								</button>

								<div
									className="hs-dropdown-menu p-0 md:min-w-3xl"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="dropdown-menu"
								>
									<div style={{ maxHeight: '380px' }} data-simplebar="">
										<div className="grid md:grid-cols-3">
											<div className="p-3 space-y-3">
												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-primary border border-light bg-light/50 rounded">
															<i className="iconify tabler--basket size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">eCommerce</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-success border border-light bg-light/50 rounded">
															<i className="iconify tabler--message size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Chat</h5>
															<span className="text-default-400 text-xs">
																Conversation with Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-danger border border-light bg-light/50 rounded">
															<i className="iconify tabler--list-check size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Task</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-info border border-light bg-light/50 rounded">
															<i className="iconify tabler--mailbox size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Email</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>
											</div>

											<div className="p-3 space-y-3">
												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-secondary border border-light bg-light/50 rounded">
															<i className="iconify tabler--building size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Companies</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-dark border border-light bg-light/50 rounded">
															<i className="iconify tabler--id size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Contacts Diary</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-warning border border-light bg-light/50 rounded">
															<i className="iconify tabler--calendar size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Calendar</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>

												<Link href="#" className="dropdown-item">
													<span className="flex items-center gap-3">
														<span className="size-9 flex items-center justify-center text-success border border-light bg-light/50 rounded">
															<i className="iconify tabler--lifebuoy size-5.5"></i>
														</span>
														<span>
															<h5 className="text-sm">Support</h5>
															<span className="text-default-400 text-xs">
																UI/UX Team
															</span>
														</span>
													</span>
												</Link>
											</div>

											<div className="row-span-2 bg-light/50">
												<div className="h-full relative rounded-e overflow-hidden bg-[url(/images/stock/small-8.jpg)] bg-cover">
													<div className="p-6 absolute inset-0 bg-gradient bg-secondary/90 flex items-center justify-center">
														<div className="text-center text-white">
															<i className="iconify tabler--atom text-4xl"></i>
															<p className="text-white/75 mb-base uppercase">
																Special
															</p>
															<h3 className="font-semibold text-white mb-3 text-xl">
																Get Early Discount
															</h3>
															<h4 className="font-medium text-base mb-1">
																<del className="text-opacity-75 text-white">
																	$49.00
																</del>
																/
																<span className="font-bold text-white">
																	$15 USD
																</span>
															</h4>
															<button
																type="button"
																className="mt-base btn btn-sm bg-danger text-white hover:bg-danger-hover"
															>
																<i className="iconify tabler--shopping-cart me-1.5"></i>
																Buy Now
															</button>
														</div>
													</div>
												</div>
											</div>

											<div className="col-span-2">
												<div className="grid grid-cols-2 border-t border-light border-dashed text-center">
													<div className="p-6">
														<p className="font-medium text-default-400 mb-3 text-2xs uppercase">
															-: &nbsp; Support &nbsp;:-
														</p>
														<h5 className="text-md">
															help@mydomain.com
														</h5>
													</div>

													<div className="p-6">
														<p className="font-medium text-default-400 mb-3 text-2xs uppercase">
															-: &nbsp; Help: &nbsp;:-
														</p>
														<h5 className="text-md">+(12) 3456 7890</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center gap-2.5">
						{/* Light/Dark Mode Dropdown */}
						<div id="theme-dropdown" className="sm:inline-flex hidden">
							<div className="topbar-item hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right]">
								<button
									className="topbar-link hs-dropdown-toggle rounded-full"
									type="button"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
									<i
										className="iconify tabler--sun topbar-link-icon hidden"
										id="theme-icon-light"
									></i>
									<i
										className="iconify tabler--moon topbar-link-icon hidden"
										id="theme-icon-dark"
									></i>
									<i
										className="iconify tabler--sun-moon topbar-link-icon hidden"
										id="theme-icon-system"
									></i>
								</button>

								<div
									className="hs-dropdown-menu"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="dropdown-menu"
								>
									<div className="theme-mode">
										<input
											className="peer invisible absolute size-0"
											type="radio"
											name="data-theme"
											id="topbar-dropdown-light"
											value="light"
											defaultChecked
										/>
										<label
											className="dropdown-item peer-checked:bg-default-100"
											htmlFor="topbar-dropdown-light"
										>
											<i className="iconify tabler--sun me-1 align-middle text-base"></i>
											Light
										</label>
									</div>

									<div className="theme-mode">
										<input
											className="peer invisible absolute size-0"
											type="radio"
											name="data-theme"
											id="topbar-dropdown-dark"
											value="dark"
										/>
										<label
											className="dropdown-item peer-checked:bg-default-100"
											htmlFor="topbar-dropdown-dark"
										>
											<i className="iconify tabler--moon me-1 align-middle text-base"></i>
											Dark
										</label>
									</div>

									<div className="theme-mode">
										<input
											className="peer invisible absolute size-0"
											type="radio"
											name="data-theme"
											id="topbar-dropdown-system"
											value="system"
										/>
										<label
											className="dropdown-item peer-checked:bg-default-100"
											htmlFor="topbar-dropdown-system"
										>
											<i className="iconify tabler--sun-moon me-1 align-middle text-base"></i>
											System
										</label>
									</div>
								</div>
							</div>
						</div>

						<div id="apps-dropdown-grid" className="xl:inline-flex hidden">
							<div className="topbar-item hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right]">
								<button
									className="topbar-link hs-dropdown-toggle relative flex items-center"
									type="button"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
									<i className="iconify tabler--apps topbar-link-icon"></i>
								</button>

								<div
									className="hs-dropdown-menu w-80 p-3"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="dropdown-menu"
								>
									<div className="grid grid-cols-3 items-center gap-1.5">
										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full bg-light flex items-center justify-center mx-auto mb-1.5">
												<Image
													src="/images/logos/google.svg"
													alt="Google Logo"
													className="h-4.5"
													width={18}
													height={18}
												/>
											</span>
											<span className="align-middle font-medium">Google</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full bg-light flex items-center justify-center mx-auto mb-1.5">
												<Image
													src="/images/logos/figma.svg"
													alt="Figma Logo"
													className="h-4.5"
													width={18}
													height={18}
												/>
											</span>
											<span className="align-middle font-medium">Figma</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full bg-light flex items-center justify-center mx-auto mb-1.5">
												<Image
													src="/images/logos/slack.svg"
													alt="Slack Logo"
													className="h-4.5"
													width={18}
													height={18}
												/>
											</span>
											<span className="align-middle font-medium">Slack</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full bg-light flex items-center justify-center mx-auto mb-1.5">
												<Image
													src="/images/logos/dropbox.svg"
													alt="Dropbox Logo"
													className="h-4.5"
													width={18}
													height={18}
												/>
											</span>
											<span className="align-middle font-medium">Dropbox</span>
										</Link>

										<div className="text-center">
											<Link
												href="#"
												className="btn btn-sm btn-icon rounded-full bg-danger text-white hover:bg-danger-hover"
											>
												<i className="iconify tabler--circle-dashed-plus text-lg"></i>
											</Link>
										</div>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full flex items-center justify-center bg-primary/15 text-primary mx-auto mb-1.5">
												<i className="iconify tabler--calendar text-lg"></i>
											</span>
											<span className="align-middle font-medium">Calendar</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full flex items-center justify-center bg-primary/15 text-primary mx-auto mb-1.5">
												<i className="iconify tabler--message-circle text-lg"></i>
											</span>
											<span className="align-middle font-medium">Chat</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full flex items-center justify-center bg-primary/15 text-primary mx-auto mb-1.5">
												<i className="iconify tabler--folder text-lg"></i>
											</span>
											<span className="align-middle font-medium">Files</span>
										</Link>

										<Link
											href="#"
											className="dropdown-item flex-col gap-0 border border-dashed border-default-300 rounded text-center py-3"
										>
											<span className="size-8 rounded-full flex items-center justify-center bg-primary/15 text-primary mx-auto mb-1.5">
												<i className="iconify tabler--users text-lg"></i>
											</span>
											<span className="align-middle font-medium">Team</span>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div
							id="notification-dropdown-people"
							className="topbar-item hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right]"
						>
							<button
								className="topbar-link hs-dropdown-toggle relative flex items-center"
								type="button"
								aria-haspopup="menu"
								aria-expanded="false"
								aria-label="Dropdown"
							>
								<i className="iconify tabler--bell topbar-link-icon"></i>
								<span className="badge bg-danger absolute -end-px -top-4 size-4 rounded-full leading-0 text-white">
									5
								</span>
							</button>

							<div
								className="hs-dropdown-menu min-w-80 p-0 space-y-0"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="dropdown-menu"
							>
								<div className="border-default-300 border-b px-3 py-2">
									<div className="flex items-center justify-between">
										<h6 className="text-base font-semibold">Notifications</h6>
										<Link
											href="#"
											className="badge badge-label py-1.5 bg-success/15 text-success"
										>
											07 Notification
										</Link>
									</div>
								</div>

								<div style={{ maxHeight: '300px' }} data-simplebar="">
									{/* item 1 */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-1"
									>
										<span className="shrink-0 relative">
											<Image
												src="/images/users/user-4.jpg"
												className="size-9 rounded-full"
												alt="User Avatar"
												width={36}
												height={36}
											/>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-success text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--bell text-2xs align-middle"></i>
												<span className="sr-only">unread notification</span>
											</span>
										</span>

										<span className="grow text-default-400">
											<span className="font-medium text-body-color">
												Emily Johnson
											</span>
											commented on a task in
											<span className="font-medium text-body-color">
												Design Sprint
											</span>
											<br />
											<span className="text-xs">12 minutes ago</span>
										</span>
									</div>

									{/* Notification 2 */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-2"
									>
										<span className="shrink-0 relative">
											<Image
												src="/images/users/user-5.jpg"
												className="size-9 rounded-full"
												alt="User Avatar"
												width={36}
												height={36}
											/>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-info text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--cloud-upload text-2xs align-middle"></i>
												<span className="sr-only">upload notification</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">
												Michael Lee
											</span>
											uploaded files to
											<span className="font-medium text-body-color">
												Marketing Assets
											</span>
											<br />
											<span className="text-xs">25 minutes ago</span>
										</span>
									</div>

									{/* Notification 3 - Server CPU Alert */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-6"
									>
										<span className="shrink-0 relative">
											<span className="size-9 rounded-full bg-light flex items-center justify-center">
												<i className="iconify tabler--database text-lg"></i>
											</span>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-danger text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--alert-circle text-2xs align-middle"></i>
												<span className="sr-only">server alert</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">Server #3</span>
											CPU usage exceeded 90%
											<br />
											<span className="text-xs">Just now</span>
										</span>
									</div>

									{/* Notification 4 */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-3"
									>
										<span className="shrink-0 relative">
											<Image
												src="/images/users/user-6.jpg"
												className="size-9 rounded-full"
												alt="User Avatar"
												width={36}
												height={36}
											/>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-warning text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--alert-triangle text-2xs align-middle"></i>
												<span className="sr-only">alert</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">
												Sophia Ray
											</span>
											flagged an issue in
											<span className="font-medium text-body-color">
												Bug Tracker
											</span>
											<br />
											<span className="text-xs">40 minutes ago</span>
										</span>
									</div>

									{/* Notification 5 */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-4"
									>
										<span className="shrink-0 relative">
											<Image
												src="/images/users/user-7.jpg"
												className="size-9 rounded-full"
												alt="User Avatar"
												width={36}
												height={36}
											/>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-primary text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--calendar-event text-2xs align-middle"></i>
												<span className="sr-only">event notification</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">David Kim</span>
											scheduled a meeting for
											<span className="font-medium text-body-color">
												UX Review
											</span>
											<br />
											<span className="text-xs">1 hour ago</span>
										</span>
									</div>

									{/* Notification 6 */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-5"
									>
										<span className="shrink-0 relative">
											<Image
												src="/images/users/user-8.jpg"
												className="size-9 rounded-full"
												alt="User Avatar"
												width={36}
												height={36}
											/>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-secondary text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--edit text-2xs align-middle"></i>
												<span className="sr-only">edit</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">
												Isabella White
											</span>
											updated the document in
											<span className="font-medium text-body-color">
												Product Specs
											</span>
											<br />
											<span className="text-xs">2 hours ago</span>
										</span>
									</div>

									{/* Notification 7 - Deployment Success */}
									<div
										className="dropdown-item gap-6 px-4.5 py-3 text-wrap"
										id="message-7"
									>
										<span className="shrink-0 relative">
											<span className="size-9 rounded-full bg-light flex items-center justify-center">
												<i className="iconify tabler--rocket text-lg"></i>
											</span>
											<span className="absolute -top-3 -end-2 border-2 border-card bg-success text-white flex size-5.5 items-center justify-center rounded-full">
												<i className="iconify tabler--check text-2xs align-middle"></i>
												<span className="sr-only">deployment</span>
											</span>
										</span>
										<span className="grow text-default-400">
											<span className="font-medium text-body-color">
												Production Server
											</span>
											deployment completed successfully
											<br />
											<span className="text-xs">30 minutes ago</span>
										</span>
									</div>
								</div>

								{/* All*/}
								<Link
									href="#"
									className="dropdown-item text-reset border-light justify-center border-t py-3 font-bold underline underline-offset-2"
								>
									Read All Messages
								</Link>
							</div>
						</div>

						{/* FullScreen Toggle */}
						<div id="fullscreen-toggler" className="md:inline-flex hidden">
							<div className="topbar-item">
								<button
									className="topbar-link btn group size-8 rounded-full"
									data-toggle="fullscreen"
									aria-label="Full Screen"
								>
									<i className="iconify tabler--maximize topbar-link-icon group-[.fullscreen-active]:hidden"></i>
									<i className="iconify tabler--minimize hidden topbar-link-icon group-[.fullscreen-active]:inline-block"></i>
								</button>
							</div>
						</div>

						<div className="xl:inline-flex hidden">
							<div id="monochrome-toggler" className="topbar-item">
								<button className="topbar-link btn btn-sm size-8 rounded-full" id="monochrome-mode" type="button" aria-label="Monochrome Mode">
									<i className="iconify tabler--palette topbar-link-icon"></i>
								</button>
							</div>
						</div>

						<div className="sm:inline-flex hidden">
							<div className="topbar-item btn-theme-setting">
								<button className="topbar-link btn btn-icon size-8 rounded-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="theme-customization" data-hs-overlay="#theme-customization">
									<i className="iconify tabler--settings topbar-link-icon"></i>
								</button>
							</div>
						</div>


						<div id="language-selector-rounded" className="topbar-item hs-dropdown relative inline-flex [--placement:bottom-right]">
							<button className="topbar-link hs-dropdown-toggle font-bold relative flex items-center" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
								<img src="/images/flags/us.svg" alt="" className="me-3 size-4.5 rounded-full" id="selected-language-image" />
								<span id="selected-language-code">EN</span>
							</button>

							<div className="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
								<a role="button" className="dropdown-item" data-translator-lang="en" title="English">
									<img src="/images/flags/us.svg" alt="English" className="me-1 size-4 rounded-full" height="18" data-translator-image="" />
									<span className="align-middle">English</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="de" title="German">
									<img src="/images/flags/de.svg" alt="German" className="me-1 size-4 rounded-full" height="18" data-translator-image="" />
									<span className="align-middle">Deutsch</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="it" title="Italian">
									<img src="/images/flags/it.svg" alt="Italian" className="me-1 size-4 rounded-full" height="18" data-translator-image="" />
									<span className="align-middle">Italiano</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="es" title="Spanish">
									<img src="/images/flags/es.svg" alt="Spanish" className="me-1 size-4 rounded-full" height="18" data-translator-image="" />
									<span className="align-middle">Español</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="ru" title="Russian">
									<img src="/images/flags/ru.svg" alt="Russian" className="me-1 size-4 rounded-full" height="18" data-translator-image="" />
									<span className="align-middle">Русский</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="hi" title="Hindi">
									<img src="/images/flags/in.svg" alt="Hindi" className="me-1 size-4 rounded-full" data-translator-image="" />
									<span className="align-middle">हिन्दी</span>
								</a>
								<a role="button" className="dropdown-item" data-translator-lang="ar" title="Arabic">
									<img src="/images/flags/sa.svg" alt="Arabic" className="me-1 size-4 rounded-full" data-translator-image="" />
									<span className="align-middle">عربي</span>
								</a>
							</div>
						</div>

						<div id="user-dropdown-detailed" className="topbar-item hs-dropdown before:bg-default-700/35 relative inline-flex before:h-4.5 before:w-px before:content-['']">
							<button className="hs-dropdown-toggle topbar-link ms-2.5 cursor-pointer items-center px-3! flex" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
								<img src="/images/users/user-1.jpg" alt="user-image" className="size-8 rounded-full lg:me-3" />
								<div className="hidden lg:flex items-center gap-1.5">
									<span className="flex flex-col items-start">
										<h5 className="pro-username">David Dev</h5>
										<span className="text-xs/none mb-0.5">Admin Head</span>
									</span>
									<i className="iconify tabler--chevron-down align-middle"></i>
								</div>
							</button>

							<div className="hs-dropdown-menu min-w-48" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons">
								<div className="py-2 px-3.5">
									<h6 className="text-xs">Welcome back 👋!</h6>
								</div>


								<a href="#!" className="dropdown-item">
									<i className="iconify tabler--user-circle text-base align-middle"></i>
									<span className="align-middle">Profile</span>
								</a>

								<a role="button" className="dropdown-item">
									<i className="iconify tabler--bell-ringing text-base align-middle"></i>
									<span className="align-middle">Notifications</span>
								</a>


								<a role="button" className="dropdown-item">
									<i className="iconify tabler--settings-2 text-base align-middle"></i>
									<span className="align-middle">Account Settings</span>
								</a>


								<a role="button" className="dropdown-item">
									<i className="iconify tabler--headset text-base align-middle"></i>
									<span className="align-middle">Support Center</span>
								</a>


								<div className="dropdown-divider"></div>


								<a href="auth-lock-screen.html" className="dropdown-item">
									<i className="iconify tabler--lock text-base align-middle"></i>
									<span className="align-middle">Lock Screen</span>
								</a>

								<a role="button" className="dropdown-item font-semibold">
									<i className="iconify tabler--logout text-base align-middle"></i>
									<span className="align-middle">Log Out</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>

	);
};

export default HeaderMenu;