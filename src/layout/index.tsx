import React from 'react';
import './Layout.css';
import Content from './Content';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
    return (
        <div className="container">
            <div className="column large">
                <Content />
            </div>
            <div className="column small">
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;