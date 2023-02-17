import React from 'react';

type Props = {
  avatar: string;
  name: string;
  testimonial: string;
};

export default function Testimonial({ avatar, name, testimonial }: Props) {
  return (
    <div className='bg-magenta-dark rounded-lg px-8 py-10 mob:first:-mt-5 mob:first:mb-5 mob:last:-mb-5 mob:last:mt-5'>
      <div className='flex gap-6 mb-5 items-center'>
        <img className='rounded-full w-10 h-10' src={avatar} alt={name} />
        <div className='flex flex-col'>
          <h2 className='text-white-custom font-bold'>{name}</h2>
          <p className='text-pink-soft'>Verified Buyer</p>
        </div>
      </div>
      <p className='text-white-custom'>{testimonial}</p>
    </div>
  );
}
