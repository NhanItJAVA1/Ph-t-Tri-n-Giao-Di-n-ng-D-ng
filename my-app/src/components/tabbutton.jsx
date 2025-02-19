import React from 'react';

const TabButton = ({ label, onClick, isActive }) => {
    return (
        <button 
            onClick={onClick} 
            className={`tab-button ${isActive ? 'active' : ''}`}
        >
            {label}
        </button>
    );
};

import React, { useState } from 'react';
const Menu = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="menu">
            <TabButton 
                label="Tab 1" 
                onClick={() => handleTabClick('Tab1')} 
                isActive={activeTab === 'Tab1'} 
            />
            <TabButton 
                label="Tab 2" 
                onClick={() => handleTabClick('Tab2')} 
                isActive={activeTab === 'Tab2'} 
            />
            <TabButton 
                label="Tab 3" 
                onClick={() => handleTabClick('Tab3')} 
                isActive={activeTab === 'Tab3'} 
            />
        </div>
    );
};

export default Menu;