'use client';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const headerLinks = [
  { name: 'Teardrop', href: '/teardrop', icon: null },
  {
    name: 'Trotty',
    href: '/trotty',
    icon: null,
  },
];

const footerLinks = [
  { name: 'Teardrop', href: '/teardrop', icon: null },
  {
    name: 'Trotty',
    href: '/trotty',
    icon: null,
  },
  { name: 'Location', href: '/location', icon: null },
  { name: 'Contact', href: '/contact', icon: null },
];

const NavigationItem = ({
  name,
  link,
  color,
}: {
  name: string;
  link: string;
  color: 'black' | 'white';
}) => {
  const pathname = usePathname();
  const params = useParams();

  const [isActive, setIsActive] = useState(false);
  const [shotDot, setShowDot] = useState(false);

  useEffect(() => {
    const localePrefix = params.locale ? `/${params.locale}` : '';
    if (`${localePrefix}${link}` === pathname) {
      setIsActive(true);
      setShowDot(true);
    }
  }, [link, pathname, params.locale]);

  const onHover = () => {
    if (isActive) return;
    setShowDot(!shotDot);
  };

  return (
    <Link
      href={link}
      className='group relative'
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <h3 className={`font-kobe11 text-xl font-normal text-${color}`}>
        {name}
      </h3>
      <motion.div
        className={`absolute left-1/2 mt-1 h-[6px] w-[6px] -translate-x-1/2 transform rounded-full bg-${color}`}
        initial={{ opacity: 0, y: -5 }}
        animate={shotDot ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export default function Navigation({
  color,
  nav,
}: {
  color: 'black' | 'white';
  nav: 'header' | 'footer';
}) {
  const links = nav === 'header' ? headerLinks : footerLinks;

  return (
    <div className={`flex flex-col items-center gap-4 md:flex-row md:gap-8`}>
      {links.map((link) => {
        return (
          <NavigationItem
            key={link.href}
            link={link.href}
            name={link.name}
            color={color}
          />
        );
      })}
    </div>
  );
}