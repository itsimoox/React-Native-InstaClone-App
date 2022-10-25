import styled from 'styled-components';
import { Pressable, Text } from 'react-native';
import { bgColor, hPadding, mainColor, textColor } from '../utils/constants';
import { Hr, Icon, Post, Tabs } from '../components';
import { posts } from '../utils/data';

const HomeScreen = () => {
  return (
    <Screen>
      <Header>
        <HeaderTxt>InstaClone<Text style={{color: mainColor}}>.</Text></HeaderTxt>
        <Icons>
          <Pressable onPress={() => console.log("Hello")}>
            <Icon name="bell" />
          </Pressable>
          <Pressable onPress={() => console.log("Hello")} style={{marginLeft: 20}}>
            <Icon name="message" />
          </Pressable>
        </Icons>
      </Header>
      <Hr />
      <Scroll showsVerticalScrollIndicator={false}>
        {posts.map((post, idx) => <Post key={idx} post={post} />)}
      </Scroll>
    <Tabs active="Home" />
    </Screen>
  );
}

export default HomeScreen;

const Screen = styled.View`
  flex: 1;
  background-color: ${bgColor};
  padding: 0 ${hPadding}px;
  position: relative;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderTxt = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 28px;
  color: ${textColor};
  margin: 10px 0;
`;
const Icons = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Scroll = styled.ScrollView`
`;