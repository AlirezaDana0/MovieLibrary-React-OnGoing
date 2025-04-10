
import CoverSlider from "./coverSlider/CoverSlider";
import MovieSlider from "./movieSlider/MovieSlider";

export default function Home() {

  return (
    <>
      <div className="home absolute top-0 left-0 h-[100vh] w-full text-[#fff]">
        <CoverSlider name={"top_rated"} />
        <MovieSlider title={"tv/top_rated"} heading={"Top Rated Series"}/>
        <MovieSlider title={"movie/upcoming"} heading={"Upcoming Movies"}/>
        <MovieSlider title={"movie/now_playing"} heading={"Now Playing"} />
        <MovieSlider title={"tv/on_the_air"} heading={"On The Air"} />
        
      </div>
    </>
  )
}
