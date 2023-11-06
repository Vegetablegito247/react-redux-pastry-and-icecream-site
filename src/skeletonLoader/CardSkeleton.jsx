import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.css'

const CardSkeleton = ({ card }) => {
    return Array(card).fill(card).map((item, index) => (
        <div className='card-skeleton' key={index}>
            <div className="imageSkel">
                <Skeleton height={350} borderRadius={20} />
            </div>
            <div className="headSkel">
                <Skeleton height={30} />
            </div>
            <div className="btnSkel">
                <Skeleton height={40} width={200} borderRadius={10} />
            </div>
        </div>
    ))
}

export default CardSkeleton