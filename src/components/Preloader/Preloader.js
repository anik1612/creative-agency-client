import React from 'react';

const Preloader = () => {
    return (
        <div style={{ margin: '0 auto' }}>
            <div className="spinner-grow text-success mr-2" role="status"></div>
            <div className="spinner-grow text-danger mr-2" role="status"></div>
            <div className="spinner-grow text-warning mr-2" role="status"></div>
        </div>
    );
};

export default Preloader;