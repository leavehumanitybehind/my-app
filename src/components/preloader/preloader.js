import React from 'react';

const Preloader = (props) =>  {
    return <div style={ {position:'absolute', top: '50%', left: '50%' }}>
        <img width="80" height="80" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"/>
    </div>
}

export default Preloader;