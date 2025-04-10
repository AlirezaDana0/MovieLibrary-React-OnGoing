import React from 'react'
import "./MovieCard.css"
function MovieCard(props) {
    const { movie } = props;
    return (
        <div>
            <div className='w-full h-[320px] flex overflow-hidden relative box cursor-pointer'>
                <img className='w-full h-full object-cover object-center' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                <div className='flex flex-col items-center justify-center p-1 py-2 absolute bottom-0 left-2'>
                    <h2 className='text-white text-[1.2rem] tracking-[0.3px] font-semibold'>
                        {movie.original_title} {movie.original_name}
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default MovieCard