import React from 'react'
import { FaLaptopFile } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion'

const Card = ({ data, reference}) => {
    return (
        <>
            <motion.div drag className='add relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900 text-white px-5 py-10 overflow-hidden' dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{bounceStiffness: 600, bounceDamping:10}}>
                <FaLaptopFile />
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
                <div className='footer absolute bottom-0  w-full  left-0'>
                    <div className='flex items-center justify-between px-8 py-3 mb-2'>
                        <h5>{data.filesize}</h5>
                        <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close ? <IoMdCloseCircleOutline /> : < MdFileDownload color='#fff' />}

                        </span>
                    </div>
                    {
                        data.tag.isOpen && (
                            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600"  : "bg-green-600"} flex items-center justify-center`}>
                                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                            </div>
                        )
                    }

                </div>
                
            </motion.div>
        </>
    )
}

export default Card
