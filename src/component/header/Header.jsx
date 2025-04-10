import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Button from '../Button'
import axios from 'axios';
function Header() {
    const API_URL = "https://api.themoviedb.org/3"
    const srchMovie = async (searchKey) => {
        const {data: {results}} = await axios.get(`${API_URL}/search/movie` , {
            params: {
                query: searchKey,
                api_key: "bf17f531db8e09924517df7b48aa7cc2"
            }
        })
        searchM(results)
      }
      const [searchKey, setSearchKey] = useState("")
      const searchM = (e) => {
        
        srchMovie(searchKey)
    }
      console.log(srchMovie)


    const [mobile, setMobile] = useState(false)
    const handleNav = () => {
        setMobile(!mobile)
    }

    return (
        <>
            <header className='h-[10vh] leading-[3vh] relative z-[999] text-white'>
                <div className='max-w-[90%] m-auto flex justify-between items-center flexSB'>
                    <nav className='flex justify-between items-center flexSB'>
                        <div className='w-[150px] mr-[30px]'>
                            <img src="src/assets/gg.png" className='w-[150px] mr-[30px]' />
                        </div>
                        <ul className={mobile ? "navMenu" : "flex justify-between items-center flexSB"} onClick={() => setMobile(false)}>
                            <Link to='/' className='hover:text-[#e50813]'>Home</Link>
                            <Link to='/movies' className='hover:text-[#e50813]'>Movies</Link>
                            <Link to='/series' className='hover:text-[#e50813]'>Series</Link>
                            <Link to='/geners' className='hover:text-[#e50813]'>Geners</Link>
                            <Link to='/contact' className='hover:text-[#e50813]'>Contact</Link>
                        </ul>
                        <button className='bg-[#e50813] outline-none border-none text-[#fff] py-[12px] px-[33px] text-[16px] rounded-xl font-bold toggle' onClick={() => handleNav()}>
                            {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>

                    </nav>
                    <div className='flex justify-between items-center flexSB acc'>
                        {/* <button className='mr-2'>
                        <i className='fa fa-search acc'></i>
                        </button> */}
                        <div className='boxx h-[40px]  flex cursor-pointer px-[20px] py-[10px]  rounded-3xl items-center'>
                            <form onSubmit={searchM}>
                                <input type="text" placeholder='Serach...' onChange={(e) => setSearchKey(e.target.value)}
                                    className='w-0 outline-none border-none font-medium bg-transparent' />
                                <button type='submit'>
                                    <i className='fa fa-search text-[#fff] text-[18px] srchI'></i>
                                </button>
                            </form>
                        </div>

                        <div className='acc'>
                            <Button label={"Favorites"}></Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header