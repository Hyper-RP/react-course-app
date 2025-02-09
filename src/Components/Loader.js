import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div className="loader mt-[5rem] w-[5rem] h-[5rem]"></div>
      <p className=' p-[1rem] text-[1.3rem] font-[600] text-[#ffffff]'>Thamb...! Thoda Time ....</p>
    </div>
  )
}

export default Loader
