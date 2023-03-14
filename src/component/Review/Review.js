import React from 'react';
import useApi from '../../hooks/useApi';

const Review = () => {
    const [reviews] = useApi()
    return (
        <div className='flex justify-between pt-20 px-28'>
            {
                reviews.map(review => <div className='p-4 border-2 rounded-md bg-indigo-400'>
                    <p className='text-3xl'>{review.name}</p>
                    <p className='text-2xl text-white mt-4'>{review.ratings}</p>
                </div>)
            }
        </div>
    );
};

export default Review;