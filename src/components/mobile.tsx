import React from 'react';

export default function Mobile() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-center font-gustavo'>
          Hello l&apos;ami(e), j&apos;ai eu la flemme de faire la version
          mobile, mais t&apos;inquiète, ça va arriver un jour.
        </p>
        <p className='text-center font-gustavo'>
          Entre temps, tu peux toujours visiter le site sur un écran plus large
          😉
        </p>
        <p className='text-center font-gustavo'>
          Ou alors contribuer sur{' '}
          <a
            href='https://github.com/ln-dev7/the-french-tototte'
            className='font-bold underline underline-offset-2'
            target='_blank'
          >
            GitHub
          </a>{' '}
          pour m&apos;aider à le faire plus vite 😇
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <a
          href='https://x.com/ln_dev7'
          className='underline underline-offset-2'
          target='_blank'
        >
          Code By LN
        </a>
        <a
          href='https://www.youtube.com/c/BastiUI'
          className='underline underline-offset-2'
          target='_blank'
        >
          Design By BastiUI
        </a>
      </div>
      <a
        href='https://github.com/ln-dev7/the-french-tototte?tab=readme-ov-file#credits'
        className='absolute bottom-4 right-4 font-gustavo font-medium underline underline-offset-2'
        target='_blank'
      >
        Credits
      </a>
    </main>
  );
}
