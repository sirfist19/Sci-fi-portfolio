import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Life from '../components/Life';
import Footer from '../components/Footer';

const LifePage = () => {
    // Scroll to top when loading the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Scene overlay_content={
                <div>
                    <Navbar top={true} />
                    <div className="title-section" style={{ pointerEvents: 'none' }}>
                        <h1 id="name">Life & Hobbies</h1>
                    </div>
                </div>
            }
                scene_type="TITLE"
            />

            <Life />

            <Footer />
        </div>
    );
};

export default LifePage;
