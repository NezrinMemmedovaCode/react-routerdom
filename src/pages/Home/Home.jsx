import React from 'react'
import Nav from '../../layout/Nav'
import Footer from '../../layout/Footer'
import "./Home.scss"

function Home() {
  return (
   <>
   <main>

<section class="hero">
    <div>

        <h2>Clean Blog</h2>
        <p>A Blog Theme by Start Bootstrap</p>
    </div>
</section>
<div class="basliqlar">


    <div class="basliq1">
        <h3><a href="">Man must explore,and this is exploration at its greatest</a></h3>
        <p><a href="">Problems look mighty small from 150 miles up</a></p>
        <div class="paraqraf1"> Posted by <a href="">Start Bootstrap</a> on September 24, 2023
    </div>
</div>

    <div class="basliq2">
        <h3><a href="">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</a></h3>
        <p>Posted by Start Bootstrap on September 18, 2023</p>

    </div>
    <div class="basliq3">
        <h3><a href="">Science has not yet mastered prophecy</a>
          </h3>
        <p><a href="">We predict too much for the next year and yet far too little for the next ten.</a></p>
        <span>We predict too much for the next year and yet far too little for the next ten.</span>
    </div>

<div  class="buttonn">
    <button class="button2">OLDER POSTS</button>
</div>


    </div>
    
    
    
    
    
    
    
    
    
    
    
</main>
   
   </>
  )
}

export default Home