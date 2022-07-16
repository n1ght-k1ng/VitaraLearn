import React from 'react';
import VideoJS2 from '../video_js/videoJS2';
import stack from '../videos/stack.mp4'

function Step2 () {

    const videosrc = stack;
    const poster = 'https://www.booleanworld.com/wp-content/uploads/2019/11/c-arrays-cover.png?ezimgfmt=ng%3Awebp%2Fngcb20%2Frs%3Adevice%2Frscb20-1'
    
    const videoJsOptions={
        controls:true,

        sources:[{
            src:videosrc,
            poster : poster,
            type: 'video/mp4',
            
        }]
        
        
        
    
    }
    

    return(
        
        <div class = 'step2'>
            <section>
        <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
          
    
        </div>
       <div class="header">
       <h2 class="logo">Lecture 2 - Stack</h2>
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
            <VideoJS2 options = {videoJsOptions} />
            
        </div> 




       
    </section>
       </div>
   
        

    )
}
export default Step2;