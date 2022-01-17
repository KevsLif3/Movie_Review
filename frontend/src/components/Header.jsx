import React from 'react'
import Dots from '../assets/images/3dots.png';
import Logo from '../assets/images/Logo.png';
import SearchIcon from '../assets/images/search-icon.png';
import FavoritesLogo from '../assets/images/favorites-logo.png';

function Header() {
    return (
        <>
           <div class="header">
            <img class="dots" src={Dots} alt=""/>
            <img class= 'Logo' src={Logo} alt="Logo"/>
                <input class= 'searchBar' type="text"/>
                <img class='search-icon' src={SearchIcon} alt="search-icon"/>
              
           <button class="category">Categories</button>
           <img class='favorites-logo' src={FavoritesLogo} alt="favorites-logo"/> 
        </div> 
        </>
    )
}

export default Header
