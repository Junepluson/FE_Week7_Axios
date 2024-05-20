import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';


const Info = styled.div`
  margin-top: 20px; // 사진과 텍스트 사이의 여백을 추가합니다.
`;

const User = () => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id: 0,
        last_name: "",
    });

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userId}`)
             .then(res => {
                setUserInfo(res.data.data);
             })
             .catch(err => {
                console.error(err);
             });
    }, [userId]);

    //if (!user) return null;  // 로딩 상태 제거 및 데이터 없을 시 아무 것도 표시하지 않음

    return (
        <>
            <h1>User Information</h1>
            <img src={userInfo.avatar} alt={`${userInfo.first_name} ${userInfo.last_name}`} />
            <Info>
                <h2>{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                <p>Email: {userInfo.email}</p>
            </Info>
        </>
    );
};

export default User;
