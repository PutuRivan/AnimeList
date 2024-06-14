"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    return (
        <div className="w-full h-full">
            <YouTube videoId={youtubeId} className="w-full h-full flex items-center justify-center"/> 
        </div>
    )
}

export default VideoPlayer