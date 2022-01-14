
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from '../assets/img/home.png';
import liveIcon from '../assets/img/live.png';
import likeIcon from '../assets/img/like.png';
import chatIcon from '../assets/img/chat.png';
import profileIcon from '../assets/img/profile.png';

const MenuTabWraper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  max-width: 480px;
  padding: 10px 0 30px;
  border-top: 1px solid #ecf0f1;
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
`;
const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.li`
  width: 20%;
  height: 40px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

function MenuTab() {

return (
    <>
      <MenuTabWraper>
        <MenuList>
          <Menu>
            <Link to={{
              pathname: `/social_sample`,
            }}>
              <img src={homeIcon} height="25"/>
            </Link>
          </Menu>

          <Menu>
            <Link to={{
              pathname: `/social/userId.Live`,
            }}>
              <img src={liveIcon} height="25"/>
            </Link>
          </Menu>

          <Menu>
            <Link to={{
              pathname: `/social/userId.Like`,
            }}>
              <img src={likeIcon} height="25"/>
            </Link>
          </Menu>

          <Menu>
            <Link to={{
              pathname: `/social/userId.Chat`,
            }}>
              <img src={chatIcon} height="25"/>
            </Link>
          </Menu>

          <Menu>
            <Link to={{
              pathname: `/userId.ProfileEdit`,
            }}>
              <img src={profileIcon} height="25"/>
            </Link>
          </Menu>
        </MenuList>
      </MenuTabWraper>
    </>
  );
}

export default MenuTab;