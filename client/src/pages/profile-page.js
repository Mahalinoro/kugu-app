import React from 'react';
import imgUser from "../assets/img/user.jpg";
import "../assets/css/profile-page.style.css";
import UserItem from '../components/user-item';

const ProfilePage = () => {
    const [state, setstate] = React.useState({
        isItemOpen: true,
        isReviewOpen: false,
    })

    const ToogleItem = () => {
        setstate({ 
            ...state, isItemOpen: true, isReviewOpen: false
        })
    }

    const ToogleReview = () => {
        setstate({ 
            ...state, isItemOpen: false, isReviewOpen: true
        })
    }

    const OpenEditPage = () => {
        // go to edit profile page
    }

    return (
        <div className="profile-page">
            <div className='profile-header-bg' style={{ background: 'url(/images/clothes.jpeg)', height: "250px", position: "relative"}}>
            </div>
            <div className='profile-content'>
                <div className="row">
                    <div className='user-picture'><img src={imgUser} alt="user"/></div>
                    <div className="col-md-3"></div>
                    <div className='col-md-6 mr-auto user-details'>
                        <h3 className="user-name text-bold-24">Mahaly</h3>
                        <h4 className="user-review text-light-16">No review yet</h4>
                        <div className="row">
                            <div className='user-detail col-md-6 text-regular-16'>About</div>
                            <div className='user-detail col-md-6 text-regular-16'>verif</div>
                            <div className='user-detail col-md-6 text-regular-16'>Lorem ipsum</div>
                            <div className='user-detail col-md-6 text-regular-16'>Email</div>
                            <div className='user-detail col-md-6 text-regular-16'>Lorem Ipsum</div>
                            <div className='user-detail col-md-6 text-regular-16'>Google</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button className="text-medium-16 btn-cart" onClick={OpenEditPage}>
                        <i className="fas fa-pen"></i>
                        edit profile</button>
                    </div>
                </div>
                {/* navigation */}
                <div className='row user-navigation'>
                    <div className={`${state.isItemOpen ? "active" : ""} col-md-6 text-regular-16`} onClick={ToogleItem}>Items</div>
                    <div className={`${state.isReviewOpen ? "active" : ""} col-md-6 text-regular-16`} onClick={ToogleReview}>Reviews</div>
                </div>
                <div className='user-content'>
                    {
                        state.isItemOpen ? <UserItem /> : <div>Reviews</div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;