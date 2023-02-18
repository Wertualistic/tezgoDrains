import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-8">
      <h1 className="text-[#000000] text-[20px]">Tezgo drains</h1>
      <div className="flex gap-8 items-center text-[#003060] text-[17px]">
        <a className="flex gap-2" href="tel:9988 999 0077">
          <i class="ri-phone-fill"></i>
          9988 999 0077
        </a>
        <a href="tel:9988 999 0077" className="rounded flex items-center justify-center bg-[#003060] text-white w-32 h-9">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;
