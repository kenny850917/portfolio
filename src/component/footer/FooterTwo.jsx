import React from 'react';
import {FaGithubSquare ,FaInstagramSquare ,FaYoutubeSquare , FaLinkedin} from "react-icons/fa";

const SocialShare = [
    {Social: <FaGithubSquare /> , link: 'https://github.com/kenny850917/'},
    {Social: <FaLinkedin /> , link: 'https://www.linkedin.com/in/kenny-ho-754104102/'},
    {Social: <FaInstagramSquare /> , link: 'https://www.instagram.com/kenny850917/'},
    {Social: <FaYoutubeSquare /> , link: 'https://www.youtube.com/channel/UCk7KCpQlMcvLEygFM2_13GQ?view_as=subscriber/'},

]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/home-one">
                                    <img src="/assets/images/logo/logo-circle-0.5.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text-center">
                                <p>Copyright © 2020 Designed with Lots of <span role='img' aria-label="coffee">☕</span> and <span role='img' aria-label="heart">💗</span> By Kenny.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;