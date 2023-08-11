import React from 'react'
import './MessageSkeletonLoaderStyles.scss'

const MessagesSkeletonLoader = () => {
    return (
        <div className='message_skeleton_loader' >
            <div className='dummy_image'></div>
            <div className='message_skeleton_loader_info'>
                <div className="heading"></div>
                <div className="text"></div>
            </div>
        </div>
    )
}

export default MessagesSkeletonLoader