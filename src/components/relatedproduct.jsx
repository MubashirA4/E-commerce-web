import React from 'react'

const RelatedProduct = ({ image,imgWidth = '', imgHeight = '' , imgbg ='' ,title, sprice, eprice , className = '' }) => {
    return (
        <div className={`bg-white ${className}`}>
            <div className={`flex flex-col items-center p-2 shadow-md rounded-sm ${imgbg}`}>
                <img src={image} alt="" className={`${imgWidth} ${imgHeight}`} />
            </div>
            <div className=''>
                <h4 className="font-regular text-Primary xl:text-base">{title}</h4>
                <p className='font-regular text-[#8B96A5] xl:text-base'>{sprice} -<span> {eprice}</span> </p>
            </div>
        </div>
    )
}

export default RelatedProduct