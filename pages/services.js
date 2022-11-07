import React, { useState } from 'react';
import AboutBottom from '../components/mycomponents/AboutSection/AboutBottom';
import AboutTop from '../components/mycomponents/AboutSection/AboutTop';
import AboutUs from '../components/mycomponents/AboutSection/AboutUs';
import CaseWork from '../components/mycomponents/CaseWork/CaseWork';
import FinancialAdvisor from '../components/mycomponents/FinacialAdvisor/FinancialAdvisor';

const Services = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <AboutTop />
            <AboutUs />
            <AboutBottom />
            <CaseWork />
            <FinancialAdvisor show={show} setShow={setShow} />
        </div>
    );
};

export default Services;