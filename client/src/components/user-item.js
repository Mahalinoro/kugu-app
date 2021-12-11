import React from 'react';
import hanger from "../assets/img/hanger.png";
import "./../assets/css/user-item.css";


const UserItem = () => {
    return (
        <div className='user-item'> 
            <div className='img'>
                <img src={hanger} alt="hanger" />
            </div>
            <div className='text'>
                <h2 className='text-bold-24'>Account's Item</h2>
                <p className='text-regular-16 mt-2'>This account is not selling at this moment</p>
            </div>
        </div>
    )
}

export default UserItem;