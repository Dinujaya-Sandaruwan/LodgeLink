import React from "react";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container">
        <div className="c-left">
          <span>Our Contact Us</span>
          <span>Easy to contact us</span>
          <span>
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="contactModes">
            {/* First Row */}
            <div className="row">
              {/* First Mode */}
              <div className="mode">
                <div className="mode-content">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="c-detail">
                    <span>Call</span>
                    <span>+94 76 458 8828</span>
                  </div>
                </div>
                <div className="button">Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="mode">
                <div className="mode-content">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="c-detail">
                    <span>Chat</span>
                    <span>+94 76 458 8828</span>
                  </div>
                </div>
                <div className="button">Chat Now</div>
              </div>
            </div>
            {/* Secound Row */}
            <div className="row">
              {/* First Mode */}
              <div className="mode">
                <div className="mode-content">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="c-detail">
                    <span>Video Call</span>
                    <span>+94 76 458 8828</span>
                  </div>
                </div>
                <div className="button"> Video Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="mode">
                <div className="mode-content">
                  <div className="icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="c-detail">
                    <span>Message</span>
                    <span>+94 76 458 8828</span>
                  </div>
                </div>
                <div className="button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
