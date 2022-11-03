import React from 'react'
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";


    return (
        <>
            <div className="max-w-sm flex flex-wrap items-center justify-center mx-auto">
                <Link to={`/movies/${props.movie.id}`}>
                    <Card className='border-none shadow-2xl w-64'
                        imgSrc={IMGPATH + props.movie.poster_path} style={{backgroundColor: '#010048'}}>
                        <h6 className="text-2xl place-self-center font-bold tracking-tight  text-gray-200 dark:text-white">
                            {props.movie.title}
                        </h6>
                        <Button className='bg-red-600  place-self-center w-32 hover:bg-red-700'>See Details</Button>
                    </Card>
                </Link>

            </div>
        </>

    )
}
