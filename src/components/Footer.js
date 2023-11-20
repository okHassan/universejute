import React from 'react'
import { icon } from '../api'

const Footer = () => {
    return (
        <React.Fragment>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src='/logo.png' alt='Universe-Jute' className='w-10 h-10 bg-cover bg-center rounded-full rotatex' />

                        <span class="ml-3 text-xl">UniverseJute</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 UniverseJute —
                        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@universejute</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <div className='flex justify-center gap-10 flex-wrap'>
                            {
                                icon.map((item) => (
                                    <div key={item.id} className='flex justify-center items-center'>
                                        <a href={item.link} target='_blank'>{item.icons}</a>
                                    </div>
                                ))
                            }
                        </div>

                    </span>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer