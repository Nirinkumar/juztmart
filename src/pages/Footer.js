import React from 'react'
import "./pages.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div>
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
