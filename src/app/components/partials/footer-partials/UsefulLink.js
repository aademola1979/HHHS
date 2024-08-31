"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { textVariant } from '@/app/utils/motion';

const UsefulLink = () => {
  return (
      <motion.div
      variants={textVariant(0.3)} className='flex-1 min-w-fit grid'>
          <div>
              <h3 className='gradient-text p'>Useful Links :</h3>
              <ul className='mt-2 grid gap-2 container text-[.9rem]'>
                  <li><Link href='/about'>About Us</Link></li>
                  <li><Link href='/admission'>Admission Info</Link></li>
                  <li><Link href='/application'>Apply Online</Link></li>
                  <li><Link href='/inquiry'>Inquiry</Link></li>
                  <li><Link href='/generalFaqs'>FAQs</Link></li>

                  <li><Link href='/employment'>Employment</Link></li>
              </ul>
          </div>
      </motion.div>
  )
}

export default UsefulLink