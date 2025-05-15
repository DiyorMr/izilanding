import { ChartNoAxesCombined, Check, CirclePlay, X } from 'lucide-react'
import './Hero.scss'
import ChatWidget from '../ChatWidget'
const Hero = () => {
    return (
        <>
            <div className='container'>
                <div className="hero">
                    <div className='hero_info'>
                        <h1>Automate Your Business <br /> with AI-Powered <br /> Conversations
                        </h1>
                        <p>IZIISH helps businesses scale customer interactions with <br />
                            intelligent chatbots that understand, learn, and improve over
                            time.
                        </p>
                        <div className='hero_btn'>
                            <a href="#" className="free_btn">TRY IZI Ish for free</a>
                            <div className='hero_btn_icon'>
                                <CirclePlay className='circle' />
                                <a href="#" className="demo_btn">Watch Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className='hero_chat'>
                        <ChatWidget />
                        <div className='hero_rate'>
                            <ChartNoAxesCombined className='rate_icon' />
                            <p>98% customer satisfaction rate</p>
                        </div>
                    </div>
                </div>
                <div className="hero_status">
                    <ul>
                        <li>Trusted by innovative companies:</li>
                        <li>COMPANY A</li>
                        <li>BRAND B</li>
                        <li>STARTUP C</li>
                        <li>ENTERPRISE D</li>
                    </ul>
                </div>
            </div>
            <div className="turn">
                <div className="container">
                    <h1 className='turn_title'>Turn Conversations into Conversions</h1>
                    <p className='turn_text'>Businesses are losing customers due to slow response times and <br />
                        inconsistent support quality. IZIISH solves this with always-on, intelligent <br />
                        automation.
                    </p>
                    <div className='turn_box'>
                        <div className="turn_problem">
                            <h1>The Problem</h1>
                            <div className="turn_boxs">
                                <div className='turn_box_card'>
                                    <X className='turn_box_card_icon' />
                                    <p>Slow response times frustrate customers and lead to lost sales</p>
                                </div>
                                <div className='turn_box_card'>
                                    <X className='turn_box_card_icon' />
                                    <p>Support teams are overwhelmed by repetitive questions</p>
                                </div>
                                <div className='turn_box_card'>
                                    <X className='turn_box_card_icon' />
                                    <p>Scaling customer service requires significant hiring and training</p>
                                </div>
                            </div>
                        </div>
                        <div className="turn_solution">
                            <h1>The IZIISH Solution</h1>
                            <div className='turn_box_card'>
                                <Check className='check_icon' />
                                <p>Instant 24/7 responses to common customer questions</p>
                            </div>
                            <div className='turn_box_card'>
                                <Check className='check_icon' />
                                <p>AI automation handles 80% of inquiries without human intervention</p>
                            </div>
                            <div className='turn_box_card'>
                                <Check className='check_icon' />
                                <p>Smart routing to humans when needed, with full conversation
                                    context</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero