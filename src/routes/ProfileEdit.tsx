import styled from 'styled-components';
import MenuTab from '../components/MenuTab';

const Container = styled.div`
  padding: 60px 0 80px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 20px 5px;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #ecf0f1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h2`
  width: 100%;
  color: #333;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;
const ProfileImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 350px;
`;
const ProfileImg = styled.li`
  width: 110px;
  height: 110px;
  background-color: ${(props) => props.theme.tabBgColor};
  &:first-child, &:nth-child(2), &:nth-child(3){
    margin-bottom: 5px;
  }
  &:nth-child(2), &:nth-child(5){
    margin: 0 5px;
  }
`;
const ProfileImgInfoText = styled.span`
  display: block;
  text-align: center;
  padding: 17px 5px;
  font-size: 12px;
  a{
    font-weight: 700;
    color: #343434;
  }
  border-bottom: 1px solid #eee;
`;
const UserProfileList = styled.ul`
  max-width: 400px;
  border-bottom: 1px solid #eee;
`;
const UserProfile = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  font-size: 14px;
`;
const UserProfileTitle = styled.span`
  width: 35%;
  color: ${(props) => props.theme.accentColor};
  padding: 15px 0 15px 35px;
`;
const UserProfileTxt = styled.span`

`;
const UserIntro = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  resize: none;
  outline: none;
  position: relative;
  padding: 5px 15px;
`;
const UserIntroInfoText = styled(ProfileImgInfoText)`
  padding: 0 15px 15px;
`;

// const ProfileImages

function ProfileEdit() {
  return (
    <>
      <Container>
        <Header>
          <Title>프로필 수정</Title>
        </Header>
        <ProfileImgList>
          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>
          
          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>
          
          <ProfileImg></ProfileImg>
        </ProfileImgList>
        <ProfileImgInfoText>
          얼굴이 선명히 보이는 사진으로 올려주세요 
          <a href='#'> 더 알아보기</a>
        </ProfileImgInfoText>
        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>닉네임</UserProfileTitle>
            <UserProfileTxt>J</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>성별</UserProfileTitle>
            <UserProfileTxt>남성</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>생일</UserProfileTitle>
            <UserProfileTxt>1990-03-24</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>위치</UserProfileTitle>
            <UserProfileTxt>서울</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>소개</UserProfileTitle>
            <UserProfileTxt></UserProfileTxt>
            <UserIntro placeholder='회원님의 매력을 간단하게 소개해주세요'></UserIntro>
            <UserIntroInfoText>
              SNS 아이디 등 연락처 입력 시 서비스 이용이 제한됩니다
            </UserIntroInfoText>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>키</UserProfileTitle>
            <UserProfileTxt>185cm</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>체형</UserProfileTitle>
            <UserProfileTxt>근육질</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>직장</UserProfileTitle>
            <UserProfileTxt>입력해주세요</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>직업</UserProfileTitle>
            <UserProfileTxt>IT 관련직</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>학력</UserProfileTitle>
            <UserProfileTxt>대학교</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>학교</UserProfileTitle>
            <UserProfileTxt>예술대</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>성격</UserProfileTitle>
            <UserProfileTxt>성실한,할발한,웃긴</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>종교</UserProfileTitle>
            <UserProfileTxt>무교</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>음주</UserProfileTitle>
            <UserProfileTxt>가끔</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>흡연</UserProfileTitle>
            <UserProfileTxt>안함</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>혈액형</UserProfileTitle>
            <UserProfileTxt>선택해주세요</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>인종</UserProfileTitle>
            <UserProfileTxt>선택해주세요</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

      </Container>

      {/* 공통 하단 메뉴탭 */}
      <MenuTab />
    </>
  );
}

export default ProfileEdit;