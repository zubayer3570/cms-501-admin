import BreadCrumb from '@/components/shared/BreadCrumb'
import React from 'react'

export default function page() {
    const title = "Admin"
    const pageTitle = "Update User"

    const updateUser = (e: any) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const address = e.target.address.value
        const phone = e.target.phone.value
        const nationality = e.target.nationality.value
        const city = e.target.city.value
        const state = e.target.state.value
        const country = e.target.country.values

        const data = {
            name,
            email,
            password,
            address,
            phone,
            nationality,
            city,
            state,
            country
        }

        console.log(data)
    }



    return (
        <>
            <BreadCrumb title={title} pageTitle={pageTitle} />
            <div className="card">
                <div className="card-body">
                    <form onSubmit={updateUser} >
                        <div className="grid grid-cols-2 gap-6">
                            <div className='col-span-2'>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Name <span className="text-red-500">*</span></label>
                                <input name='name' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Email <span className="text-red-500">*</span></label>
                                <input name='email' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Password <span className="text-red-500">*</span></label>
                                <input name='password' type="password" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Address <span className="text-red-500">*</span></label>
                                <input name='address' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Phone <span className="text-red-500">*</span></label>
                                <input name='phone' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Nationality <span className="text-red-500">*</span></label>
                                <input name='nationality' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">City <span className="text-red-500">*</span></label>
                                <input name='city' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">State <span className="text-red-500">*</span> (Ex: abc, def, hij...)</label>
                                <input name='state' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <div>
                                <label htmlFor="inputText" className="inline-block mb-2 text-base font-medium">Country <span className="text-red-500">*</span> (Ex: abc, def, hij...)</label>
                                <input name='country' type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                        </div>
                        <div className='flex justify-end' >
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 my-3">
                                Update User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
