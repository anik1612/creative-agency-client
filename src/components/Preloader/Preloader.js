import React from 'react';

const Preloader = () => {
    return (
        <div style={{ margin: '0 auto' }}>
            <div class="spinner-grow text-success mr-2" role="status"></div>
            <div class="spinner-grow text-danger mr-2" role="status"></div>
            <div class="spinner-grow text-warning mr-2" role="status"></div>
        </div>
    );
};

export default Preloader;