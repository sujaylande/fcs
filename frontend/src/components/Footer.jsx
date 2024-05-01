import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row fixed bottom-0 w-full  px-10 mt-8 py-4 bg-[#000000]">
      <nav className="flex flex-row justify-between gap-5 items-center text-white">
        <div>
          <a href="#">Today&lsquo;s Count</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="bg-[#888888] text-[#000] p-1 px-3 rounded-md">
            New Order - #26
          </a>
          <a href="#" className="bg-[#888888] text-[#000] p-1 px-3 rounded-md">
            Pending Order - #26
          </a>
          <a href="#" className="bg-[#888888] text-[#000] p-1 px-3 rounded-md">
            Delivered Order - #26
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;