import React from 'react'
import Axios from '../utils/Axios';
import { useNavigate } from 'react-router-dom';
function MapPage() {
    let navigate = useNavigate()
    const onClickHandler = () => {
        Axios.get('/logout')
        .then(response => {
            if (response.data.logoutSuccess) {
                navigate('/login');
            } else {
                alert('로그아웃에 실패');
            }
            
        })
    }
    return (
        <div style ={{
            display : 'flex', justifyContent : 'center', alignItems: 'center',
            width : '100%', height : '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick = {onClickHandler}>로그아웃</button>
        </div>
    )
}

export default MapPage