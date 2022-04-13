import React from 'react';
import './Join.css';

function Join() {
    return (
        <div className='Join'>
             <h2 className='title'>회원가입</h2>
             <div className='Join_nae'>
                <div className='id'>
                    <label>아이디<p>*</p></label>
                    <input type="text" name="id" placeholder="영문 또는 영문과 숫자를 조합하여 6~20자를 입력해 주세요."/>
                    <button>중복확인</button>
                    <ul>
                        <li><p>*</p>한글, 특수문자 사용 불가</li>
                        <li><p>*</p>영문 대소문자 구분</li>
                    </ul>
                </div>
                <div className='password'>
                    <label>비밀번호<p>*</p></label>
                    <input type="password" name="password" placeholder="영문, 숫자, 특수문자 중 2가지 이상을 포함하여 6~20자를 입력해 주세요."/>
                    <ul>         
                        <li><p>*</p>영문 대소문자 구분</li>
                    </ul> 
                </div>
                <div className='password_check'>
                    <label>비밀번호 확인<p>*</p></label>
                    <input type="password" name="password_check" placeholder="비밀번호를 다시 입력해 주세요."/>
                </div>
                <div className='nickname'>
                    <label>닉네임<p>*</p></label>
                    <input type="text" name="nickname" placeholder="닉네임을 입력해 주세요."/>
                    <button>중복확인</button>
                </div>
                <div className='email'>
                    <label>이메일<p>*</p></label>
                    <input type="text" name="email" placeholder="예 : where@gmail.com"/>
                </div>
                <div className='phone'>
                    <label>휴대폰<p>*</p></label>
                    <input type="text" name="phone" placeholder="예 : 01012345678"/>
                    <button>인증번호</button>
                </div>
                <div className='phone_check'>
                    <label>인증번호<p>*</p></label>
                    <input type="text" name="phone" placeholder="인증번호를 입력해 주세요."/>
                    <button className='check'>확인</button>
                </div>
              
             </div>
             <div className='recommend'>
                    <div className='line'></div>
                    <h3>아래 선택사항들까지 완료하시면 코스 추천에 도움이 됩니다.</h3>
                    
            </div>
        </div>
    );
}
export default Join;