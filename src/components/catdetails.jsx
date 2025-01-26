import React from 'react'

const CatDetails = ({image, galleryimg1,galleryimg2,galleryimg3,galleryimg4,galleryimg5, galleryimg6}) => {
  return (
    <div>
        <div>
            <div className='border border-customborder'>
                <img src={image} alt="" />
            </div>
            <div className='border border-customborder'>
                <img src={galleryimg1} alt="" />
                <img src={galleryimg2} alt="" />
                <img src={galleryimg3} alt="" />
                <img src={galleryimg4} alt="" />
                <img src={galleryimg5} alt="" />
                <img src={galleryimg6} alt="" />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default CatDetails