import React from 'react';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className='mob:text-left my-12 flex flex-col gap-5 justify-center text-center'>
      <h1 className=' mob:w-[50%] text-[2.5rem] leading-8 tracking-tight font-[700] mx-4 text-magenta-dark'>
        10,000+ of our users love our products.
      </h1>
      <p className='mob:w-[70%] text-lg mx-2 text-gray-magenta tracking-tight font-[500]'>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </div>
  );
}
