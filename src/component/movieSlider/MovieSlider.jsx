import React, { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./MovieCard.css"
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function MovieSlider(props) {
  const { title, heading } = props;
  const [movieList, setMovieList] = useState([])
  const api_Key = "bf17f531db8e09924517df7b48aa7cc2";
  const getmovie = () => {
    fetch(`https://api.themoviedb.org/3/${title}?api_key=${api_Key}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
  }

  useEffect(() => {
    getmovie()
  }, [])

  return (


    <section className='max-w-[1500px] w-[90%] my-6 mx-auto'>
      <div>
        <div>
          <div className='flex justify-between font-medium mb-4 mx-2 mt-[50px] text-[17px]'>
            <h1 className='cursor-default'>{heading}</h1>
            <Link to={'/'} className='text-[#e50813] hover:text-[#fff]'>View All</Link>
          </div>
        </div>
        <div className='w-full max-w-[1500px] p-2 mx-auto rounded-xl'>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            
            scrollbar={{ draggable: true }}
          >
            {movieList.map((movie) =>
              <>
                <SwiperSlide>
                  <MovieCard
                    key={movie.id}
                    movie={movie} />
                </SwiperSlide>
                ...
              </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default MovieSlider