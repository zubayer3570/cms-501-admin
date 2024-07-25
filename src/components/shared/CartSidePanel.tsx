import React from 'react'

export default function CartSidePanel() {
    return (
        <div id="cartSidePenal" drawer-end className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow dark:bg-zink-600 ltr:right-0 rtl:left-0 md:w-96 z-drawer show hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                <div className="grow">
                    <h5 className="mb-0 text-16">Shopping Cart <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-custom-500 border-custom-500">3</span></h5>
                </div>
                <div className="shrink-0">
                    <button data-drawer-close="cartSidePenal" className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800"><i data-lucide="x" className="size-4"></i></button>
                </div>
            </div>
            <div className="px-4 py-3 text-sm text-green-500 border border-transparent bg-green-50 dark:bg-green-400/20">
                <span className="font-bold underline">TAILWICK50</span> Coupon code applied successfully.
            </div>
            <div>
                <div className="h-[calc(100vh_-_370px)] p-4 overflow-y-auto product-list">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 product">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                                <img src="/assets/images/product/img-01.png" alt="" className="h-8" />
                            </div>
                            <div className="overflow-hidden grow">
                                <div className="ltr:float-right rtl:float-left">
                                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"><i data-lucide="x" className="size-4"></i></button>
                                </div>
                                <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                                    <h6 className="mb-1 text-15">Cotton collar t-shirts for men</h6>
                                </a>
                                <div className="flex items-center mb-3">
                                    <h5 className="text-base product-price"> $<span>155.32</span></h5>
                                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-500 dark:text-zink-200">(Fashion)</div>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="inline-flex text-center input-step">
                                        <button type="button" className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="minus" className="inline-block size-4"></i></button>
                                        <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value="2" min="0" max="100" readOnly />
                                        <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="plus" className="inline-block size-4"></i></button>
                                    </div>
                                    <h6 className="product-line-price">310.64</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 product">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                                <img src="/assets/images/product/img-03.png" alt="" className="h-8" />
                            </div>
                            <div className="overflow-hidden grow">
                                <div className="ltr:float-right rtl:float-left">
                                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"><i data-lucide="x" className="size-4"></i></button>
                                </div>
                                <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                                    <h6 className="mb-1 text-15">Like style travel black handbag</h6>
                                </a>
                                <div className="flex items-center mb-3">
                                    <h5 className="text-base product-price"> $<span>349.95</span></h5>
                                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-400 dark:text-zink-200">(Luggage)</div>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="inline-flex text-center input-step">
                                        <button type="button" className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="minus" className="inline-block size-4"></i></button>
                                        <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value="1" min="0" max="100" readOnly />
                                        <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="plus" className="inline-block size-4"></i></button>
                                    </div>
                                    <h6 className="product-line-price">349.95</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 product">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                                <img src="/assets/images/product/img-09.png" alt="" className="h-8" />
                            </div>
                            <div className="overflow-hidden grow">
                                <div className="ltr:float-right rtl:float-left">
                                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"><i data-lucide="x" className="size-4"></i></button>
                                </div>
                                <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                                    <h6 className="mb-1 text-15">Blive Printed Men Round Neck</h6>
                                </a>
                                <div className="flex items-center mb-3">
                                    <h5 className="text-base product-price">$<span>546.74</span></h5>
                                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-400 dark:text-zink-200">(Fashion)</div>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="inline-flex text-center input-step">
                                        <button type="button" className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="minus" className="inline-block size-4"></i></button>
                                        <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value="4" min="0" max="100" readOnly />
                                        <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="plus" className="inline-block size-4"></i></button>
                                    </div>
                                    <h6 className="product-line-price end">2,186.96</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-slate-200 dark:border-zink-500">

                    <table className="w-full mb-3 ">
                        <tbody className="table-total">
                            <tr>
                                <td className="py-2">Sub Total :</td>
                                <td className="text-right cart-subtotal">$2,847.55</td>
                            </tr>
                            <tr>
                                <td className="py-2">Discount <span className="text-muted">(TAILWICK50)</span>:</td>
                                <td className="text-right cart-discount">-$476.00</td>
                            </tr>
                            <tr>
                                <td className="py-2">Shipping Charge :</td>
                                <td className="text-right cart-shipping">$89.00</td>
                            </tr>
                            <tr>
                                <td className="py-2">Estimated Tax (12.5%) : </td>
                                <td className="text-right cart-tax">$70.62</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="py-2">Total : </td>
                                <td className="text-right cart-total">$2,531.17</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between gap-3">
                        <a href="apps-ecommerce-product-grid.html" className="w-full text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-slate-400/10">Continue Shopping</a>
                        <a href="apps-ecommerce-checkout.html" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20">Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
