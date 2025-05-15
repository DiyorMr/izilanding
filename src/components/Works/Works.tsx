import { worksCardData } from '../../constants'
import './Works.scss'
const Works = () => {
    return (
        <div className="izi_wrapper" id='works'>
            <div className='container'>
                <h2 className="izi_title">How IZI Ish Works</h2>
                <p className="izi-subtitle">Get up and running in minutes, not months.</p>
                <div className="izi_steps">
                    {
                        worksCardData.map((item, index) =>
                            <div className="izi_step" key={index}>
                                <div className="izi_icon">
                                    <img src={item.img} alt="Choose Agent type" />
                                </div>
                                <h3 className="izi_step_title">{item.title}</h3>
                                <p className="izi_step_desc">{item.desc}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Works