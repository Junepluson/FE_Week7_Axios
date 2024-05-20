import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;  
  width: 100%;
  position: relative;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;   
  align-items: center;
  justify-content: center;  
  width: 60%;
  position: relative;
`;

const Home = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=1&per_page=9`)
             .then(res => {
                setUserInfo(res.data.data);
             })
             .catch(err => {
                console.error(err);
             });
    }, []);

    return (
        <>
            <Title>
            <h1>Home Page</h1>    
            </Title>
            <CardWrapper>
                {userInfo.map(user => (
                    <Card key={user.id} img={user.avatar} name={`${user.first_name} ${user.last_name}`} id={user.id} />
                ))}
            </CardWrapper>
            <Link to="/menu">메뉴 페이지로 고고</Link>
        </>
    );
};

export default Home;