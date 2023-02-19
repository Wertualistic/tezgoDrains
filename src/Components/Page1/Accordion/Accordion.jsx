import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Accordion({title, info}) {
    const [quest, setQuestion] = useState(false)
    
    let className = 'accordion text-[20px] text-[#003060] font-[700]'

    if(quest){
        className += ' classActive'
    }
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mt-[13px]">
          <div className="w-[1200px] shadow-md">
            <div className="flex flex-col bg-white p-[15px] rounded-md">
              <div className="flex justify-between">
                <h1 className={className}>{title}</h1>
                <button onClick={() => setQuestion(!quest)} className={className}>
                {quest ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>
              <div className="text-start info">
                {quest && info}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Accordion;
