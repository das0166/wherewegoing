import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='Login'>
            <h2 className='title'>로그인</h2>
            <form className='main_lo'>
                <div className='input-container'>
                    <div className='id'>
                        <label>아이디</label>
                        <input type="text" name="id" placeholder="아이디"/>
                    </div>
                    
                    <div className='password'>
                    <label>비밀번호</label>
                    <input type="password" name="password" placeholder="비밀번호" />
                    </div>
                </div>
                <div className="loginMid">
                    <div className='check'>
                        <label className="remember_id" htmlFor="remember_id">
                        
                        <input type="checkbox" id="remember_id" /> 아이디 저장
                        </label>
                        <label className="autoLogin" htmlFor="autoLogin">
                        
                        <input type="checkbox" id="autoLogin" /> 로그인 유지
                        </label>
                    </div>
                    <div className='ji_fi'>
                        <a href='/join' className="join">회원가입</a>
                        <a href='/find' className="find_login">아이디/비밀번호 찾기</a>
                    </div>
                  </div>
                <div className='button-container'>
                    <button>로그인</button>
                </div>
            
            </form>
            <form className='otherlogin'>      
                <div className='line'></div>
                <h3>소셜 계정으로 간편하게 가입하세요!</h3>
                <div className='ri'></div>
                <div className='login'>
                    <button className='kakao'>
                        <img src='img/kakao.png' alt='kakao'></img>
                        카카오로 로그인하기
                    </button>
                    <button className='naver'>
                        <img src='img/naver.png' alt='naver'></img>
                        네이버로 로그인하기
                    </button>
                    <button className='facebook'>
                        <img src='img/facebook.png' alt='facebook'></img>
                        Facebook으로 로그인하기
                    </button>
                </div>
             </form>  
        </div>
    );
}

export default Login;