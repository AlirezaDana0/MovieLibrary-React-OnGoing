import React from 'react'
import "./Cover.css";
import { Link } from 'react-router-dom';
function Cover(props) {
    const { cover } = props;
  
    return (
        <>
            <div className='cursor-default'>
                <div className='h-[100vh]'>
                    <div className='coverImage absolute w-full top-0 h-[100vh] z-[-2]'>
                        <img
                            className='w-[100vw] h-[100vh] object-cover object-center'
                            src={`https://image.tmdb.org/t/p/original${cover.backdrop_path}`} />
                    </div>

                    <div className='p-[100px] flex '>
                        <div className='  text-[16px] h-[100vh] w-[60%]'>
                            <h2 className='mt-[240px] text-[70px] font-extrabold h2c leading-[70px]'>{cover.title}</h2>
                            <div className='flex mt-5 ml-2'>
                                <h3 className='font-medium'>
                                    <label>Ratting: </label>
                                    {cover.vote_average}
                                </h3>
                                <h3 className='font-medium'>
                                    <label className='ml-8'>Vote Counts: </label>
                                    {cover.vote_count}
                                </h3>
                            </div>
                            <p className='font-semibold mt-4 text-[16px] ml-2 tracking-wider leading-7'>{cover.overview}</p>
                            <div className=' my-7 mx-0 ml-2'>
                                <h4 className='font-medium mb-2 text-[17px] '>
                                    <span className='p-1 text-[#e50813] font-bold'>
                                        Genres :
                                    </span>
                                </h4>
                            </div>
                            <button className='bg-[#e50813] ml-2 outline-none border-none flex justify-center items-center gap-2
                             text-[#fff] py-[12px] px-[22px] text-[16px] rounded-md font-bold
                             hover:bg-[#fff] hover:text-[#e50813]'>
                                <i className='fa fa-folder-open'></i>Movie Page
                            </button>
                        </div>

                        <div className='Plybtn h-[100vh] w-[40%] flex items-center justify-center'>
                            <Link to={"/"}></Link>
                            <button className='cursor-pointer p-0 m-0 bg-none flex items-center justify-center
                             text-[20px] font-medium tracking-[2px] duration-[0.5s]'>
                                <div className=' relative'>
                                    <img className='w-[90px] h-[90px] mr-5' src="src/assets/play-button.png" />
                                    <img className='w-[90px] h-[90px] mr-5 absolute top-0 left-0 opacity-0 chnge' src="src/assets/play.png" />
                                </div>
                                WATCH TRAILER
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cover