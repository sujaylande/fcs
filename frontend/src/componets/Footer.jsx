import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row mb-0 px-10 mt-4 py-4 bg-[#000000]">
      <nav className="flex flex-row justify-between gap-7 text-[#f3f3f3] font-medium">
        <div className="">
          <a href="#">Today's Status</a>
        </div>
        <div className="flex gap-10">
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