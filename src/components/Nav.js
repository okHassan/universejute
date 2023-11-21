import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaBarsStaggered } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";


const Nav = () => {

    const location = useLocation();

    const { pathname } = location;

    const [show, setShow] = useState(false)

    const resnav = (e) => {
        e.preventDefault()

        setShow(!show)

    }

    useEffect(() => {
        setShow(false)
    }, [pathname])


    return (
        <div className='w-full h-[100px] bg-white'>
            <div className='container mx-auto h-full px-5'>
                <div className='h-full flex justify-between items-center'>
                    <div className='relative z-50 flex items-center gap-4'>
                        <img src='/logo.png' alt='Universe-Jute' className='w-14 h-14 bg-cover bg-center rounded-full rotatex' />
                        <p className='logo text-[18px] sm:text-[26px]'>Universe Jute Fiber and Bag Corporation</p>
                    </div>
                    <div className=''>
                        <ul className='hidden gap-12 lg:flex'>
                            <Link to='/' className={pathname === '/' ? 'text-[#001d89]' : 'text-black'}>Home</Link>
                            <Link to='/product' className={pathname === '/product' ? 'text-[#001d89]' : 'text-black'}>Products</Link>
                            <Link to='/contact' className={pathname === '/contact' ? 'text-[#001d89]' : 'text-black'}>Contact</Link>
                            <Link className='ml-24'><BiSearchAlt2 size={22} /></Link>
                        </ul>
                        <div className='cursor-pointer' onClick={resnav}>
                            {
                                show ? <RxCross2 size={32} color='#001d89' className='relative z-50 cursor-pointer block lg:hidden' />
                                    : <FaBarsStaggered size={32} color='#001d89' className='relative z-50 cursor-pointer block lg:hidden' />
                            }
                        </div>
                        {
                            show ? <div className='flex flex-col justify-center px-10 py-10 bg-white rounded gap-y-5 absolute z-50 shadow-xl right-6 top-20'>
                                <Link to='/' className={pathname === '/' ? 'text-[#001d89]' : 'text-black'}>Home</Link>
                                <Link to='/product' className={pathname === '/product' ? 'text-[#001d89]' : 'text-black'}>Products</Link>
                                <Link to='/contact' className={pathname === '/contact' ? 'text-[#001d89]' : 'text-black'}>Contact</Link>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav