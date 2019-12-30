import React from 'react';
import { Link } from 'react-router-dom';

const footer = props => {
    return (
        <footer className="footer">
            <div className="footerCard">
                <h5 className="footerCard__heading">Contact</h5>
                <div className="footerCard__content">
                    <ul className="footerCard__list">
                        <li className="footerCard__listItem">Email: <a className="link" href="mailto:twbcnorth@outlook.com">twbcnorth@outlook.com</a></li>
                        <li className="footerCard__listItem">Phone: <a className="link" href="tel:0422926053">0422 926 053</a></li>
                        <li className="footerCard__listItem">Facebook: <a className="link" href="https://www.facebook.com/twbcn/" target="_blank" rel="noopener noreferrer">@twbcn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerCard">
                <h5 className="footerCard__heading">Navigate</h5>
                <div className="footerCard__content">
                    <ul className="footerCard__list">
                        <li className="footerCard__listItem"><Link className="link" to="/">Home</Link></li>
                        <li className="footerCard__listItem"><Link className="link" to="/about">About</Link></li>
                        <li className="footerCard__listItem"><Link className="link" to="/register">Register</Link></li>
                        <li className="footerCard__listItem"><Link className="link" to="/conferences">Conferences</Link></li>
                        <li className="footerCard__listItem"><Link className="link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footerCard">
                <h5 className="footerCard__heading">Copyright</h5>
                <div className="footerCard__content">
                    &copy; 2019 TWBC North
                    <p>
                        Except as permitted by the copyright law applicable to you, you may not reproduce or communicate any of the content on this website, including files downloadable from this website, without the permission of the copyright owner.   
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default footer;