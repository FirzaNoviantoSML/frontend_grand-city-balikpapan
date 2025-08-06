import Image from 'next/image'
import React from 'react'

const FooterImageRibbon = () => {
  return (
    <div>
        <div className="relative w-ful h-[40vh] md:h-[65vh]">
            <Image
            src="/background/bgfooter.jpg"
            alt="background"
            fill
            className="object-cover object-bottom"
            />
        <Image
        src="/background/pita.png"
        alt="pita"
        width={2400}
        height={24}
        className="absolute w-full h-18 md:h-24 bottom-2"
        />
        </div>
    </div>
  )
}

export default FooterImageRibbon