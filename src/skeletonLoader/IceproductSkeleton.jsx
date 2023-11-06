import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.css'

const IceproductSkeleton = ({ card }) => {
    return Array(card).fill(card).map((item, index) => (
        <div className='iceSkeleton' key={index}>
            <div className="imgPrd">
                <Skeleton height={170} borderRadius={10} />
            </div>
            <div className="headPrd">
                <Skeleton height={30} />
            </div>
            <div className="textPrd">
                <Skeleton height={30} />
            </div>
            <div className="pricePrd">
                <Skeleton width={100} height={20} />
            </div>
            <div className="btnPrd">
                <Skeleton height={40} borderRadius={10} />
            </div>
        </div>
    ))
}

export default IceproductSkeleton