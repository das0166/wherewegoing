import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <h1>
                <img src='img/logo_g.png'></img>
            </h1>
            <nav>
                <ul className='fo_menu'>
                    <li><a href='/termsofuse'>이용약관</a></li>
                    <li><a href='/personalinformation'>개인정보처리방침</a></li>
                    <li><a href='/mypage'>마이페이지</a></li>
                    <li><a href='/modificationofinformation'>개인정보수정</a></li>
                </ul>           
            </nav>
            <p>ⓒ 어디갈까? ALL RIGHTS RESERVED.</p>
        </div>
    );
}
export default Footer;