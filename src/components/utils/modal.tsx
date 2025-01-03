import { useRef, useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '../atoms/typography';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-10'>
      <div
        ref={modalRef}
        className='relative flex w-full max-w-xl flex-col gap-4 rounded-lg bg-white p-6 shadow-lg'
      >
        <div className='absolute right-5 z-50 cursor-pointer transition-all duration-300 hover:opacity-70'>
          <CancelIcon className='text-black' onClick={onClose} />
        </div>
        <div className='relative  flex w-full items-center justify-center px-5 md:px-0'>
          <Typography variant='h3' className='text-center font-medium'>
            {title}
          </Typography>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
