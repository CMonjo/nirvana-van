'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useCallback, useRef } from 'react';

export default function Configurator() {
  const sliderRef = useRef(null) as any;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <div className='sticky top-40 z-30 mx-auto -mb-40 h-0 max-w-screen-2xl px-10'>
        <div className='relative h-[540px] w-[calc(100%-496px)] overflow-hidden rounded-2xl bg-fg-3'>
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            navigation={false}
            pagination={{ type: 'bullets', clickable: true }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide className='h-full w-full'>
              <img
                src='/tototte-1-1.png'
                alt='tototte'
                className='aspect-video h-full w-full object-cover'
              />
            </SwiperSlide>
            <SwiperSlide className='h-full w-full'>
              <img
                src='/tototte-1-2.png'
                alt='tototte'
                className='aspect-video h-full w-full object-cover'
              />
            </SwiperSlide>
            <SwiperSlide className='h-full w-full'>
              <img
                src='/tototte-1-3.png'
                alt='tototte'
                className='aspect-video h-full w-full object-cover'
              />
            </SwiperSlide>
          </Swiper>
          <div className='absolute top-1/2 z-30 flex w-full -translate-y-1/2 items-center justify-between p-4'>
            <button onClick={handlePrev}>
              <img
                src='/arrow-left.svg'
                alt='arrow-left'
                className='rotate-180'
              />
            </button>
            <button onClick={handleNext}>
              <img src='/arrow-right.svg' alt='arrow-right' />
            </button>
          </div>
        </div>
      </div>
      <div id='choice' className='flex w-full items-center justify-center'>
        <div className='flex w-full max-w-screen-2xl items-center justify-center gap-24 px-10 py-40'>
          <div className='flex w-full items-center justify-end'>
            <div className='flex w-[392px] flex-col items-center justify-center gap-16'>
              <div className='flex w-full flex-col items-start gap-2'>
                <h3 className='text-6xl text-fg-1'>
                  personnalisez votre tototte
                </h3>
                <p className='font-gustavo text-base text-fg-3'>
                  Vous allez créer la tototte idéale pour vous. <br />À chacun
                  son expérience, à chacun sa tototte.
                </p>
              </div>
              <div className='flex w-full flex-col items-start gap-3'>
                <div className='flex w-full flex-col items-start gap-2'>
                  <h3 className='text-4xl text-fg-1'>finition</h3>
                  <p className='font-gustavo text-base text-fg-3'>
                    Choisissez votre favorite
                  </p>
                </div>
                <div className='flex w-full items-center justify-start gap-2'>
                  <div className='flex cursor-pointer items-center justify-center rounded-full border-2 border-fg-1'>
                    <img src='/finition-1.svg' alt='finition' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/finition-2.svg' alt='finition' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/finition-3.svg' alt='finition' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/finition-4.svg' alt='finition' />
                  </div>
                </div>
              </div>
              <div className='flex w-full flex-col items-start gap-3'>
                <div className='flex w-full flex-col items-start gap-2'>
                  <h3 className='text-4xl text-fg-1'>ornement</h3>
                  <p className='font-gustavo text-base text-fg-3'>
                    Choisissez votre pierre précieuse
                  </p>
                </div>
                <div className='flex w-full items-center justify-start gap-2'>
                  <div className='flex cursor-pointer items-center justify-center rounded-full border-2 border-fg-1'>
                    <img src='/ornement-1.svg' alt='ornement' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/ornement-2.svg' alt='ornement' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/ornement-3.svg' alt='ornement' />
                  </div>
                  <div className='flex cursor-not-allowed items-center justify-center rounded-full border-2 border-transparent'>
                    <img src='/ornement-4.svg' alt='ornement' />
                  </div>
                </div>
              </div>
              <div className='flex w-full flex-col items-start gap-4'>
                <div className='flex w-full flex-col items-start gap-2'>
                  <h3 className='text-4xl text-fg-1'>pack saveur</h3>
                  <p className='font-gustavo text-base text-fg-3'>
                    Choisissez votre pack de saveurs
                  </p>
                </div>
                <div className='flex w-full flex-col items-center gap-1 font-gustavo text-fg-1'>
                  <div className='flex w-full cursor-pointer items-center justify-between border border-fg-1 p-4 transition-colors hover:bg-bg-2'>
                    <div className='flex flex-col items-start'>
                      <span className='text-xl font-bold'>Pack Starter</span>
                      <span className='text-base'>3 saveurs de découverte</span>
                    </div>
                    <span className='block'>Offert</span>
                  </div>
                  <div className='flex w-full cursor-pointer items-center justify-between border border-transparent p-4 transition-colors hover:bg-bg-2'>
                    <div className='flex flex-col items-start'>
                      <span className='text-xl font-bold'>Pack Suçoteur</span>
                      <span className='text-base'>6 saveurs</span>
                    </div>
                    <span className='block'>29€</span>
                  </div>
                  <div className='flex w-full cursor-pointer items-center justify-between border border-transparent p-4 transition-colors hover:bg-bg-2'>
                    <div className='flex flex-col items-start'>
                      <span className='text-xl font-bold'>
                        Pack Suçoteur Pro
                      </span>
                      <span className='text-base'>
                        12 saveurs + 1 jus de Mynthos
                      </span>
                    </div>
                    <span className='block'>
                      <span className='line-through'>60€</span> 49€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
