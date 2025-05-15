import { Brain, ChartSpline, Plug, WandSparkles } from 'lucide-react'
import './Features.scss'

const Features = () => {
    return (
        <div className='container'>
            <div className="features" id='features'>
                <h1>Powerful Features for Modern Businesses</h1>
                <p>Everything you need to create exceptional
                    customer experiences at scale.
                </p>
                <div className="features_card">
                    <div className="feature">
                        <div className="icon brain">
                            <Brain />
                        </div>
                        <h3>Best for Uzbek</h3>
                        <p>Advanced AI that understands context, sentiment, and customer intent for more human-like conversations.</p>
                    </div>
                    <div className="feature">
                        <div className="icon plug">
                            <Plug />
                        </div>
                        <h3>Easy Integrations</h3>
                        <p>Connect with your existing tools like Slack, Salesforce, Shopify and more with just a few clicks.</p>
                    </div>
                    <div className="feature">
                        <div className="icon graph">
                            <ChartSpline />
                        </div>
                        <h3>Users insights</h3>
                        <p>Gain insights into customer interactions, common questions, and conversion opportunities.</p>
                    </div>
                    <div className="feature">
                        <div className="icon magic">
                            <WandSparkles />
                        </div>
                        <h3>No-Code Automation</h3>
                        <p>Design conversation flows with our intuitive drag-and-drop interface. No technical skills required.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Features