import styled from 'styled-components';
import Bg from '../img/Seoul_mainPage0.jpg';
import { useNavigate } from 'react-router-dom';

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
    top : 50%;
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
let Container = styled.div`
    background-color : transparent;
    width : auto;
    height : auto;
    padding: 40px;
    display : flex;
`

let Wrapper = styled.div`
    background-color : transparent;
    margin : auto;
    width : 200px;
    height : auto;
    margin-right : 50px;
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
    position : absolute;
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

function FindIDPage(){
    let navigate = useNavigate()

    return (
        <div>
            <Upperbar>
                <Upperbardiv><h1>Logo Design</h1></Upperbardiv>
                <Flexgrow></Flexgrow>
                <Upperbardiv onClick={()=>{
                    navigate('/login')
                }}><h3 style={{fontSize :'18px'}}>로그인</h3></Upperbardiv>
                <Upperbardiv onClick={()=>{
                    navigate('/signup')
                }}><h3 style={{fontSize :'18px'}}>회원가입</h3></Upperbardiv>
            </Upperbar>
            
            <Background>
                <Signupdiv>
                <Container>
                    <Wrapper>
                        <InputBox><p className='inputId'>이름</p></InputBox>
                        <Input placeholder='Name'></Input>
                        <InputBox><p className='inputId'>생년월일</p></InputBox>
                        <Input placeholder='990101'></Input>
                        <InputDiv>
                            <InputBox><p className='inputId'>전화번호</p>
                            </InputBox>
                            <InputPhone placeholder='Phone number'></InputPhone>
                            <PhoneBtn>인증</PhoneBtn>
                        </InputDiv>
                        <InputBox><p className='inputId'>비밀번호 재설정</p></InputBox>
                        <Input placeholder='Password' type={"password"}></Input>
                        <InputBox><p className='inputId'>비밀번호 확인</p></InputBox>
                        <Input placeholder='Confirm Password' type={"password"}></Input>
                    </Wrapper>
                </Container>
                <Signupbtn onClick={()=>{
                    navigate('.././Login')
                }}>비밀번호 변경</Signupbtn>
                </Signupdiv>
            </Background>
            <Lowerbar></Lowerbar>
        </div>
    )
}


export default FindIDPage;