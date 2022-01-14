import { useEffect, useState } from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { fetchSocialFeed } from '../api';
import MenuTab from '../components/MenuTab';
import Social from './Social';
import Near from './Near';
import Feed from './Feed';

const Container = styled.div`
  padding: 60px 10px 80px;
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
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.bgColor};
`;
const HeaderTabList = styled.ul`
  display: flex;
  width: 100%;
`;
const Headertab = styled.li<{ isActive: boolean }>`
  padding: 8px 10px;
  border-bottom: ${(props) => props.isActive ? props.theme.activeBorder : null};
  a {
    font-size: 20px;
    font-weight: ${(props) => props.isActive ? props.theme.activeFont : props.theme.normalFont};
    text-align: center;
    color: ${(props) => props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
`;

function SocialMain() {
  const thisMatch = useRouteMatch("/social_sample");
  const nearMatch = useRouteMatch("/near");
  const feedMatch = useRouteMatch("/feed");
  return (
    <>
      <Container>
        <Header>
          <HeaderTabList>
            <Headertab isActive={thisMatch !== null}>
              <Link to={`/social_sample`}>
                Social
              </Link>
            </Headertab>

            <Headertab isActive={nearMatch !== null}>
              <Link to={`/near`}>
                근처
              </Link>
            </Headertab>

            <Headertab isActive={feedMatch !== null}>
              <Link to={`/feed`}>
                피드
              </Link>
            </Headertab>
          </HeaderTabList>
        </Header>
        <Switch>
          <Route path={`/social_sample`}>
            <Social />
          </Route>
          <Route path={`/near`}>
            <Near />
          </Route>
          <Route path={`/feed`}>
            <Feed />
          </Route>
        </Switch>
      </Container>

      {/* 공통 하단 메뉴탭 */}
      <MenuTab />
    </>
  );
}

export default SocialMain;