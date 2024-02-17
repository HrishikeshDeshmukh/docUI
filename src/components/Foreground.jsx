import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

    const data = [
        {
            desc: 'This is first card we had build',
            filesize: '.9mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'blue' }
        },
        {
            desc: 'This is first card we had build',
            filesize: '.9mb',
            close: false,
            tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' }
        },
        {
            desc: 'This is first card we had build',
            filesize: '.9mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' }
        }
    ]
    return (
        <>
            <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5' ref={ref}>
                {data.map((item, index)=>(
                    <Card data={item} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default Foreground
