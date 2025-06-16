"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { UserButton } from '@clerk/nextjs';

const Header = () => {


  return (
    <header className="bg-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative text-[#FFF44F] flex items-center justify-between">
          <Link href={'/'}>
            <Image
              src="/logo.webp" // path relative to the public folder
              alt="Description of the image"
              width={150} // adjust to your desired size
              height={150} // adjust to your desired size
            />
          </Link>
          {/* <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-white transition-all duration-300 uppercase">
              War
            </span>
          </a> */}
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-white"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-white"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="items-center hidden space-x-6 lg:flex">
            <UserButton />
            <Link href="/new">
              <button type="button" className="px-8 py-3 font-semibold inline-flex items-center gap-2 rounded-full bg-gray-100 text-black">
                <span>
                  Create
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </Link>
          </ul>
          <div className="lg:hidden">
            <UserButton className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" />


            <div className="fixed lg:hidden bottom-0 left-0 z-50 rounded-tl-2xl rounded-tr-2xl w-full border-t b bg-gray-900 border-gray-800">
              <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link href="/">
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Home</span>
                  </button>
                </Link>
                <Link href="/blogs">
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                      <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                      <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                    </svg>
                    <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Blogs</span>
                  </button>
                </Link>
                <Link
                  href="/new"
                >
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>

                    <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Create</span>
                  </button>
                </Link>

                <Link
                  href="/account">
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2  text-gray-400 group-hover:text-[#FFF44F]">
                      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>

                    <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Profile</span>
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header