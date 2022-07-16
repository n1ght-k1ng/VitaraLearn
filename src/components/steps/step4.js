import React from 'react';
import VideoJS4 from '../video_js/videoJS4';
import linkedlist from '../videos/linkedlist.mp4'

function Step4 () {

    const videosrc = linkedlist;
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
        
        <div class = 'step4'>
            <section>
        <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
          
    
        </div>
       <div class="header">
       <h2 class="logo">Lecture 4 - Linked List</h2>
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
            <VideoJS4 options = {videoJsOptions} />
            
        </div> 




       
    </section>
       </div>
   
        

    )
}
export default Step4;