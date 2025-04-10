import React, { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cover from './Cover';
import "./Cover.css";
function CoverSlider(props) {
    const { name } = props;
    const [coverList, setCoverList] = useState([])
    const api_Key = "bf17f531db8e09924517df7b48aa7cc2";
    const getmovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${api_Key}`)
            .then((res) => res.json())
            .then((data) => setCoverList(data.results))
            
    }
    useEffect(() => {
        getmovie()
    }, [])
    return (
        <div className='relative '>
            <Swiper
                modules={[Autoplay, Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                scrollbar={{ draggable: true }}
            >
                <div className='relative '>
                    {coverList.map((cover) =>
                        <div>
                            <SwiperSlide>
                                <Cover key={cover.id} cover={cover} />
                            </SwiperSlide>
                            ...
                        </div>
                    )}
                </div>
            </Swiper>
            
        </div>
        
    )
}

export default CoverSlider