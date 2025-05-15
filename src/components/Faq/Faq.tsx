import Accordion from '../Accordion'
import './Faq.scss'
const Faq = () => {
    return (
        <div className='faq' id='faq'>
            <div className="container">
                <div className='faq_info'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Have more questions? We're here to help.</p>
                </div>
                <Accordion />
            </div>

        </div>
    )
}

export default Faq