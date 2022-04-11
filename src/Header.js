import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <h1>
                <a href='/'>
                    <img src='img/logo.png' alt='logo'></img>
                </a>
                <ul className='lo_jo'>
                    <li><a href='/login'>로그인</a></li>
                    <li>|</li>
                    <li><a href='/join'>회원가입</a></li>
                </ul>
            </h1>
            <nav>
            <ul className='gnb'>
                <li><a href='/'>홈</a></li>
                <li><a href='/city'>도시별 장소</a></li>
                <li><a href='/theme'>테마별 장소</a></li>
                <li><a href='/calendar'>캘린더</a></li>
                <li><a href='/mypage'>마이페이지</a></li>
            </ul>
            </nav>
        </div>
    );
}

export default Header;