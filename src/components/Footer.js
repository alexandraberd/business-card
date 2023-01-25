import React from 'react';
import SpriteSvg from './Sprite';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrap">
                    <SpriteSvg id="Twitter" size="25" color="#918E9B" />
                    <SpriteSvg id="Facebook" size="25" color="#918E9B" />
                    <SpriteSvg id="Instagram" size="25" color="#918E9B" />
                    <SpriteSvg id="GitHub" size="25" color="#918E9B" />
                </div>
            </footer>
        );
    }
}

export default Footer;
