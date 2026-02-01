
import { ReactNode } from 'react';
import LayoutSwitcher from "./partials/Switcher";
import HeaderMenu from "./partials/Header";
import SideBarMenu from "./partials/SideBarMenu";

export default function MasterLayout({ children }: { children: ReactNode }) {
    // {children}
    return (
       <>
<html lang="en" dir="ltr" data-nav-layout="vertical" className="light" data-header-styles="light" data-menu-styles="dark" data-width="fullwidth" >
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <head>
                    <meta charSet="UTF-8" />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="Description" content="Codeigniter Bootstrap Responsive Admin Web Dashboard Template" />
                    <meta name="Author" content="Spruko Technologies Private Limited" />
                    <meta name="keywords" content="custom dashboard nextjs" />
                    <title> custom - PHP Bootstrap 5 Premium Admin & Dashboard Template </title>
                    {/* <link rel="icon" href="/assets/images/brand-logos/favicon.ico" type="image/x-icon" /> */}
                    <script src="/assets/js/main.js"></script>
                    <script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>


                    <link href="/assets/css/styles.css" rel="stylesheet" />

                    <link href="/assets/libs/node-waves/waves.min.css" rel="stylesheet" />
                    <link href="/assets/libs/simplebar/simplebar.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="/assets/libs/flatpickr/flatpickr.min.css" />
                    <link rel="stylesheet" href="/assets/libs/%40simonwep/pickr/themes/nano.min.css" />
                    <link rel="stylesheet" href="/assets/libs/choices.js/public/assets/styles/choices.min.css" />
                    <link rel="stylesheet" href="/assets/libs/%40tarekraafat/autocomplete.js/css/autoComplete.css" />


                </head>

                <body >

                    {/* {/* Switcher */}

                    <LayoutSwitcher />

                    {/* {/* End switcher */}
                    {/* {/* Loader */}
                    <div id="loader" >
                        <img src="/assets/images/media/loader.svg" alt="" />
                    </div>

                    {/* {/* Loader */}
                    <div className="page">
                        <HeaderMenu  />

                        <SideBarMenu />
                        {/* <!-- Start::app-content --> */}
                        <div className="main-content app-content">
                        <div className="container-fluid">   
                                {children }
                            </div>
                        </div>


                        {/* SCROLL-TO-TOP */}
                        <footer className="mt-auto py-4 bg-white dark:bg-bodybg text-center border-t border-defaultborder dark:border-defaultborder/10">
                            <div className="container">
                                <span className="text-textmuted dark:text-textmuted/50">
                                    Copyright © <span id="year"></span>
                                    <a href="javascript:void(0);" className="text-dark font-medium">Xintra</a>.
                                    Designed with <span className="text-danger">&#10084;</span> by
                                    <a href="https://spruko.com/" target="_blank">
                                        <span className="font-medium text-primary">Spruko</span>
                                    </a>
                                    All rights reserved
                                </span>
                            </div>
                        </footer>
                    </div>



                    <div className="scrollToTop">
                        <span className="arrow"><i className="ti ti-arrow-narrow-up text-xl"></i></span>
                    </div>
                    <div id="responsive-overlay"></div>

                    <script dangerouslySetInnerHTML={{
                        __html: `
                            setTimeout(function() {
                                var scripts = [
                                    "/assets/libs/%40popperjs/core/umd/popper.min.js",
                                    "/assets/libs/node-waves/waves.min.js",
                                    "/assets/libs/%40simonwep/pickr/pickr.es5.min.js",
                                    "/assets/libs/flatpickr/flatpickr.min.js",
                                    "/assets/js/switch.js",
                                    "/assets/libs/preline/preline.js",
                                    "/assets/libs/simplebar/simplebar.min.js",
                                    "/assets/js/simplebar.js",
                                    "/assets/libs/%40tarekraafat/autocomplete.js/autoComplete.min.js",
                                    "/assets/js/defaultmenu.js",
                                    "/assets/libs/apexcharts/apexcharts.min.js",
                                    "/assets/libs/echarts/echarts.min.js",
                                    "/assets/js/ecommerce-dashboard.js",
                                    "/assets/js/sticky.js",
                                    "/assets/js/custom.js",
                                    "/assets/js/custom-switcher.js"
                                ];
                                scripts.forEach(function(src) {
                                    var s = document.createElement('script');
                                    s.src = src;
                                    s.async = false;
                                    document.body.appendChild(s);
                                });
                            }, 1200);
                        `
                    }} />


                </body>
            </html>
            </>
    );
}
