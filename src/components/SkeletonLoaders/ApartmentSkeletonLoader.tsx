import React from 'react'
import './ApartmentSkeletonLoaderStyles.scss'

const ApartmentSkeletonLoader = () => {
    return (
        <div className='apartment_skeleton'>
            <div className="apartment_skeleton_container">
                <div className="row">
                    <div className="circle loading-animation" />
                    <div className="column">
                        <div className="line line1 loading-animation" />
                        <div className="line line2 loading-animation" />
                    </div>
                </div>
                <div className="column">
                    <div className="line line3 loading-animation" />
                    <div className="line line4 loading-animation" />
                    <div className="line line5 loading-animation" />
                </div>
                <div className="row">
                    <div className="box loading-animation" />
                    <div className="box loading-animation" />
                </div>
            </div>

        </div>
    )
}

export default ApartmentSkeletonLoader