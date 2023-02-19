import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex justify-between  p-8">
        <Link to='/' className="text-[#000000] text-[22px]">Tezgo drains</Link>
        <div className="flex gap-12 items-center text-[#003060] text-[20px] font-[600]">
          <a className="flex gap-2" href="tel:9988 999 0077">
            <i className="ri-phone-fill"></i>
            9988 999 0077
          </a>
          <a
            href="tel:9988 999 0077"
            className="rounded flex items-center justify-center bg-[#003060] text-[18px] text-white w-[180px] h-[40px]"
          >
            Contact Us
          </a>
        </div>
      </nav>
      <div className="menu flex items-center justify-around bg-[#003060] h-[70px]">
          <Link to='/' onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'active' : 'item'}>HOME</Link>
          <Link to='/survey' onClick={() => handleItemClick('survey')} className={activeItem === 'survey' ? 'active' : 'item'}>CCTV DRAIN SURVEY</Link>
          <Link to='/services' onClick={() => handleItemClick('services')} className={activeItem === 'services' ? 'active' : 'item'}>DRAINAGE SERVICES</Link>
          <Link to='/area' onClick={() => handleItemClick('area')} className={activeItem === 'area' ? 'active' : 'item'}>SERVICE AREA</Link>
          <Link to='/unblocking' onClick={() => handleItemClick('unblock')} className={activeItem === 'unblock' ? 'active' : 'item'}>UNBLOCKING SERVICE</Link>
          <Link to='/about' onClick={() => handleItemClick('about')} className={activeItem === 'about' ? 'active' : 'item'}>ABOUT US</Link>
      </div>
    </div>
  );
}

export default Navbar;
