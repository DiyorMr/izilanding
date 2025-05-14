import { accordionData } from "@/constants";
import "./Accordion.scss";

const Accordion = () => {
  return (
    <section className="accordion">
      {accordionData.map((item) => (
        <div className="tab" key={item.id}>
          <input type="radio" name="accordion-2" id={item.id} />
          <label htmlFor={item.id} className="tab__label">
            {item.label}
          </label>
          <div className="tab__content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
