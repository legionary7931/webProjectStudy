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
  let Sidebar = styled.div`
    width : 15vw;
    height : 100%;
    background-color: black;
    background-color: rgba( 0, 0, 0, 0.5 );
    position : absolute;
    left :0;
    display:flex;
    flex-direction : column; /* 세로정렬 */
    color : white;
    padding : 20px;
    h1 {
        margin : 10px;
        margin-bottom : 20px;
        font-size : 20px;
    }
  `
  let Rightbox = styled.div`
    width : 85vw;
    height : 100%;
    position :absolute;
    right:0;
  `
  let MenuTab = styled.div`
    width : 100%;
    height : auto;
    margin : 10px;
    margin-bottom : 20px;
    font-size : 15px;
  `
  let Container = styled.div`
    background-color : transparent;
    width : auto;
    height : auto;
    padding: 40px;
    display : flex;
`
let InputBox = styled.div`
    width : 200px;
    height: auto;
    text-align : left;
    transition : all 0.5s;
`
let Wrapper = styled.div`
    background-color : transparent;
    margin : auto;
    width : 200px;
    height : auto;
    margin-right : 50px;
`
let UserInform = styled.div`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    box-sizing: border-box;
    font-size: 14px;
    height: 50px;
    padding: 20px 0px;
    width: 200px;
    letter-spacing : 0.5px;
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
  let InputDiv = styled.div`
    width : 200px;
    height : 68px;
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
// let InputDiv = styled.div`
// width : 200px;
// height : 68px;
// `
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
// let InputBox = styled.div`
// width : 200px;
// height: auto;
// text-align : left;
// transition : all 0.5s;
// `

function Modify(){
    let navigate = useNavigate()

    return(
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
        <Sidebar>
        <MenuTab onClick={()=>{navigate('/userprofile')}}>내 정보</MenuTab>
            <MenuTab>영수증</MenuTab>
            <MenuTab onClick={()=>{navigate('/modify')}}>비밀번호 변경하기</MenuTab>
            <MenuTab onClick={()=>{navigate('/myposting')}}>내 게시물</MenuTab>
        </Sidebar>
        <Rightbox>
        <Signupdiv>
                <Container>
                    <Wrapper>
                        <InputBox><p className='inputId'>이름</p></InputBox>
                        <Input placeholder='Name'></Input>
                        <InputBox><p className='inputId'>생년월일</p></InputBox>
                        <Input placeholder='990101'></Input>
                        <InputBox><p className='inputId'>비밀번호 재설정</p></InputBox>
                        <Input placeholder='Password' type={"password"}></Input>
                        <InputBox><p className='inputId'>비밀번호 확인</p></InputBox>
                        <Input placeholder='Confirm Password' type={"password"}></Input>
                    </Wrapper>
                </Container>
                <Signupbtn onClick={()=>{
                    navigate('.././userprofile')
                }}>비밀번호 변경</Signupbtn>
                </Signupdiv>
        </Rightbox>
    </Background>
    <Lowerbar></Lowerbar>
    </div>
    )
}

export default Modify;