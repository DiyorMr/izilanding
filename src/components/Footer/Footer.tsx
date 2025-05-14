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
                                <a href=""><Twitter /></a>
                                <a href=""><Linkedin /></a>
                                <a href=""><Facebook /></a>
                                <a href=""><Instagram /></a>
                            </div>

                        </div>
                        <div className="footer_content_columns_column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#" target="_blank">Features</a></li>
                                <li><a href="#" target="_blank">Use Cases</a></li>
                                <li><a href="#" target="_blank">Pricing</a></li>
                                <li><a href="#" target="_blank">Integrations</a></li>
                                <li><a href="#" target="_blank">API</a></li>
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