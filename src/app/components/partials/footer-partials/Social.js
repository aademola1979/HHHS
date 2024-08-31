"use client"
import { socialMediaIcons } from "../../../../../public/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";

const Social = () => {
  return (
      <motion.div
      variants={textVariant(0.4)}
       className='flex-1 min-w-fit grid gap-1'>
          <div>
              <h3 className="gradient-text p">Find DWISS on Socail Media :</h3>
              <ul className='flex gap-4 mt-2 container'>
                  {
                      socialMediaIcons.map((icon, i) => (
                          <li key={i}>
                              <Link href={icon.path} className="">
                                  {icon.icon}
                              </Link>
                          </li>
                      ))
                  }

              </ul>
          </div>
      </motion.div>
  )
}

export default Social