import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import watchImg from "../../Image/watch.jpeg"


const Home = () => {
    const [reviews] = useApi()

    return (
        <div>
            <div className='flex text-left mt-12'>
                <div className='basis-2/3 py-10 pl-20'>
                    <h1 className='text-8xl font-bold'>Your next watch</h1>
                    <h1 className='text-8xl text-indigo-500 font-bold'>Your best watch</h1>
                    <p className='text-2xl text-gray-500 pt-6'>Repudiandae dolorum ex accusantium fugit ut distinctio doloribus quasi numquam aperiam minus sint, reiciendis exercitationem natus dolores minima.</p>
                    <button className='bg-indigo-100 py-6 px-10 text-2xl font-bold text-indigo-600 rounded-lg mt-10'>Live demo</button>
                </div>
                <div className='w-1/3'>
                    <img className='' src={watchImg} alt="" />
                </div>
            </div>
            <div className='mt-24'>
                <h1 className='text-4xl'>Review:({reviews.length})</h1>
                <div className='flex justify-between px-14 mt-24'>
                    {
                        reviews.map(review => <div className='border-2 rounded-md p-5 bg-indigo-400'> <p className='text-3xl mb-3 text-white'>{review.name} </p> <p className='text-2xl text-red-600'>{review.ratings}</p> </div>)
                    }
                </div>
                <Link to='/review'><button className='bg-indigo-400 rounded-md px-8 py-2 text-2xl my-24 text-white '>Go Review</button></Link>
            </div>
        </div>
    );
};

export default Home;