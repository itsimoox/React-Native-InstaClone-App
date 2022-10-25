import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable } from 'react-native';
import styled from 'styled-components';
import { Hr, Icon } from '../components';
import { bgColor, compColor, hPadding, mainColor, textColor } from '../utils/constants';
import { posts } from '../utils/data';

const ProfileScreen = () => {
  const post = posts[0];
  const {goBack} = useNavigation();
  const {width} = Dimensions.get('window');
  const postImgWidth = Math.round(width - (hPadding * 2 + 40)) / 2 - 10;
  return (
    <Screen>
      <Header>
        <Pressable onPress={() => goBack()}>
          <Icon name="back" />
        </Pressable>
        <Username>
          {post.username}
          <Icon name="verify" />
        </Username>
        <Pressable onPress={() => console.log('Dots !!')}>
          <Icon name="dots" />
        </Pressable>
      </Header>
      <Hr />
      <Scroll showsVerticalScrollIndicator={false}>
        <Top>
          <UserInfo>
            <UserImg source={post.userImg} />
            <Texts>
              <Name>JISOO🤍</Name>
              <Link>youtu.be/dyRsYk0LyA8</Link>
            </Texts>
          </UserInfo>
          <Details>
            <Section>
              <Number>{posts.length}</Number>
              <Subject>Posts</Subject>
            </Section>
            <Section>
              <Number>65.1 M</Number>
              <Subject>Followers</Subject>
            </Section>
            <Section>
              <Number>0</Number>
              <Subject>Following</Subject>
            </Section>
          </Details>
          <Buttons>
            <Message>
              <BtnText>Message</BtnText>
            </Message>
            <Following>
              <BtnText>Following</BtnText>
            </Following>
          </Buttons>
        </Top>
        <Posts>
          <PostsSide>
            {posts.map((post, idx) => (
              idx % 2 === 0 &&
              <Image key={idx} style={{width: postImgWidth, height: (postImgWidth * post.imageSize[1]) / post.imageSize[0]}} source={post.image} />
            ))}
          </PostsSide>
          <PostsSide style={{alignItems: 'flex-end'}}>
            {posts.map((post, idx) => (
              idx % 2 === 1 &&
              <Image key={idx} style={{width: postImgWidth, height: (postImgWidth * post.imageSize[1]) / post.imageSize[0]}} source={post.image} />
            ))}
          </PostsSide>
        </Posts>
      </Scroll>
    </Screen>
  )
}

export default ProfileScreen;

const Screen = styled.View`
  flex: 1;
  background-color: ${bgColor};
  border-top: 1px solid #D9D9D9;
  padding: 0 ${hPadding}px;
`;
const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${bgColor};
  padding: 20px 0;
`;
const Username = styled.Text`
  font-size: 16px;
  flex-direction: row;
  font-family: Poppins-SemiBold;
  color: ${textColor};
  align-items: center;
`;
const Scroll = styled.ScrollView`

`;
const Top = styled.View`
  margin: 20px 0;
`;
const UserInfo = styled.View`
  flex-direction: row;
`;
const Texts = styled.View`

`;
const UserImg = styled.Image`
  border-radius: 100px;
  width: 70px;
  aspect-ratio: 1;
  margin-right: 20px;
`;
const Name = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  color: ${textColor};
  `;
const Link = styled.Text`
  font-family: Poppins-Regular;
  font-size: 12px;
  color: ${mainColor};
`;
const Details = styled.View`
  width: 100%;
  background-color: ${compColor};
  border-radius: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  margin: 20px 0;
`;
const Section = styled.View`
  align-items: center;
`;
const Number = styled.Text`
  font-family: Poppins-Bold;
  font-size: 16px;
  color: ${textColor};
  `;
const Subject = styled.Text`
  font-family: Poppins-Medium;
  font-size: 14px;
  color: #DDDDDD70;
`;
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Message = styled.Pressable`
  width: 48%;
  align-items: center;
  justify-content: center;
  background-color: ${compColor};
  padding: 15px 30px;
  border-radius: 100px;
  `;
  const Following = styled.Pressable`
  width: 48%;
  align-items: center;
  justify-content: center;
  background-color: ${mainColor};
  padding: 15px 30px;
  border-radius: 100px;
`;
const BtnText = styled.Text`
  color: ${textColor};
  font-family: Poppins-Medium;
  margin-top: 1px;
`;

const Posts = styled.View`
  width: 100%;
  background-color: ${compColor};
  border-radius: 20px;
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
const Image = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;
const PostsSide = styled.View`
  flex: 1;
`;