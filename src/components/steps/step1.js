
import React from 'react';
import VideoJS from '../video_js/videoJS';
import VideoPlayer from 'react-video-js-player'
import array from '../videos/array.mp4'

function Step1 () {

    const videosrc = array;
    const videoJsOptions={
        controls:true,

        sources:[{
            src:videosrc,
            
            type: 'video/mp4',
            
        }]
        
        
        
    
    }
    

    return(
        <div class = 'step1'>
            <section>
        <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
          
    
        </div>
       <div class="header">
       <h2 class="logo">Lecture 1 - Array</h2>
       </div>

       <div class="element1"></div>
        <div class="element2"></div> 


       {/* <div class = 'lecture'>

        <h1> Lecture No 1 
        
        </h1>
        </div> */}
        {/* <VideoJS/> */}
        

        
        

       {/* </div> */}
       <div>
            <VideoJS options = {videoJsOptions} />
            
        </div> 




       
    </section>
       </div>
   
        

    )
}
export default Step1;