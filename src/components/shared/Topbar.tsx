import React from 'react'
import CartSidePanel from './CartSidePanel'

export default function Topbar() {
    return (
        <>

            <header id="page-topbar" className="ltr:md:left-vertical-menu rtl:md:right-vertical-menu group-data-[sidebar-size=md]:ltr:md:left-vertical-menu-md group-data-[sidebar-size=md]:rtl:md:right-vertical-menu-md group-data-[sidebar-size=sm]:ltr:md:left-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:md:right-vertical-menu-sm group-data-[layout=horizontal]:ltr:left-0 group-data-[layout=horizontal]:rtl:right-0 fixed right-0 z-[1000] left-0 print:hidden group-data-[navbar=bordered]:m-4 group-data-[navbar=bordered]:[&.is-sticky]:mt-0 transition-all ease-linear duration-300 group-data-[navbar=hidden]:hidden group-data-[navbar=scroll]:absolute group/topbar group-data-[layout=horizontal]:z-[1004]">
                <div className="layout-width">
                    <div className="flex items-center px-4 mx-auto bg-topbar border-b-2 border-topbar group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand shadow-md h-header shadow-slate-200/50 group-data-[navbar=bordered]:rounded-md group-data-[navbar=bordered]:group-[.is-sticky]/topbar:rounded-t-none group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-700 dark:shadow-none group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-zink-500 group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-md group-data-[navbar=bordered]:shadow-none group-data-[layout=horizontal]:group-data-[navbar=bordered]:rounded-b-none group-data-[layout=horizontal]:shadow-none group-data-[layout=horizontal]:dark:group-[.is-sticky]/topbar:shadow-none">
                        <div className="flex items-center w-full group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl navbar-header group-data-[layout=horizontal]:ltr:xl:pr-3 group-data-[layout=horizontal]:rtl:xl:pl-3">
                            {/* <!-- LOGO --> */}
                            <div className="items-center justify-center hidden px-5 text-center h-header group-data-[layout=horizontal]:md:flex group-data-[layout=horizontal]:ltr::pl-0 group-data-[layout=horizontal]:rtl:pr-0">
                                <a href="index.html">
                                    <span className="hidden">
                                        <img src="/assets/images/logo-sm.png" alt="" className="h-6 mx-auto" />
                                    </span>
                                    <span className="group-data-[topbar=dark]:hidden group-data-[topbar=brand]:hidden">
                                        <img src="/assets/images/logo-dark.png" alt="" className="h-6 mx-auto" />
                                    </span>
                                </a>
                                <a href="index.html" className="hidden group-data-[topbar=dark]:block group-data-[topbar=brand]:block">
                                    <span className="group-data-[topbar=dark]:hidden group-data-[topbar=brand]:hidden">
                                        <img src="/assets/images/logo-sm.png" alt="" className="h-6 mx-auto" />
                                    </span>
                                    <span className="group-data-[topbar=dark]:block group-data-[topbar=brand]:block">
                                        <img src="/assets/images/logo-light.png" alt="" className="h-6 mx-auto" />
                                    </span>
                                </a>
                            </div>

                            <button type="button" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-75 ease-linear bg-topbar rounded-md btn hover:bg-slate-100 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:dark:border-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[layout=horizontal]:flex group-data-[layout=horizontal]:md:hidden hamburger-icon" id="topnav-hamburger-icon">
                                <i data-lucide="chevrons-left" className="w-5 h-5 group-data-[sidebar-size=sm]:hidden"></i>
                                <i data-lucide="chevrons-right" className="hidden w-5 h-5 group-data-[sidebar-size=sm]:block"></i>
                            </button>

                            <div className="relative hidden ltr:ml-3 rtl:mr-3 lg:block group-data-[layout=horizontal]:hidden group-data-[layout=horizontal]:lg:block">
                                <input type="text" className="py-2 pr-4 text-sm text-topbar-item bg-topbar border border-topbar-border rounded pl-8 placeholder:text-slate-400 form-control focus-visible:outline-0 min-w-[300px] focus:border-blue-400 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-border-dark group-data-[topbar=dark]:placeholder:text-slate-500 group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-border-brand group-data-[topbar=brand]:placeholder:text-blue-300 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-500 group-data-[topbar=dark]:dark:text-zink-100" placeholder="Search for ..." autoComplete="off" />
                                <i data-lucide="search" className="inline-block size-4 absolute left-2.5 top-2.5 text-topbar-item fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:dark:fill-zink-600"></i>
                            </div>

                            <div className="flex gap-3 ms-auto">
                                <div className="relative flex items-center dropdown h-header">
                                    <button type="button" className="inline-flex justify-center items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-200 ease-linear bg-topbar rounded-md dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=dark]:dark:text-zink-500 group-data-[topbar=dark]:dark:hover:text-zink-50" id="flagsDropdown" data-bs-toggle="dropdown">
                                        <img src="/assets/images/flags/20/us.svg" alt="" id="header-lang-img" className="h-5 rounded-sm" />
                                    </button>
                                    <div className="absolute z-50 hidden p-4 ltr:text-left rtl:text-right bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[10rem] flex flex-col gap-4 dark:bg-zink-600" aria-labelledby="flagsDropdown">
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="en" title="English">
                                            <img src="/assets/images/flags/20/us.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">English</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="sp" title="Spanish">
                                            <img src="/assets/images/flags/20/es.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Spanish</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="gr" title="German">
                                            <img src="/assets/images/flags/20/de.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">German</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="fr" title="French">
                                            <img src="/assets/images/flags/20/fr.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">French</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="jp" title="Japanese">
                                            <img src="/assets/images/flags/20/jp.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Japanese</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="ch" title="Chinese">
                                            <img src="/assets/images/flags/20/china.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Chinese</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="it" title="Italian">
                                            <img src="/assets/images/flags/20/it.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Italian</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="ru" title="Russian">
                                            <img src="/assets/images/flags/20/ru.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Russian</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items language" data-lang="ar" title="Arabic">
                                            <img src="/assets/images/flags/20/ae.svg" alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="transition-all duration-200 ease-linear font-15medium text- text-slate-600 dark:text-zink-200 group-hover/items:text-custom-500">Arabic</h6>
                                        </a>
                                    </div>
                                </div>

                                <div className="relative flex items-center h-header">
                                    <button type="button" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" id="light-dark-mode">
                                        <i data-lucide="sun" className="inline-block w-5 h-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></i>
                                    </button>
                                </div>

                                <div className="relative flex items-center h-header">
                                    <button type="button" data-drawer-target="cartSidePenal" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark">
                                        <i data-lucide="shopping-cart" className="inline-block w-5 h-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></i>
                                        <span className="absolute flex items-center justify-center w-[16px] h-[16px] text-xs text-white bg-red-400 border-white rounded-full -top-1 -right-1">3</span>
                                    </button>
                                </div>

                                <div className="relative flex items-center dropdown h-header">
                                    <button type="button" className="inline-flex justify-center relative items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-200 ease-linear bg-topbar rounded-md dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" id="notificationDropdown" data-bs-toggle="dropdown">
                                        <i data-lucide="bell-ring" className="inline-block w-5 h-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></i>
                                        <span className="absolute top-0 right-0 flex w-1.5 h-1.5">
                                            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
                                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                        </span>
                                    </button>
                                    <div className="absolute z-50 hidden ltr:text-left rtl:text-right bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[20rem] lg:min-w-[26rem] dark:bg-zink-600" aria-labelledby="notificationDropdown">
                                        <div className="p-4">
                                            <h6 className="mb-4 text-16">Notifications <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-orange-500 border-orange-500">15</span></h6>
                                            <ul className="flex flex-wrap w-full p-1 mb-2 text-sm font-medium text-center rounded-md filter-btns text-slate-500 bg-slate-100 nav-tabs dark:bg-zink-500 dark:text-zink-200" data-filter-target="notification-list">
                                                <li className="grow">
                                                    <a href="javascript:void(0);" data-filter="all" className="inline-block nav-link px-1.5 w-full py-1 text-xs transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent [&.active]:bg-white [&.active]:text-custom-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:[&.active]:bg-zink-600 -mb-[1px] active">View All</a>
                                                </li>
                                                <li className="grow">
                                                    <a href="javascript:void(0);" data-filter="mention" className="inline-block nav-link px-1.5 w-full py-1 text-xs transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent [&.active]:bg-white [&.active]:text-custom-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:[&.active]:bg-zink-600 -mb-[1px]">Mentions</a>
                                                </li>
                                                <li className="grow">
                                                    <a href="javascript:void(0);" data-filter="follower" className="inline-block nav-link px-1.5 w-full py-1 text-xs transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent [&.active]:bg-white [&.active]:text-custom-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:[&.active]:bg-zink-600 -mb-[1px]">Followers</a>
                                                </li>
                                                <li className="grow">
                                                    <a href="javascript:void(0);" data-filter="invite" className="inline-block nav-link px-1.5 w-full py-1 text-xs transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent [&.active]:bg-white [&.active]:text-custom-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:[&.active]:bg-zink-600 -mb-[1px]">Invites</a>
                                                </li>
                                            </ul>

                                        </div>
                                        <div data-simplebar className="max-h-[350px]">
                                            <div className="flex flex-col gap-1" id="notification-list">
                                                <a href="#!" className="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 follower">
                                                    <div className="w-10 h-10 rounded-md shrink-0 bg-slate-100">
                                                        <img src="/assets/images/users/avatar-3.png" alt="" className="rounded-md" />
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 font-medium"><b>@willie_passem</b> followed you</h6>
                                                        <p className="mb-0 text-sm text-slate-500 dark:text-zink-300"><i data-lucide="clock" className="inline-block w-3.5 h-3.5 mr-1"></i> <span className="align-middle">Wednesday 03:42 PM</span></p>
                                                    </div>
                                                    <div className="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300">
                                                        <div className="w-1.5 h-1.5 bg-custom-500 rounded-full"></div> 4 sec
                                                    </div>
                                                </a>
                                                <a href="#!" className="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 mention">
                                                    <div className="w-10 h-10 bg-yellow-100 rounded-md shrink-0">
                                                        <img src="/assets/images/users/avatar-5.png" alt="" className="rounded-md" />
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 font-medium"><b>@caroline_jessica</b> commented on your post</h6>
                                                        <p className="mb-3 text-sm text-slate-500 dark:text-zink-300"><i data-lucide="clock" className="inline-block w-3.5 h-3.5 mr-1"></i> <span className="align-middle">Wednesday 03:42 PM</span></p>
                                                        <div className="p-2 rounded bg-slate-100 text-slate-500 dark:bg-zink-500 dark:text-zink-300">Amazing! Fast, to the point, professional and really amazing to work with them!!!</div>
                                                    </div>
                                                    <div className="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300">
                                                        <div className="w-1.5 h-1.5 bg-custom-500 rounded-full"></div> 15 min
                                                    </div>
                                                </a>
                                                <a href="#!" className="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 invite">
                                                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-md shrink-0">
                                                        <i data-lucide="shopping-bag" className="w-5 h-5 text-red-500 fill-red-200"></i>
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 font-medium">Successfully purchased a business plan for <span className="text-red-500">$199.99</span></h6>
                                                        <p className="mb-0 text-sm text-slate-500 dark:text-zink-300"><i data-lucide="clock" className="inline-block w-3.5 h-3.5 mr-1"></i> <span className="align-middle">Monday 11:26 AM</span></p>
                                                    </div>
                                                    <div className="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300">
                                                        <div className="w-1.5 h-1.5 bg-custom-500 rounded-full"></div> Yesterday
                                                    </div>
                                                </a>
                                                <a href="#!" className="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 mention">
                                                    <div className="relative shrink-0">
                                                        <div className="w-10 h-10 bg-pink-100 rounded-md">
                                                            <img src="/assets/images/users/avatar-7.png" alt="" className="rounded-md" />
                                                        </div>
                                                        <div className="absolute text-orange-500 -bottom-0.5 -right-0.5 text-16">
                                                            <i className="ri-heart-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 font-medium"><b>@scott</b> liked your post</h6>
                                                        <p className="mb-0 text-sm text-slate-500 dark:text-zink-300"><i data-lucide="clock" className="inline-block w-3.5 h-3.5 mr-1"></i> <span className="align-middle">Thursday 06:59 AM</span></p>
                                                    </div>
                                                    <div className="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300">
                                                        <div className="w-1.5 h-1.5 bg-custom-500 rounded-full"></div> 1 Week
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 p-4 border-t border-slate-200 dark:border-zink-500">
                                            <div className="grow">
                                                <a href="#!">Manage Notification</a>
                                            </div>
                                            <div className="shrink-0">
                                                <button type="button" className="px-2 py-1.5 text-xs text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">View All Notification <i data-lucide="move-right" className="inline-block w-3.5 h-3.5 ml-1"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative items-center hidden h-header md:flex">
                                    <button data-drawer-target="customizerButton" type="button" className="inline-flex justify-center items-center p-0 text-topbar-item transition-all w-[37.5px] h-[37.5px] duration-200 ease-linear bg-topbar group-data-[topbar=dark]:text-topbar-item-dark rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200">
                                        <i data-lucide="settings" className="inline-block w-5 h-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></i>
                                    </button>
                                </div>

                                <div className="relative flex items-center dropdown h-header">
                                    <button type="button" className="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        <div className="bg-pink-100 rounded-full">
                                            <img src="/assets/images/users/user-profile.png" alt="" className="w-[37.5px] h-[37.5px] rounded-full" />
                                        </div>
                                    </button>
                                    <div className="absolute z-50 hidden p-4 ltr:text-left rtl:text-right bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[14rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                        <h6 className="mb-2 text-sm font-normal text-slate-500 dark:text-zink-300">Welcome to Tailwick</h6>
                                        <a href="#!" className="flex gap-3 mb-3">
                                            <div className="relative inline-block shrink-0">
                                                <div className="rounded bg-slate-100 dark:bg-zink-500">
                                                    <img src="/assets/images/users/user-profile.png" alt="" className="w-12 h-12 rounded" />
                                                </div>
                                                <span className="-top-1 ltr:-right-1 rtl:-left-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full dark:border-zink-600"></span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1 text-15">Paula Keenan</h6>
                                                <p className="text-slate-500 dark:text-zink-300">CEO & Founder</p>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" href="pages-account.html"><i data-lucide="user-2" className="inline-block size-4 ltr:mr-2 rtl:ml-2"></i> Profile</a>
                                            </li>
                                            <li>
                                                <a className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" href="apps-mailbox.html"><i data-lucide="mail" className="inline-block size-4 ltr:mr-2 rtl:ml-2"></i> Inbox <span className="inline-flex items-center justify-center w-5 h-5 ltr:ml-2 rtl:mr-2 text-[11px] font-medium border rounded-full text-white bg-red-500 border-red-500">15</span></a>
                                            </li>
                                            <li>
                                                <a className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" href="apps-chat.html"><i data-lucide="messages-square" className="inline-block size-4 ltr:mr-2 rtl:ml-2"></i> Chat</a>
                                            </li>
                                            <li>
                                                <a className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" href="pages-pricing.html"><i data-lucide="gem" className="inline-block size-4 ltr:mr-2 rtl:ml-2"></i> Upgrade <span className="inline-flex items-center justify-center w-auto h-5 ltr:ml-2 rtl:mr-2 px-1 text-[12px] font-medium border rounded text-white bg-sky-500 border-sky-500">Pro</span></a>
                                            </li>
                                            <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                                <a className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" href="auth-logout-basic.html"><i data-lucide="log-out" className="inline-block size-4 ltr:mr-2 rtl:ml-2"></i> Sign Out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <CartSidePanel />

        </>
    )
}
