import React from 'react';
import photo from '../assets/photo.png';
import SpriteSvg from './Sprite';

class Info extends React.Component {
    render() {
        return (
            <main className="main">
                <img src={photo} alt="User"></img>
                <h1 className="main__name">Laura Smith</h1>
                <h3 className="main__description">Frontend Developer</h3>
                <a href="https://create-react-app.dev/docs/running-tests" className="main__link">
                    laurasmith.website
                </a>
                <div className="main__wrap">
                    <button className="main__btn main__btn--left">
                        <SpriteSvg id="mail" size="16" color="#1E1F26" />
                        Email
                    </button>
                    <button className="main__btn main__btn--right">
                        <SpriteSvg id="linkedin" size="16" color="#FFFFFF" />
                        LinkedIn
                    </button>
                </div>
            </main>
        );
    }
}

export default Info;
