import React from 'react';
import {Container, Content} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import OrderHistoryList from '../components/list/OrderHistoryList';

const MyPageScreen = () => {
  return (
    <Container>
      <Content>
        <OrderHistoryList />
      </Content>
      <NavBarBottom />
    </Container>
  );
};
export default MyPageScreen;
