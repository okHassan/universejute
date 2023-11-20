import React from 'react'

const ContactF = () => {
    return (
        <section class="bg-white">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                {/* <h1 className='product-heading pb-16'>Contact US</h1> */}
                <form action="#" class="space-y-8">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" required />
                    </div>
                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Your Company Name</label>
                        <input type="text" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="universejute" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                        <input type="number" id="number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="012345678" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">The Demand / Question</label>
                        <textarea id="message" rows="6" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit outline-none bg-slate-700">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactF