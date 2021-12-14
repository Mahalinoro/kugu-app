import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/sell.css';
import '../assets/css/cart.css';
import axios from 'axios';

export default class Sell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            err: '',
            msg: '',
            title: '',
            price: 0,
            category: '',
            img: '',
            description: '',
            condition: '',
            
    } }

    photoUpload = async(e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsBinaryString(file);
        console.log("reader", reader)
        console.log("file", file)
        if (reader !== undefined && file !== undefined) {
        reader.onloadend = (event) => {
            this.setState({img: `data:${file.type};base64,${btoa(event.target.result)}`})
        }
        }
 
    }

    saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('https://kugu-backend.herokuapp.com/item', {
            name: this.state.title,
            price: this.state.price,
            category: this.state.category,
            img: this.state.img,
            description: this.state.description,
            condition: this.state.condition,
            sellerID: localStorage.user.sub,
        }).then(() => this.setState({msg: 'Uploaded successfully'}))
        

    }

    render() {
        let err, msg;
        if(this.state.err !== ''){
            err = (
                <div className="sell-validation">
                    <p className="text-regular-16 error">{this.state.err}</p>
                </div>
            )
        }

        if(this.state.msg !== ''){
            msg = (
                <div className="sell-validation">
                    <p className="text-regular-16 success">{this.state.msg}</p>
                </div>
            )
        }

        if(this.props.isAuthenticated)
        return (
            <div className="text-color sell">
                <div className="sell-hero">
                </div>

                <div className="card-form">
                    <h3 className="text-medium-32">Sell an Item</h3>
                    <div className="divider"></div>

                    <form onSubmit={this.saveProduct}>
                        {err}
                        {msg}                        
                        <div className="dropzone">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.375 25.1C46.675 16.475 39.1 10 30 10C22.775 10 16.5 14.1 13.375 20.1C5.85 20.9 0 27.275 0 35C0 43.275 6.725 50 15 50H47.5C54.4 50 60 44.4 60 37.5C60 30.9 54.875 25.55 48.375 25.1ZM47.5 45H15C9.475 45 5 40.525 5 35C5 29.875 8.825 25.6 13.9 25.075L16.575 24.8L17.825 22.425C20.2 17.85 24.85 15 30 15C36.55 15 42.2 19.65 43.475 26.075L44.225 29.825L48.05 30.1C51.95 30.35 55 33.625 55 37.5C55 41.625 51.625 45 47.5 45ZM20 32.5H26.375V40H33.625V32.5H40L30 22.5L20 32.5Z" fill="#FAA300" />
                            </svg> 

                            <span className="text-regular-24">Drag and drop images here</span>
                            <span className="text-regular-24">OR</span>
                            <div class="upload-btn-wrapper">
                            
                                 <button class="btn-file text-medium-16">Browse Files</button>                              
                                <input type="file" className="form-control" name="upload_file" onChange={this.photoUpload}/>
                            </div>
                        </div>
                        
                        <div className="input-sell">
                            <label className="text-regular-20">Title</label>
                            <input type="text" className="text-regular-16" placeholder="e.g. White Mug with  a picture " value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}></input>

                        </div>

                        <div className="input-sell">
                            <label className="text-regular-20">Price</label>
                            <input type="text" className="text-regular-16" placeholder="RWF 0.0" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })}></input>
                        </div>

                        <div className="input-sell">
                            <label className="text-regular-20">Category</label>
                            <select className="text-regular-16" value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })}>
                                <option value="0">Select Category</option>
                                <option value="Household Items">Household Items</option>
                                <option value="Clothes & Shoes">Clothes & Shoes</option>
                                <option value="Electronics">Electronics</option>

                            </select>
                        </div>

                        <div className="input-sell">
                            <label className="text-regular-20">Description</label>
                            <textarea className="text-regular-16" placeholder="Please describe your item" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                        </div>

                        <div className="input-sell">
                            <label className="text-regular-20">Condition</label>
                            <textarea className="text-regular-16" placeholder="Please describe the item’s condition" value={this.state.condition} onChange={(e) => this.setState({ condition: e.target.value })}></textarea>
                        </div>


                        <div className="input-btn">
                            <button className="btn-sell text-medium-16 btn-cancel">Cancel</button>
                            <input className="btn-sell text-medium-16 btn-upload" type="submit" value="Upload"></input>
                        </div>
                    </form>


                </div>
                
            </div>
        )
        else {
            return (
                 <div className="cart-empty">
                    <p className="text-medium-20">Oops! You need to log in first :(</p>
                   <NavLink className="text-medium-16 btn-cart" to="/">Return to Home</NavLink>
                </div>
            )
        }
    }
}