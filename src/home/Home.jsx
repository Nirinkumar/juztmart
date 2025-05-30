import React from "react";
import PageList from "./PageList";
import './home.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faFaceSmileBeam, faRocket, faTruck } from "@fortawesome/free-solid-svg-icons"
import phone from '../assets/images/mobiles/Mobile-Red.png'
import fashion from '../assets/images/fashion/couple/fashion.jpg'
import accessories from "../assets/images/accessories/accessories.jpg"
import electronic from '../assets/images/electronics/laptop1.jpg'
import furniture from '../assets/images/Furniture/furniture.jpg'
import cosmetic from '../assets/images/cosmetics/cosmetics.jpg'
import toys from '../assets/images/Toys/teddy.jpg'
import head_image from "../assets/images/fashion/men/maleFashion.jpg"
import femaleModel from "../assets/images/fashion/women/femaleModel.jpg"
import iwatch from '../assets/images/electronics/silver-iwatch.jpg'
import lipstick from '../assets/images/cosmetics/red-lipstick.jpeg'
import women_tshirt from '../assets/images/fashion/women/lite-purple-tshirt.jpg'
import iphone from '../assets/images/mobiles/iphone2.jpg'
import vest from '../assets/images/fashion/men/gym-vest2.jpg'
import oneplus from '../assets/images/mobiles/oneplus-nord-6.jpg'
import jewel_set from "../assets/images/accessories/bridal-jewelset.jpg"
import boy_kid from '../assets/images/fashion/kids/boy-kid-combo.jpg'



function Home(){

    const category = [
        {
            id : "1",
            name : "Mobiles",
            image : phone,
            link : "/mobiles"
        },
        {
            id : "2",
            name : "Fashion",
            image : fashion,
            link : "/fashion"
        },
         {
            id : "3",
            name : "Accessories",
            image : accessories,
            link : "/accessories"
        },
        {
            id : "4",
            name : "Electronics",
            image : electronic,
            link : "/electronics"
        },
        {
            id : "5",
            name : "Furniture",
            image : furniture,
            link : "/furniture"
        },
        {
            id : "6",
            name : "Cosmetics",
            image : cosmetic,
            link : "/cosmetics"
        },
        {
            id : "7",
            name : "Toys",
            image : toys,
            link : "/toys"
        }
       
    ]

    const categoryList = category.map((element)=>{
        return(
            <PageList 
                id={element.id}
                name={element.name} 
                image={element.image} 
                link={element.link} 
                />
            )
    })

    return(
        <div className="home">
            <div className="home-catg">
                {categoryList}
            </div>

            <div className="header">
                <div className="title-content">
                    <h2>Level up your style</h2>
                    <p>with our stunning collections</p>
                    <Link to={"/fashion"} className="title-content-btn">Shop Now</Link>
                </div>

                <div className="header-image">
                    <img src={head_image} alt="" height="250px" />
                </div>

                <div className="header-image1">
                    <img src={femaleModel} alt="" height="250px" width="" />
                </div>
            </div>

            <div className="service">

                <div className="service-container-1">
                    <div className="service-content1">
                        <h3>We Provide Best</h3>
                        <h3 className="service-content1-h3">Customer Experiences</h3>
                    </div>

                    <div className="service-content2">
                        <p>|| We ensure that our customer have the best online shopping experience</p>
                    </div>
                </div>

                <div className="service-container-2">
                    <div>
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                        <h6>Satisfaction Guarantee</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque!</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faRocket} />
                        <h6>New Arrival Everyday</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque!</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faTruck} />
                        <h6>Fast & Free Shipping</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque!</p>
                    </div>
                </div>
            </div>

            <div className="new-arrival-container">

                <h3 className="arrival-title">New Arrival</h3>

                <div className="new-arrival">
                    <div className="arrival-container">
                        <img src={iwatch} alt="" />
                        <Link to={"/electronics"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={lipstick} alt="" />
                        <Link to={"/cosmetics"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={women_tshirt} alt="" />
                        <Link to={"/fashion"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={oneplus} alt="" />
                        <Link to={"/mobiles"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>

            <div className="new-arrival-container">

                <h3 className="arrival-title">Most Wanted</h3>

                <div className="new-arrival">
                    <div className="arrival-container">
                        <img src={vest} alt="" />
                        <Link to={"/fashion"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={iphone} alt="" />
                        <Link to={"/mobiles"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={jewel_set} alt="" />
                        <Link to={"/accessories"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                    <div className="arrival-container">
                        <img src={boy_kid} alt="" />
                        <Link to={"/fashion"} className="arrival-container-btn">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h4>juZtMart</h4>
                <p className="footer-p1">The Standard chunk of Lorem ipsum used since the 1500s is reproduced below for those interest</p>
                <div className="font-div">
                    <FontAwesomeIcon icon={faInstagram} className="font-icon" />
                    <FontAwesomeIcon icon={faXTwitter} className="font-icon" />
                    <FontAwesomeIcon icon={faFacebook} className="font-icon" />
                </div>
                <p className="footer-p2">@2025 juZtMart.com</p>
            </div>
        </div>
    )
}

export default Home