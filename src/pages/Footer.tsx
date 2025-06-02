import React from 'react'

const Footer = () => {
    const sections = [
        {
            header: "Support",
            sections: ["Help Center", "Chat", "Report a Bug"]
        },
        {
            header: "Product",
            sections: ["Features", "Work", "Career", "Money", "Money"]
        },
        {
            header: "Get in Touch",
            sections: ["Contact", "Sales", "Prices"]
        },
    ]
    return (
        <div className='footer-container'>
            <div className="heading">Open the door to a <div className="highlight"> new world</div> by learning English</div>
            <button>Get Started</button>
            <div className="section-wrapper">
                {sections.map((section, index) => (
                    <div className="each-section">
                        <div className="section-header">{section.header}</div>
                        <div className="section-navs">
                            {section.sections.map((sec) => (
                                <div className="section-nav">{sec}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="polices-social-wrapper">
                <div className="copy-write">© Copywriting | All Rights Reserved</div>
                <div className="social"></div>
                <div className="termAndPolicy">Terms of Use | Privacy</div>
            </div>
        </div>
    )
}

export default Footer