import React from 'react';
import './Header.css';

const getMeal = JSON.parse(localStorage.getItem('Meals'))
const countMeal = getMeal?.length

const Header = (props) => {

    const searchItem = props.searchItem;
    return (
        <div className=' bg-blue-100 leading-[70px]'>
            <div className="navbar px-20">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>All Meals</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <ul className="flex gap-5 font-semibold text-lg ">
                        <li><a className='hover:btn-link hover:text-yellow-600'>Homepage</a></li>
                        <li><a className='hover:btn-link hover:text-yellow-600'>All Meals</a></li>
                        <li><a className='hover:btn-link hover:text-yellow-600'>About</a></li>
                    </ul>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl"><h2 className='text-3xl'>Meal<span className='text-yellow-600'>DB</span></h2></a>
                </div>
                <div className="navbar-end">

                    <button className='focus:text-gray-300 relative input-field transition-all ' title='Search with your text,letter, country, foods'>                      
                            <input type="text" placeholder="Type here" id='search-input' className="search-input input input-primary h-[40px] relative transition-all bg-transparent" />
                            <svg onClick={searchItem} xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 absolute top-6 right-1 search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span id='badge' className="badge badge-xs badge-primary indicator-item w-5 h-4 text-[13px] ">{countMeal?countMeal:0}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Header;