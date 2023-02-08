import styled from 'styled-components';
import Bg from '../img/Seoul_mainPage0.jpg';
import { useNavigate } from 'react-router-dom';

let Upperbar = styled.div`
    width : 100%;
    height : 10vh;
    background-color : black;
    display : flex;
    padding : 10px;
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
        font-size : 18px;
    }
`
let Flexgrow = styled.div`
    flex-grow : 1;
`
let Background = styled.div`
    width : 100%;
    height : 80vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg});    background-size: cover;
    background-position: center;
    position : relative;
  `
  let LoginDiv = styled.div`
    width : 350px;
    height : 500px;
    margin : auto;
    position : absolute;
    left : 50%;
    top : 50%;
    transform:translate(-50%,-50%);
    background-color : transparent;
    color : white;
    display : flex;
    flex-direction : column; /* 세로정렬 */
    justify-content : center;  /* 좌우정렬 */
    h3 {
        margin-top : 20px;
        margin-bottom : 20px;
        letter-spacing : 3px;
    }
  `
  let LoginBtn = styled.button`
    width : 250px;
    height : 60px;
    background : white;
    color : black;
    text-align : center;
    letter-spacing : 5px;
    border-radius : 50px;
    border : none;
    font-size: 14px;
    margin-bottom : 10px;
    font-weight:500;
    transform : scale(0.96);
    margin : auto;
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
  let Wrapper = styled.div`
    background-color: transparent;
    border-radius: 2px;
    box-sizing: border-box;
    height: 230px;
    left: 50%;
    width: 200px;
    margin : auto;
    p {
        margin-bottom : 0;
        margin-top : 30px;
        font-size : 12px;
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
let InputBox = styled.div`
    width : 200px;
    height: 30px;
    text-align : left;
    transition : all 0.5s;
`
function LoginPage(){
    let navigate = useNavigate()
    return (
        <div>
            <Upperbar>
                <Upperbardiv onClick={()=>{
                    navigate('/')
                }}><h1>Logo Design</h1></Upperbardiv>
                <Flexgrow></Flexgrow>
                <Upperbardiv onClick={()=>{
                    navigate('/login')
                }}><h3>로그인</h3></Upperbardiv>
                <Upperbardiv onClick={()=>{
                    navigate('/signup')
                }}><h3>회원가입</h3></Upperbardiv>
            </Upperbar>

            <Background>
                <LoginDiv>
                    <h3 style={{margin : 'auto'}}>LOGO DESIGN</h3>
                    <Wrapper>
                        <form action="~~">
                            <InputBox><p className='inputId'>아이디</p></InputBox>
                            <Input placeholder='ID'></Input>
                            <p></p>
                            <InputBox><p className='inputPassword'>비밀번호</p></InputBox>
                            <Input placeholder='Passwords' type={"password"}></Input>
                        </form>
                    </Wrapper>
                    <LoginBtn onClick={()=>{
                        navigate('.././')
                        }}>로그인</LoginBtn>
                    <LoginBtn onClick={()=>{
                        navigate('.././findID')
                        }}>비밀번호 찾기</LoginBtn>
                </LoginDiv>
            </Background>
            <Lowerbar></Lowerbar>
        </div>
    )
}

export default LoginPage;