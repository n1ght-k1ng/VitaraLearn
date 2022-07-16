import React , {useRef , useEffect , useState }from "react"; 
import videojs from 'video.js'
// import array from './array.mp4'
import 'video.js/dist/video-js.css'
import {useNavigate} from 'react-router-dom'

import '@videojs/themes/dist/fantasy/index.css'

const VideoJS = ({options ,themeName = 'fantasy'}) => {


    const navigate = useNavigate()

    const navigatetoQ1 = () => {
        navigate('/quiz1' , { replace: true })
    }

    const videoRef = useRef(null) 
    const playerRef = useRef(null)

    // const [currentUrlIndex, setCurrentUrlIndex] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)

    const handleVideoEnd = () =>{

       


    }

    useEffect(() => {
        const player = playerRef.current

        if(!player){
            const videoElement = videoRef.current 
            if(!videoElement) return;
            playerRef.current = videojs(videoElement, options)
        }

        return()=>{
            if(player){
                player.dispose()
                console.log("video ended")
                playerRef.current = null
            }
        }
    },[options,videoRef,playerRef])

    
    return (
        <div data-vjs-player>

            <video ref= {videoRef} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}  onEnded={

                ()=> setShowNextButton(true)
            }/>
        
        {showNextButton && (
        <button type="button"
          onClick={navigatetoQ1}
          style={{
            color: 'white',
            fontSize: '10px',
            width: '200px',
            backgroundColor: 'black',
            position: 'absolute',
            left:250,
            bottom: 150,
            zIndex: 5,
            fontSize: '3em',
          }}
        >
          Go to Quiz 1
        </button>
      )}
          </div>
        

            
       
    )
}

export default VideoJS