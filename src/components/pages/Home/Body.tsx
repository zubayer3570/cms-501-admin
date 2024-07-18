import CartSidePanel from '@/components/shared/CartSidePanel'
import NavigationBar from '@/components/shared/NavigationBar'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
import MainContent from './MainContent'
import Theme from '@/components/shared/Theme'

export default function Body() {
    return (
        <>
            <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
                <Sidebar />
                <NavigationBar />
                <CartSidePanel />
                <MainContent />

            </div >
            {/* < !--end main content-- > */}

            <div className="fixed items-center hidden bottom-6 right-12 h-header group-data-[navbar=hidden]:flex">
                <button data-drawer-target="customizerButton" type="button" className="inline-flex items-center justify-center w-12 h-12 p-0 transition-all duration-200 ease-linear rounded-md shadow-lg text-sky-50 bg-sky-500">
                    <i data-lucide="settings" className="inline-block w-5 h-5"></i>
                </button>
            </div>

            <Theme />


        </>
    )
}
