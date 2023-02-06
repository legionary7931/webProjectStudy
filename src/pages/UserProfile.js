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
let UserBox = styled.div`
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
function UserProfile(){
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
            <MenuTab onClick={()=>{navigate('/modify')}}>정보 변경하기</MenuTab>
            <MenuTab onClick={()=>{navigate('/myposting')}}>내 게시물</MenuTab>
        </Sidebar>
        <Rightbox>
        <Signupdiv>
                <Container>
                    <Wrapper>
                        <UserBox><p className='inputId'>이름</p></UserBox>
                        <UserInform>이재겸</UserInform>
                        <UserBox><p className='inputId'>생년월일</p></UserBox>
                        <UserInform>971229</UserInform>
                        <InputDiv>
                            <UserBox><p className='inputId'>전화번호</p>
                            </UserBox>
                            <UserInform>010-3967-5367</UserInform>
                        </InputDiv>
                        <UserBox><p className='inputId'>이메일</p></UserBox>
                        <UserInform>thfpdhk1@gmail.com</UserInform>
                        <UserBox><p className='inputId'>닉네임</p></UserBox>
                        <UserInform>천둥집사</UserInform>
                    </Wrapper>
                </Container>
                </Signupdiv>
        </Rightbox>
    </Background>
    <Lowerbar></Lowerbar>
    </div>
    )
}

export default UserProfile;