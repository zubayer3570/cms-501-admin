import BreadCrumb from '@/components/shared/BreadCrumb'
import React from 'react'

export default function UpdateProduct() {
    const title = "Admin"
    const pageTitle = "Create Product"

    const updateProduct = (e: any) => {
        e.preventDefault()

        const name = e.target.name.value
        const description = e.target.description.value
        const price = e.target.price.value
        const category = e.target.category.value
        const framework = e.target.framework.value
        const demoURL = e.target.demoURL.value
        const author = e.target.author.value
        const version = e.target.version.value
        const tags = e.target.tags.value.split(", ")

        const data = {
            name,
            description,
            price,
            category,
            framework,
            demoURL,
            author,
            version,
            tags
        }

        console.log(data)
    }
    return (
        <>
            <BreadCrumb title={title} pageTitle={pageTitle} />
            <div className="card">
                <div className="card-body">
                    <form onSubmit={updateProduct} >
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
                                <input name='price' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
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
                                <input name='demoURL' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
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
                        <div className='flex justify-end' >
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 my-3">
                                update Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
