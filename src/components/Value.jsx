import React from "react";
import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

import data from "../utils/accordion";

const Value = () => {
  return (
    <section className="v-warpper">
      <div className="v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="v-right">
          <span>Our Value</span>
          <span>Value We Give to You</span>
          <span>
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordianItem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading className="accordionHeading">
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="icon">{item.icon}</div>
                      <span>{item.heading}</span>
                      <div className="icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
