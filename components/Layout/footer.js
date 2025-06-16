"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-black">
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <div
            onClick={scrollToTop}
            className="inline-block rounded-full bg-[#FFF44F] p-2 text-black shadow transition hover:brightness-75 cursor-pointer sm:p-3 lg:p-4"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-[#FFF44F] lg:justify-start">
              <Image
                src="/logo.webp" // path relative to the public folder
                alt="Description of the image"
                width={150} // adjust to your desired size
                height={150} // adjust to your desired size
              />
            </div>

            <p
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-100 lg:text-left"
            >
              Spirit War || Discover inspiring stories, helpful tips, and thought-provoking ideas from a variety of topics.
            </p>
          </div>

          <ul
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
          >
            <li>
              <Link className="text-gray-200 transition hover:text-white" href={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link className="text-gray-200 transition hover:text-white" href={"/"}>
                About
              </Link>
            </li>

            <li>
              <Link className="text-gray-200 transition hover:text-white" href={"/blogs"}>
                Blogs
              </Link>
            </li>

            <li>
              <Link className="text-gray-200 transition hover:text-white" href="/accounts">
                My Account
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-400 lg:text-right">
          Copyright &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer