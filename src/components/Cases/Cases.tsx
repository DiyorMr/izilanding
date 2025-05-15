import { casesCardData } from '@/constants'
import './Cases.scss'
import PartnerSlider from '../PartnerSlider'
const Cases = () => {
    return (
        <>
            <div className='container'>
                <div className="use_case_wrapper">
                    <h2 className="use_case_title">Versatile Use Cases</h2>
                    <p className="use_case_subtitle">IZIISH adapts to your unique business needs.</p>

                    <div className="use_case_grid">
                        {
                            casesCardData.map((item, index) =>
                                <div className="use_case_card" key={index}>
                                    <div className="use_case_icon">
                                        <img src={item.img} alt="Customer Support" />
                                    </div>
                                    <h3 className="use_case_heading">{item.title}</h3>
                                    <p className="use_case_text">{item.text}</p>
                                    <p className="use_case_highlight">{item.desc}</p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
            <div className='case_slider'>
                <h1>What Our Early Users Say</h1>
                <p>Join these forward-thinking businesses already using IZIISH.</p>

                
                <PartnerSlider />


            </div>
        </>
    )
}

export default Cases