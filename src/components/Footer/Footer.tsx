import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_content">
                    <div className="footer_content_columns">
                        <div className="footer_content_columns_column">
                            <a href="#"><img className='footer_logo' src="/images/logo.svg" alt="" />
                            </a>
                            <p>Revolutionizing customer interactions
                                with intelligent AI automation.
                            </p>
                            <div className='footer_icons'>
                                <a href="https://x.com/"><Twitter /></a>
                                <a href="https://www.linkedin.com/"><Linkedin /></a>
                                <a href="https://www.facebook.com/"><Facebook /></a>
                                <a href="https://www.instagram.com/"><Instagram /></a>
                            </div>

                        </div>
                        <div className="footer_content_columns_column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#support">Use Cases</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#">Integrations</a></li>
                                <li><a href="#">API</a></li>
                            </ul>

                        </div>
                        <div className="footer_content_columns_column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Tutorials</a></li>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>
                        <div className="footer_content_columns_column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <span>© 2023 IZIISH AI. All rights reserved.</span>
                    <div className='footer_btn_info'>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer