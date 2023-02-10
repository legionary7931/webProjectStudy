import styled from 'styled-components';
import Bg from '../img/seoul.jpeg';
import recaptcha from '../img/recaptcha.gif'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { login, signup } from '../redux/actions/actionCreator'

function SignupPage(props){
    let navigate = useNavigate()
    let [bgstate,setBgstate] = useState(false);
    let [kategorie, setKategorie] = useState([
        '분위기 좋은 음식점', '소개팅 성공 98% 음식점', '숙성 소고기', '유튜버 추천 맛집', '가성비 와인바','I끼리 만날 때 가는 술집', '저렴한 칵테일', '데이트 할 때 가는 술집','겨울엔 대방어','여기에 붕어빵','서울에도 이런 포장마차 있지','대화하기 좋은 술집','이색 맛집','디저트가 맛있는 카페','신나고 싶을 때 가는 술집','빵순이 빵돌이 모여라','밖에서 맥주마시기 좋은 곳','카공하기 좋은 카페','여의도 점심식사','연희동 뜨는 맛집','차 한잔 하기 좋은 곳','대학생들이 편하게 가는 술집','망원동 라멘 맛집','에스프레소 먹고 싶을  때','이태원에서 꼭 가야 하는 곳','디카페인 카페' ,'연희동 맛집', '안암 맛집','신촌 맛집','홍대 맛집','연남동 핫플','성수동 핫플','건대 중국집','가지튀김 좋아하면 가야하는 곳','홍콩 음식점','딤섬 맛있는 곳','서울 꼭 가봐야 하는 만두'
    ])

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phonenum, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [id, setID] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onNameHandler = (e) => {
        setName(e.target.value);
    }

    const onBirthHandler = (e) => {
        setBirth(e.target.value);
    }

    const onPhoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onIDHandler = (e) => {
        setID(e.target.value);
    }

    const onNicknameHandler = (e) => {
        setNickname(e.target.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            name: name,
            id: id,
            birthday: birth,
            nickname: nickname,
            phonenumber: phonenum,
            password: password,
            email: email,
            confirmpasswords: confirmPassword
        };

        dispatch(signup(body))
        .then(response => {
            if(response.payload.signupSuccess){
                console.log(response)
                props.history.push('/login')
            } else {
                alert('회원가입에 실패하였습니다.')
            }
        })
    }

    return (
        <div>
            <Upperbar>
                <Upperbardiv onClick={()=>{
                    navigate('/')
                }}><h1>Logo Design</h1></Upperbardiv>
                <Flexgrow></Flexgrow>
                <Upperbardiv onClick={()=>{
                    navigate('/login')
                }}><h3 style={{fontSize :'18px'}}>로그인</h3></Upperbardiv>
                <Upperbardiv onClick={()=>{
                    navigate('/signup')
                }}><h3 style={{fontSize :'18px'}}>회원가입</h3></Upperbardiv>
            </Upperbar>
            
            <Background>
                {
                    bgstate === false ? 
                    <div>
                    <Signupdiv>
                        <Container>
                            <Wrapper>
                                <InputBox><p className='inputId'>이름</p></InputBox>
                                <Input placeholder='Name' value={name} onChange={onNameHandler}></Input>
                                <InputBox><p className='inputId'>생년월일</p></InputBox>
                                <Input placeholder='990101' value={birth} onChange={onBirthHandler}></Input>
                                <InputDiv>
                                    <InputBox><p className='inputId'>전화번호</p>
                                    </InputBox>
                                    <InputPhone placeholder='Phone number' value={phonenum} onChange={onPhoneNumberHandler}></InputPhone>
                                    <PhoneBtn>인증</PhoneBtn>
                                </InputDiv>
                                    <InputBox><p className='inputId'>이메일</p></InputBox>
                                    <Input placeholder='E-mail' type={"email"} value={email} onChange={onEmailHandler}></Input>
                            </Wrapper>

                            <Wrapper>
                                <InputBox><p className='inputId'>아이디</p></InputBox>
                                <Input placeholder='ID' value={id} onChange={onIDHandler}></Input>
                                <InputBox><p className='inputId'>닉네임</p></InputBox>
                                <Input placeholder='Nickname' value={nickname} onChange={onNicknameHandler}></Input>
                                <InputBox><p className='inputPassword'>비밀번호</p></InputBox>
                                <Input placeholder='Passwords' value={password} onChange={onPasswordHandler}></Input>
                                <InputBox><p className='inputPassword' >비밀번호 확인</p></InputBox>
                                <Input placeholder='Confirm Passwords' value={confirmPassword} onChange={onConfirmPasswordHandler}></Input>
                            </Wrapper>
                        </Container>
                        <Recaptcha></Recaptcha>
                        {
                            bgstate === false ?  <LoginBtn onClick={()=>{
                                setBgstate(true)
                            }}>카테고리 선택하기</LoginBtn> : null
                        }
                    </Signupdiv>
                    </div> : 
                    <Signupdiv2>
                        <h3>좋아하는 카테고리를 선택해주세요</h3>
                        <Container2>
                        { 
                            kategorie.map(function(a,i){
                            return (
                                <KategorieBtn 
                                id={i}
                                onClick={(e)=>{                 
                                    e.target.classList.toggle('active');
                                    console.log(e.target.classList);
                                }
                            }>{a} </KategorieBtn>
                                )
                            }) 
                        }
                        </Container2>
                        <Signupbtn onClick={onSubmitHandler}>회원가입하기</Signupbtn>
                    </Signupdiv2> 
                }
            </Background>
            <Lowerbar></Lowerbar>
        </div>
    )
}

