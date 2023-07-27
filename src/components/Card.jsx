import React from 'react'
import { motion } from "framer-motion"


export const Card = () => {
  return (
    <motion.div className='w-20 h-96 bg-fuchsia-400' initial={{opacity: 0}} whileInView={{opacity: 1}} whileHover={{scale: 1.2}}>Card</motion.div>
  )
}
