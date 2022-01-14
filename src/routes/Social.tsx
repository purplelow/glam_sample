import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchSocialFeed } from "../api";
import ImgA from '../assets/img/img1.png';
import InfoImg from '../assets/img/info.png';
import LinkImg from '../assets/img/link.png';

const TodayTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  padding: 15px 0 10px;
`;
const ContentsList = styled.div`

`;
const Contents = styled.div`
  width: 100%;
  height: 550px;
  background: linear-gradient(
    to bottom, 
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0) 50%,
  rgba(20, 20, 20, 0.5) 75%,
  rgba(20, 20, 20, 0.7) 80%,
  rgba(20, 20, 20, 0.9) 90%,
  rgba(20, 20, 20, 1) 100%
  ), url(${ImgA});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
  z-index: 8;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  position: absolute;
  bottom: 0;
`;
const UserNameAge = styled.span`
  color: #fff;
  font-weight: 900;
  display: block;
  padding: 10px 20px;
  width: 100%;
`;
const UserFunctionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px auto;
`;
const UserType = styled.span`
  background-color: #2c3e50;
  color: #fff;
  padding: 10px;
  margin: 0 5px 5px;
  font-size: 13px;
  border-radius: 10px;
`;
const LikeBtn = styled.button`
  width: 60%;
  height: 40px;
  background-color: #ff7675;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  margin-left: 10px;
`;
const RejectedBtn = styled(LikeBtn)`
  width: 40px;
  background-color: #7f8c8d;
  border-radius: 10px;
  color: #fff;
  font-weight: 900;
`;
const LinkBtn = styled(RejectedBtn)`
  background-color: #ff7675;
  background-image: url(${LinkImg});
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
`;

interface IUsers {
  id: string,
  name: string,
  age: number,
  typeA: string,
  typeB: string,
  typeC: string,
}

function Social() {
  const { isLoading, data } = useQuery<IUsers[]>("user", fetchSocialFeed);
  // console.log(fetchSocialFeed());
  // const [loading, setLoading] = useState(true)
  // const [userInfo, setUserInfo] = useState<IUsers[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://localhost:3000/users");
  //     const json = await response.json();
  //     setUserInfo(json);
  //     setLoading(false);
  //     console.log(json);
  //   })();
  // }, [])
  
  // ==============if json-server = false => replace sample data 
  const data1 =[
      {
        "id": "userA",
        "name": "도깨비",
        "age": 903,
        "typeA": "웃음이 많아요",
        "typeB": "잘 놀아요",
        "typeC": "자유로워요"
      },
      {
        "id": "userB",
        "name": "저승사자",
        "age": 901,
        "typeA": "웃음이 없어요",
        "typeB": "혼자 잘 놀아요",
        "typeC": "예의가 발라요"
      },
      {
        "id": "userC",
        "name": "사람",
        "age": 33,
        "typeA": "운동을 좋아해요",
        "typeB": "사람들과 잘 어울려요",
        "typeC": "매너와 센스, 유머를 겸비하고 있어요"
      }
    ];
  
  return (
    <>
      {/* 메인 피드 */}
      <TodayTitle>오늘의 추천</TodayTitle>
      {/* {isLoading ? (
        "Loading..."
      ) : ( */}
        <ContentsList>
          {data1?.map((user) => (
            <Contents key={user.id}>
              <UserInfoWrapper>
                <UserNameAge>
                  {user.name}, &nbsp;{user.age} &nbsp;<img src={InfoImg} height="15" />
                </UserNameAge>
                <UserType>{user.typeA}</UserType>
                <UserType>{user.typeB}</UserType>
                <UserType>{user.typeC}</UserType>
                <UserFunctionWrapper>
                  <RejectedBtn>X</RejectedBtn>
                  <LikeBtn>좋아요</LikeBtn>
                  <LinkBtn></LinkBtn>
                </UserFunctionWrapper>
              </UserInfoWrapper>
            </Contents>
          ))}
        </ContentsList>
      {/* )} */}
        
    </>
  );
}

export default Social;