let Upperbar = styled.div`
    width : 100%;
    height : 10vh;
    background-color : black;
    display : flex;
    padding-right : 20px;
    padding-left : 50px;
`
let Lowerbar = styled.div`
    width : 100%;
    height : 10vh;
    background-color : black;
    display : flex;
`
let Upperbardiv = styled.div`
    color : white;
    margin : auto;
    margin-right : 50px;
    h3 {
        font-size : 20px;
    }
`
let Flexgrow = styled.div`
    flex-grow : 1;
`
let Background = styled.div`
    width : 100%;
    height : 80vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg});    
    background-size: cover;
    background-position: center;
    position : relative;
  `
let Signupdiv = styled.div`
    width : auto;
    height : auto;
    margin : auto;
    position : absolute;
    left : 50%;
    top : 45%;
    transform:translate(-50%,-50%);
    background-color : transparent;
    color : white;
    align-items : center;  /* 상하정렬 */
    flex-direction : column; /* 세로정렬 */
    display : flex;
    p {
        margin-bottom : 0;
        margin-top : 30px;
        font-size : 12px;
    }
  `
  let Signupdiv2 = styled.div`
    width : 90%;
    height : auto;
    margin : auto;
    position : absolute;
    left : 50%;
    top : 50%;
    background-color : transparent;
    transform:translate(-50%,-50%);
    color : white;
    align-items : center;  /* 상하정렬 */
    flex-direction : column; /* 세로정렬 */
    display : flex;
    p {
        margin-bottom : 0;
        margin-top : 30px;
        font-size : 12px;
    }
  `

let Container = styled.div`
    background-color : transparent;
    width : auto;
    height : auto;
    padding: 40px;
    display : flex;
`
let Container2 = styled.div`
    background-color : transparent;
    width : auto;
    height : auto;
    padding: 40px;
`
let Wrapper = styled.div`
    background-color : transparent;
    margin : auto;
    width : 200px;
    height : auto;
    margin-right : 50px;
`
  let LoginBtn = styled.button`
  width : 250px;
  height : 60px;
  background : white;
  color : black;
  text-align : center;
  letter-spacing : 1px;
  border-radius : 50px;
  border : none;
  font-size: 14px;
  margin-bottom : 10px;
  font-weight:500;
  transform : scale(0.96);
  margin : 1;
  p {
      margin-bottom : 0; 
  }
  &:hover {
      background-color: #a3a3a3;
      transition: all 0.5s;
  }
  :not(:hover){
      transition : 0.5s;
  }
`
  let Signupbtn = styled.button`
    width : 250px;
    height : 60px;
    background : white;
    color : black;
    text-align : center;
    letter-spacing : 1px;
    border-radius : 50px;
    border : none;
    font-size: 14px;
    margin-bottom : 10px;
    font-weight:500;
    transform : scale(0.96);
    margin : 1;
    p {
        margin-bottom : 0; 
    }
    &:hover {
        background-color: #a3a3a3;
        transition: all 0.5s;
    }
    :not(:hover){
        transition : 0.5s;
    }
  `
  let Recaptcha = styled.button`
    width : 250px;
    height : 60px;
    background : url(${recaptcha});
    bakcground-size : cover;
    background-size: cover;
    background-position: center;
    position : relative;
    border : none;
    margin-bottom : 20px;
  `
  let Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    box-sizing: border-box;
    font-size: 14px;
    height: 50px;
    padding: 10px 0px;
    width: 200px;
    transition : all 0.5s;
    &:focus {
        outline: none;
        border-bottom : 1px solid #646464;
    }
    &focus .inputId {
        color : #646464 ;
    }
`
let InputDiv = styled.div`
    width : 200px;
    height : 68px;
`
let InputPhone = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    box-sizing: border-box;
    font-size: 14px;
    height: 50px;
    float : left;
    padding: 10px 0px;
    width: 150px;
    transition : all 0.5s;
    &:focus {
        outline: none;
        border-bottom : 1px solid #646464;
    }
    &focus .inputId {
        color : #646464 ;
    }
`
let PhoneBtn = styled.button`
    width : 30px;
    height : 20px;
    padding : 0px;
    background : transparent;
    border : 0.7px solid white;
    font-size : 5px;
    float : right;
    position : relative;
    margin-top : 30px;
    border-radius : 5px;
    color : white;
    transition : all 0.5s;
    :hover {
        color : #646464;
        border : 0.7px solid #646464;
    }
    `
let InputBox = styled.div`
    width : 200px;
    height: auto;
    text-align : left;
    transition : all 0.5s;
`
let KategorieBtn = styled.button`
    width : auto;
    height : auto;
    padding : 5px;
    padding-left: 10px;
    padding-right : 10px;
    background : transparent;
    border : 0.7px solid white;
    font-size : 15px;
    display : incline-block;
    border-radius : 5px;
    color : white;
    transition : all 0.5s;
    :hover {
        color : #b1b1b1;
        border : 0.7px solid #b1b1b1;
    }
    &.active {
        color : #646464;
        border : 0.7px solid #646464;
        : hover {
            border : 0.7px solid #b1b1b1;
            color : #b1b1b1;
        }
    }
    margin : 7px;
    `
export default SignupPage;