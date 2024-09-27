import React from 'react';
import logo from '../assests/images/logo.avif';
import searchicon from '../assests/icons/search.svg'

const NavBar = () => {
    return (
        <div class="navbar_header page-width">
            <div class="navbar_logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <div class="navbar_Linklist">
                <ul class="Menu_List">
                    <li class="menu_item"><a class="menuitem_link" href="#">
                            <span>Best Sellers</span>
                        </a>
                    </li>
                    <li class="menu_item"><a class="menuitem_link" href="#">
                            <span>New Arrivals</span>
                        </a>
                    </li>
                    <li class="menu_item"><a class="menuitem_link" href="#">
                            <span>Brands</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar_icons">
                <div class="searchbar_icon">
                    <div class="search_input">
                        <input type='search' placeholder='Search'></input>
                        <img src={searchicon} alt="Search Icon" style={{ marginLeft: '8px', height: '20px' }} />
                    </div>
                </div>
                <div class="login_button">
                    <a href="">
                        <span>Login</span>
                    </a>
                </div>
                <div class="language_selector">
                    <select>
                        <option value="English">En</option>
                        <option value="Sewdish">Sv</option>
                        <option value="French">Fi</option>
                        <option value="Germen">Ge</option>
                    </select>
                </div>
                <div class="cart-icon"></div>
            </div>
        </div>
    );
};

export default NavBar;
