import { Twitch, Youtube } from 'lucide-react';
import React from 'react';
import Lines from './atoms/lines';

export default function Testimonials() {
  return (
    <div className='gradient-testimonials relative flex w-full items-center justify-center '>
      <Lines />
      <div className='z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-52 px-10 pb-44 pt-20'>
        <div className='flex flex-col items-center'>
          <h3 className='text-center text-6xl'>
            ils ont sucote, <br />
            ils ont adore
          </h3>
          <p className='mt-2 w-[450px] text-center font-gustavo text-fg-3'>
            Nos totottes sont utilisées par les plus grands de ce monde et si
            vous voulez mon avis ce n’est pas un hasard
          </p>
        </div>
        <div className='flex w-full items-center justify-between gap-20'>
          <div className='flex h-[600px] w-full items-center justify-center'>
            <div className='flex w-full flex-col items-start gap-4'>
              <div className='flex h-44 w-44 items-center justify-center overflow-hidden rounded-full'>
                <img
                  src='/testimonial-1.png'
                  alt='testimonial'
                  className='h-full w-full'
                />
              </div>
              <div className='flex flex-col items-start gap-2 text-fg-1'>
                <h4 className='text-xl'>/Baghera Jones</h4>
                <div className='flex items-center justify-start gap-2 font-gustavo'>
                  <Twitch size={20} />
                  <span className='font-medium'>Streamer</span>
                </div>
              </div>
              <p className='font-gustavo text-fg-3'>
                J’ai arrêté de vape depuis que j’ai découvert{' '}
                <span className='font-tartuffo text-fg-1'>
                  the french tototte®
                </span>
              </p>
            </div>
          </div>
          <div className='flex h-[600px] w-full items-end justify-center'>
            <div className='flex w-full flex-col items-start gap-4'>
              <div className='flex h-44 w-44 items-center justify-center overflow-hidden rounded-full'>
                <img
                  src='/testimonial-2.png'
                  alt='testimonial'
                  className='h-full w-full'
                />
              </div>
              <div className='flex flex-col items-start gap-2 text-fg-1'>
                <h4 className='text-xl'>/Joueur_du_Grenier</h4>
                <div className='flex items-center justify-start gap-2 font-gustavo'>
                  <Youtube size={20} />
                  <span className='font-medium'>Youtuber</span>
                </div>
              </div>
              <p className='font-gustavo text-fg-3'>
                J’ai commandé un pack pour toute la famille et même mon fils
                Légolas San Goku adore sa{' '}
                <span className='font-tartuffo text-fg-1'>
                  the french tototte®
                </span>
              </p>
            </div>
          </div>
          <div className='flex h-[600px] w-full items-start justify-center'>
            <div className='flex w-full flex-col items-start gap-4'>
              <div className='flex h-44 w-44 items-center justify-center overflow-hidden rounded-full'>
                <img
                  src='/testimonial-3.png'
                  alt='testimonial'
                  className='h-full w-full'
                />
              </div>
              <div className='flex flex-col items-start gap-2 text-fg-1'>
                <h4 className='text-xl'>/Etoiles</h4>
                <div className='flex items-center justify-start gap-2 font-gustavo'>
                  <Twitch size={20} />
                  <span className='font-medium'>Streamer</span>
                </div>
              </div>
              <p className='font-gustavo text-fg-3'>
                Grâce à{' '}
                <span className='font-tartuffo text-fg-1'>
                  the french tototte®
                </span>{' '}
                je régule mon taux d’insuline parfaitement et je n’achète plus
                de saumon ni de nutella !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
