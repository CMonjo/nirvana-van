import React from 'react';

export default function Bento() {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <div className='flex w-full max-w-screen-2xl items-center justify-center px-10 pb-20 pt-40'>
        <div className='bento h-[926px] w-[976px]'>
          <div className='bento-item'>
            <img
              src='/bento-bg-a.png'
              alt='bento'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <img
              src='/bento-a.png'
              alt='bento'
              className='bento-item-a-image absolute -left-40 top-40 scale-[1.6] object-cover'
            />
            <div className='z-10 flex w-full flex-col items-start gap-2 self-end'>
              <h3 className='text-3xl text-fg-1'>elegante et sophistiquee</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Design raffine et ornements exclusifs pour une experience de
                vapotage distinguee et elegante
              </p>
            </div>
          </div>
          <div className='bento-item justify-end'>
            <img
              src='/bento-b.png'
              alt='bento'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='z-10 flex w-[320px] flex-col items-start gap-2 self-center'>
              <h3 className='text-3xl text-fg-1'>personnalisable</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Ornements et accessoires premium pour creer une vapoteuse unique
                qui reflète votre style personnel
              </p>
            </div>
          </div>
          <div className='bento-item'>
            <img
              src='/bento-bg-c.png'
              alt='bento'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <img
              src='/bento-c.png'
              alt='bento'
              className='bento-item-c-image absolute left-1/2 top-10 -translate-x-1/2 object-cover'
            />
            <div className='z-10 flex w-full flex-col items-start gap-2 self-end'>
              <h3 className='text-3xl text-fg-1'>made in france</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Savoir-faire français pour une experience de suçotage
                authentique et exceptionnelle
              </p>
            </div>
          </div>
          <div className='bento-item bg-white'>
            <img
              src='/bento-bg-d.png'
              alt='bento'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <img
              src='/bento-d.png'
              alt='bento'
              className='bento-item-d-image absolute -bottom-12 -right-16 object-cover'
            />
            <div className='z-10 flex w-full flex-col items-start gap-2'>
              <h3 className='text-3xl text-fg-1'>innovante</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Technologies de pointe offrant une experience de suçotage
                revolutionnaire et inegalee.
              </p>
            </div>
          </div>
          <div className='bento-item bg-[#EFF2FD]'>
            <img
              src='/bento-e.png'
              alt='bento'
              className='absolute inset-0 mt-16 h-full w-full object-cover'
            />
            <div className='z-10 flex w-full flex-col items-start gap-2'>
              <h3 className='text-3xl text-fg-1'>savoureuse</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Palette de saveurs exquises pour une experience de suçotage
                delicieusement satisfaisante et immersive.
              </p>
            </div>
          </div>
          <div className='bento-item flex-col justify-between bg-bg-3 transition-colors duration-300 hover:bg-white'>
            <img src='/france-flag.svg' alt='france flag' className='w-10' />
            <div className='flex w-full flex-col items-start gap-2'>
              <h3 className='text-3xl text-fg-1'>hebergement 100% français</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Notre site web est heberge en france grâce à notre partenaire
                o2switch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
