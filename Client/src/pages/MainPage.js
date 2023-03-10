import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'

import mainPagePhoto0 from "../img/Seoul_mainPage0.jpg";
import mainPagePhoto1 from "../img/Seoul_mainPage1.jpg";
import mainPagePhoto2 from "../img/Seoul_mainPage2.jpg";
import mainPagePhoto3 from "../img/Seoul_mainPage3.jpg";

import left_arrow from "../img/left_arrow.png";
import right_arrow from "../img/right_arrow.png";

import { useNavigate } from 'react-router';


function MainPage() {

  let navigate = useNavigate();
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <MainPageWrapper>
      <TopBar>
        <h1 onClick = {() => {navigate('/')}}>월플</h1>
        <ul>
          <li><h3 style = {{fontSize: '18px'}} onClick = {() => {navigate('/login')}}>로그인</h3></li>
          <li><h3 style = {{fontSize: '18px'}} onClick = {() => {navigate('/signup')}}>회원 가입</h3></li>
        </ul> 
      </TopBar>
      <SliderBar>
        <StyledSlider {...sliderSettings}>
          <SliderComponent background={mainPagePhoto0}>
            <OverLay>
              <h1>서울의 모든 장소</h1>
              <p>숨은 핫 플레이스를 찾아보세요.</p>
            </OverLay>
          </SliderComponent>
          <SliderComponent background={mainPagePhoto1}>
            <OverLay>
              <h1>추억의 장소들, 당신만의 테마로</h1>
              <p>연인과 갔던 감성 있는 카페, 친구와 한 잔 했던 좋은 술집.
                테마 별로 추억의 장소를 저장해 보세요. </p>
            </OverLay>
          </SliderComponent>
          <SliderComponent background={mainPagePhoto2}>
            <OverLay>
              <h1>이 장소는 어땠나요?</h1>
              <p>가 봤던 장소에 대한 느낌과 리뷰를 남겨보세요. </p>
            </OverLay>
          </SliderComponent>
          <SliderComponent background={mainPagePhoto3}>
            <OverLay>
              <h1>다른 사람들은 어디서 추억을 쌓을까요?</h1>
              <p>좋은 장소를 많이 알고 있는 사람들로부터 
                장소 추천을 받아보세요.</p>
            </OverLay>
          </SliderComponent>
        </StyledSlider>
      </SliderBar>
      <BottomBar>
      </BottomBar>
    </MainPageWrapper>
  );
}

export default MainPage

const MainPageWrapper = styled.div`
`;

const TopBar = styled.header`
  background-color: black;
  color: white;
  height: 10vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{ 
    font-size: 1.8em;
    font-weight: bold;
    padding: 30px;
  }

  ul{
    padding: 16px;
    display: flex;
    li {
      margin: 15px;
      button{
        width: 6em;
        height: 2em;
        font-size: 1.3em;
        border-radius: 2em;
      }
    }
  }
`;

const SliderBar = styled.div`
  background-color: black;
`;

const StyledSlider = styled(Slider)`
  .slick-arrow{
    z-index: 10000;
  }


  .slick-prev{
    left: 30px;

  }

  .slick-next{
    right: 30px; 
  }

  .slick-prev:before{
    content: url(${left_arrow});
    font-size: 20px;
  }

  .slick-next:before{
    content: url(${right_arrow});
  }

  .slick-dots{
    bottom: -6rem;
  }

  .slick-dots li{
    width: 30px;
    height: 30px;
    margin: 20px;
  }

  .slick-dots li button:before{
    font-size: 30px;
    line-height: 30px;
    color: white;
  }

  .slick-dots li.slick-active button:before{   
    color: #08c1ce;
  }

  margin: 0;
  padding: 0;
`;

const SliderComponent = styled.div`
  color: white;
  height: 80vh;
  background-image: url(${props => props.background});
  background-size: cover;
  position: relative;

  h1{
    font-weight: bold;
    font-size: 3rem;
    padding: 2rem;
    margin-bottom: 1rem;
  }

  p{
    font-size: 1.2rem;
    padding: 2rem;
  }
`;

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  padding-top: 10rem;
  padding-left: 3rem;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const BottomBar = styled.footer`
  background-color: black;
  color: white;
  height: 10vh;
`;

// asdf