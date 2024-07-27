"use client"

import BreadCrumb from '@/components/shared/BreadCrumb'
import Loading from '@/components/shared/Loading'
import axios from 'axios'
import React, { useState } from 'react'

export default function CreateProduct() {
    const title = "Admin"
    const pageTitle = "Create Product"

    const [loading, setLoading] = useState(false)

    const createProduct = (e: any) => {
        e.preventDefault()

        const name = e.target.name.value
        const description = e.target.description.value
        const price = e.target.price.value
        const category = e.target.category.value
        const framework = e.target.framework.value
        const demo_url = e.target.demo_url.value
        const backend_url = e.target.backend_url.value
        const server_requirements = e.target.server_requirements.value
        const support_info = e.target.support_info.value
        const author = e.target.author.value
        const version = e.target.version.value
        // const tags = e.target.tags.value.split(", ")
        const tags = e.target.tags.value

        const detail_type = e.target.detail_type.value
        const detailed_description = e.target.detailed_description.value
        const detail_url = e.target.detail_url.value

        const product = {
            name,
            description,
            price,
            category,
            framework,
            demo_url,
            backend_url,
            server_requirements,
            support_info,
            author,
            version,
            tags,
            product_details: {
                detail_type,
                detail_url,
                detailed_description
            }
        }

        console.log(product)

        try {
            setLoading(true)
            axios.post("/api/products/create-product", { product })
                .then(res => {
                    console.log(res.data);
                    // (document.getElementById("create-product-form") as HTMLFormElement).reset()
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err.message)
                    setLoading(false)
                })
        } catch (err: any) {
            console.log(err.message)
        }
    }



    return (
        <>
            <BreadCrumb title={title} pageTitle={pageTitle} />
            {
                loading ?
                    <Loading />
                    :
                    <div className="card">
                        <div className="card-body">
                            <form id='create-product-form' onSubmit={createProduct} >

                                {/* input fields for product listing page*/}
                                <h5 className="text-16 mb-5">Product</h5>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className='col-span-2'>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Name <span className="text-red-500">*</span></label>
                                        <input name='name' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div className='col-span-2' >
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Description <span className="text-red-500">*</span></label>
                                        <textarea name='description' className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" rows={3}></textarea>
                                        {/* <input type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required /> */}
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Price <span className="text-red-500">*</span></label>
                                        <input name='price' type="number" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Category <span className="text-red-500">*</span></label>
                                        <input name='category' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Framework <span className="text-red-500">*</span></label>
                                        <input name='framework' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Demo URL <span className="text-red-500">*</span></label>
                                        <input name='demo_url' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Backend URL <span className="text-red-500">*</span></label>
                                        <input name='backend_url' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Server Requirements <span className="text-red-500">*</span></label>
                                        <input name='server_requirements' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Support Info <span className="text-red-500">*</span></label>
                                        <input name='support_info' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Author <span className="text-red-500">*</span></label>
                                        <input name='author' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Version <span className="text-red-500">*</span></label>
                                        <input name='version' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Tags <span className="text-red-500">*</span> (Ex: abc, def, hij...)</label>
                                        <input name='tags' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                </div>

                                {/* input fields for product details page*/}
                                <h5 className="text-16 mt-10 mb-5">Product Details</h5>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Detail Type <span className="text-red-500">*</span></label>
                                        <input name='detail_type' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Detail URL <span className="text-red-500">*</span></label>
                                        <input name='detail_url' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                                    </div>
                                    <div className='col-span-2' >
                                        <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Detailed Description <span className="text-red-500">*</span></label>
                                        <textarea name='detailed_description' className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" rows={3}></textarea>
                                        {/* <input type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required /> */}
                                    </div>
                                </div>

                                {/* create product button */}
                                <div className='flex justify-end' >
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 my-3">
                                        Create Product
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
            }
        </>
    )
}
