"use client"
import { staggerContainer, textVariant } from '@/app/utils/motion';
import Logo from '../../Logo';
import FooterContact from './FooterContact';
import Social from './Social';
import UsefulLink from './UsefulLink';

import { motion } from 'framer-motion';


function UpperFooter() {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
     className='text-white px-[2rem] sm:pl-[4rem] flex-wrap gap-6 flex min-w-full pt-4'>
      <motion.div
      variants={textVariant(0.2)} className='grid md:flex gap-2 min-w-[15rem] justify-center'>
        <Logo imageClassName='h-[3rem] w-[3rem] ' wrapperClassName=''/>
        <FooterContact />
      </motion.div>
      <UsefulLink/>
      <Social />
    </motion.div>
  )
}

export default UpperFooter