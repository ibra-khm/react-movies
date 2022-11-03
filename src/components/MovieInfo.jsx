import React from 'react'
import { Card } from 'flowbite-react'
import { useParams } from 'react-router-dom'

export default function MovieInfo({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => id == m.id);
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (

    <>
      <div className='min-h-screen' style={{ backgroundImage: `url(${IMGPATH + movie.backdrop_path})`, backgroundRepeat: 'no-repeat center center cover', backgroundSize: 'cover', WebkitBackgroundSize: 'cover' }}>
        {/* <Card className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'> */}

        <div className="max-w-lg">
          <Card
            horizontal={true}
            imgSrc={IMGPATH + movie.poster_path} style={{ backgroundColor: '#010048' }}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            {movie.title}
          </h5>
          <p className="font-normal text-gray-300 dark:text-gray-400">
            {movie.overview}
          </p>
          </Card>
        </div>
      </div>

    </>
  )
}
