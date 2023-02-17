import React from 'react';
import StarIcon from '../assets/icon-star.svg';

type Props = {
  source: string;
  rating: number;
};

export default function Rating({ source, rating }: Props) {
  return (
    <div className='mob:first:-ml-10 mob:first:mr-10 mob:last:-mr-10 mob:last:ml-10  flex flex-col items-center justify-center bg-gray-magenta-light rounded-xl p-4 mb-4'>
      <div className='flex gap-2 mb-2'>
        {[...Array(rating)].map((e, i) => (
          <span>
            <img src={StarIcon} alt='' />
          </span>
        ))}
      </div>
      <p className='font-bold text-magenta-dark'>Rated 5 Stars in {source}</p>
    </div>
  );
}
