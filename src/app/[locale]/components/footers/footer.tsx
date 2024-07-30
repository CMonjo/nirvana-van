import {
  Github,
  Instagram,
  Linkedin,
  Store,
  Twitter,
  Youtube,
} from 'lucide-react';
import React from 'react';
import Button from '../atoms/button';

export default function Footer() {
  return (
    <footer className='relative flex w-full items-center justify-center bg-fg-1'>
      <div className='z-20 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-40 px-10 py-14'>
        <div className='flex w-full items-center justify-end'>
          <div className='flex w-[392px] flex-col items-center justify-center gap-12'>
            <div className='flex w-full flex-col items-start gap-4'>
              <h3 className='text-4xl text-white'>votre panier est pret</h3>
              <p className='font-gustavo text-base text-fg-3'>
                Récapitulatif de votre commande
              </p>
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-4 font-gustavo text-base text-white'>
              <div className='flex w-full items-center justify-between'>
                <span>1 x thefrenchtototte</span>
                <span>99,00 €</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span>1 x Pack Suçoteur Pro</span>
                <span>49,00 €</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span>Livraison</span>
                <span>Offerte</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span>Prix</span>
                <span>148,00 €</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span>Retrait en magasin</span>
                <span>Tototte Store Lille</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span>Commandez avant 17h</span>
                <span className='flex'>
                  Livrer à 59000
                  <Store size={18} className='ml-2' />
                </span>
              </div>
            </div>
            <div className='flex w-full flex-col items-center gap-4'>
              <Button
                // href='https://lndev.me'
                className='w-full text-center text-[15px]'
              >
                Ajouter au Panier
              </Button>
              <p className='text-justify font-gustavo text-xxs text-fg-3'>
                The French Tototte est couverte par une garantie limitée contre
                les défauts de fabrication pour une période de 2 mois à compter
                de la date d&apos;achat. Cette garantie ne couvre pas les
                dommages causés par une mauvaise utilisation, une négligence ou
                une modification non autorisée du produit. Dans les limites
                permises par la loi, thefrenchtototte décline toute
                responsabilité pour les dommages directs, indirects, spéciaux,
                accidentels ou consécutifs découlant de l&apos;utilisation ou de
                l&apos;incapacité d&apos;utiliser thefrenchtototte, même si
                thefrenchtototte a été informée de la possibilité de tels
                dommages. En utilisant thefrenchtototte, l&apos;utilisateur
                consent à la collecte et à l&apos;utilisation de ses données
                conformément à la politique de confidentialité de
                thefrenchtototte. Les informations collectées peuvent inclure,
                mais ne sont pas limitées à, des données d&apos;utilisation, des
                informations de localisation et des données personnelles, telles
                que définies dans ladite politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <div className='flex items-center gap-2 text-fg-3'>
            <a
              href='https://github.com/ln-dev7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github />
            </a>
            <a
              href='http://x.com/ln_dev7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter />
            </a>
            <a
              href='http://linkedin.com/in/lndev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin />
            </a>
            <a
              href='http://instagra.com/ln_dev7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram />
            </a>
            <a
              href='http://youtube.com/c/LNDev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Youtube />
            </a>
          </div>
          <div className='flex w-full items-center gap-4'>
            <h3 className='shrink-0 text-4xl text-fg-3'>
              the french tototte &copy;
            </h3>
            <div className='flex w-full flex-col items-start gap-0 font-gustavo text-xs text-fg-3'>
              <p>
                Copyright © 2024 TheFrenchTototte. Tous droits réservés —
                Utilisation des cookies — Mention légales.
              </p>
              <p>
                Sur une idée originale d’Antoine Daniel, concept art par Tera
                Silver, 3D par Aurélien Thomas, logo par Baloprisonnier, 3D
                print par Lunath & Packaging par Illusion
              </p>
            </div>
            <a
              href='http://github.com/n-dev7/the-french-tototte'
              className='text-white underline underline-offset-2'
              target='_blank'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <img
        src='/icon-big.svg'
        alt='logo'
        className='absolute bottom-0 left-0 w-96'
      />
    </footer>
  );
}
