import React from 'react';

import Facebook from '../images/facebook.svg';
import GitHub from '../images/github.svg';
import Instagram from '../images/instagram.svg';

import './styles/Footer.css';

class Footer extends React.Component {s
    render () {
        return (
            <div className="Footer">
                <p>Trixtaro - Desarrollo de Software - 2019</p>
                <div className="social-media">
                    <figure>
                        <a href="https://facebook.com/EstudioTrixtaro" title="Facebook" target="_blank">
                            <img src={ Facebook } alt="Facebook"></img>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://github.com/Trixtaro" title="GitHub" target="_blank">
                            <img src={ GitHub } alt="GitHub"></img>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://www.instagram.com" title="Instagram" target="_blank">
                            <img src={ Instagram } alt="Instagram"></img>
                        </a>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Footer;