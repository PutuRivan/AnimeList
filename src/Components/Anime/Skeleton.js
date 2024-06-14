import React from 'react'

const Skeleton = () => {
    return (
        <>
            {Array(20)
                .fill()
                .map((_, index) => (
                    <div key={index} className="skeleton w-64 h-96">
                    </div>
                ))}
        </>
    )
}

export default Skeleton