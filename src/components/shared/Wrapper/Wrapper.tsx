import Script from 'next/script'
import React from 'react'
import Customizer from '../Customizer'
import Footer from '../Footer'
import StoreProvider from '@/app/StoreProvider'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

export default function Wrapper({children}: any) {
    return (
        <body className="text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800 group-data-[skin=bordered]:bg-body-bordered group-data-[skin=bordered]:dark:bg-zink-700">


                <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
                    <Sidebar />
                    <Topbar />

                    <div className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">

                        {/* {{> partials / page - wrapper}} */}
                        <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">

                            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">

                                {children}

                            </div>
                            {/* <!-- container-fluid --> */}
                        </div>
                        <Footer />
                    </div>
                    {/* <!-- End Page-content --> */}


                </div>

                {/* customizer */}
                <Customizer />

            {/* <!-- App js --> */}
            <Script src="/assets/js/app.js" strategy="afterInteractive" ></Script>

        </body>
    )
}
