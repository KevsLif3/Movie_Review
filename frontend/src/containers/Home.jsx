import React from 'react'
import BackgroundImage from '../assets/images/background.png';
import WatchTrailer from '../assets/images/Watch-trailer.png';
import MobileBackground from '../assets/images/mobile-background.png';
import Movie1 from '../assets/images/movie1.png';
import Star from '../assets/images/ratings-star.png';
import HeartLogo from '../assets/images/favorite-heart.png'; 
import Movie2 from '../assets/images/movie2.png';
import Movie3 from '../assets/images/movie3.png';
import Movie4 from '../assets/images/movie4.png';
import Movie5 from '../assets/images/movie5.png';
import Movie6 from '../assets/images/movie6.png';
import Movie7 from '../assets/images/movie7.png';
import Movie8 from '../assets/images/movie8.png';


function Home() {
    return (
        <>
          <img class='background-image'src= {BackgroundImage} alt="background-image"/>
<img class='mobile-background' src={MobileBackground} alt="background-image"/>

<img class='Watch-trailer' src={WatchTrailer} alt="Watch-trailer"/>
<p class='date' >October 1st
    In cinemas </p>
<p class='James-bond' >James Bond has left active service. His peace is short-lived when Felix Leiter,
    an old friend from the CIA, turns up asking for help, leading Bond onto
    the trail of a mysterious villain armed with dangerous new technology.
    </p>

<h2 class='new'>Newly Released</h2>
<div class="images">
    <ul class='menu'>
        <li class="option">
            <img class="images-size" src={Movie1} alt="“”" />
            <p class="heading">Shang-Chi</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.0/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

        <li class="option">
            <img class="images-size" src={Movie2} alt="“”" />
            <p class="heading">Free Guy</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.5/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

        <li class="option">
            <img class="images-size" src={Movie3} alt="“”" />
            <p class="heading">Cruella</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.7/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>


        <li class="option">
            <img class="images-size" src={Movie4} alt="“”" />
            <p class="heading">The Father</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star"src={Star} alt=""/>
                <p class="rating">4.5/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

        <li class="option">
            <img class="images-size" src={Movie5} alt="“”" />
            <p class="heading">Raya and the last dragon</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">3.5/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

        <li class="option">
            <img class="images-size" src={Movie6} alt="“”" />
            <p class="heading">Nomadland</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.5/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

        <li class="option">
            <img class="images-size" src={Movie7} alt="“”" />
            <p class="heading">Minari</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.5/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li> <li class="option">
            <img class="images-size" src={Movie8} alt="“”" />
            <p class="heading">Judas and the black messiah</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" ssrc={Star} alt=""/>
                <p class="rating">4.5/5</p>
                <button class="btn">Trailer=</button>
            </div>
        </li>
    </ul>
</div>

<h2 class='new'>Coming Soon</h2>

<div class="images">
    <ul class='menu'>
        <li class="option">
            <img class="images-size" src={Movie1} alt="“”" />
            <p class="heading">Shang-Chi</p>
            <img class="heart" src={HeartLogo} alt=""/>

            <div class="last">
                <img class="star" src={Star} alt=""/>
                <p class="rating">4.0/5</p>
                <button class="btn">Trailer</button>
            </div>
        </li>

<li class="option">
    <img class="images-size" src={Movie4} alt="“”" />
    <p class="heading">The Father</p>
    <img class="heart" src={HeartLogo} alt=""/>

    <div class="last">
        <img class="star" src={Star} alt=""/>
        <p class="rating">4.5/5</p>
        <button class="btn">Trailer</button>
    </div>
</li>

<li class="option">
    <img class="images-size" src={Movie5} alt="“”" />
    <p class="heading">Raya and the last dragon</p>
    <img class="heart" src={HeartLogo} alt=""/>

    <div class="last">
        <img class="star" src={Star} alt=""/>
        <p class="rating">3.5/5</p>
        <button class="btn">Trailer</button>
    </div>
</li>

<li class="option">
    <img class="images-size" src={Movie6} alt="“”" />
    <p class="heading">Nomadland</p>
    <img class="heart" src={HeartLogo} alt=""/>

    <div class="last">
        <img class="star" src={Star} alt=""/>
        <p class="rating">4.5/5</p>
        <button class="btn">Trailer</button>
    </div>
</li>

<li class="option">
    <img class="images-size" src={Movie7} alt="“”" />
    <p class="heading">Minari</p>
    <img class="heart" src={HeartLogo} alt=""/>

    <div class="last">
        <img class="star" src={Star} alt=""/>
        <p class="rating">4.5/5</p>
        <button class="btn">Trailer</button>
    </div>
</li>
<li class="option">
    <img class="images-size" src={Movie8} alt="“”" />
    <p class="heading">Judas and the black messiah</p>
    <img class="heart" src={HeartLogo} alt=""/>

    <div class="last">
        <img class="star" src={Star} alt=""/>
        <p class="rating">4.5/5</p>
        <button class="btn">Trailer</button>
    </div>
</li>
</ul>
</div>  
        </>
    )
}

export default Home;
