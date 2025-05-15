import { useState } from "react";
import './Pricing.scss'
import { planCardData } from "../../constants";
import { Check } from "lucide-react";



const PricingSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="container" id="pricing">
            <div className="pricing_section">
                <h2 className="pricing_title">Simple, Transparent Pricing</h2>
                <p className="pricing_subtitle">
                    Choose the plan that fits your needs. All plans include our core features.
                </p>

                <div className="pricing_cards">
                    {planCardData.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing_card ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {plan.badge && <div className="plan_badge">{plan.badge}</div>}
                            <h3 className="plan_name">{plan.name}</h3>
                            <p className="plan_desc">{plan.description}</p>
                            <p className="plan_price">
                                {plan.price}
                                <span>{plan.per}</span>
                            </p>
                            <ul className="plan_features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check className="check_icon" />
                                        {feature}</li>
                                ))}
                            </ul>
                            <button
                                className={`plan_button ${activeIndex === index ? "active" : ""
                                    }`}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
