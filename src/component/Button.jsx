import React from 'react'

function Button(props) {
  return (
    <>
    <button className='bg-[#e50813] outline-none border-none text-[#fff] py-[10px] px-[40px] text-[16px] rounded-xl font-bold hover:text-[#e50813] hover:bg-[#fff]' >
        {props.label}
    </button>
    </>
  )
}

export default Button