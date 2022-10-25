import styled from "styled-components";
import { Icon } from ".";
import { compColor, hPadding, textColor } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const Post = ({post}) => {
  const {navigate} = useNavigation();
  const {width} = Dimensions.get('window');
  const postImgWidth = Math.round(width - (hPadding * 2 + 40));
  const postImgHeight = (postImgWidth * post.imageSize[1]) / post.imageSize[0];
  return (
    <View>
      <Header>
        <UserInfo onPress={() => navigate("Profile")}>
          <UserImg source={post.userImg} />
          <Username>{post.username}</Username>
          <Icon name="verify" />
        </UserInfo>
        <Icon name="dots" />
      </Header>
      <Image width={postImgWidth} height={postImgHeight} source={post.image} style={{resizeMode: 'cover'}} />
      <Actions>
        <Right>
          <Icon name="heart" />
          <Icon name="comment" />
          <Icon name="send" />
        </Right>
        <Icon name="save" />
      </Actions>
      <Caption>
        <CapUser>{post.username}</CapUser>
        <CapComment>{post.caption}</CapComment>
      </Caption>
    </View>
  )
}

export default Post;

const View = styled.View`
  padding: 20px;
  width: 100%;
  background-color: ${compColor};
  border-radius: 20px;
  margin-top: 20px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;
const UserImg = styled.Image`
  border-radius: 100px;
  aspect-ratio: 1;
  width: 40px;
`;
const Username = styled.Text`
  color: ${textColor};
  font-family: Poppins-SemiBold;
  margin: 0 10px;
`;
const Image = styled.Image`
  border-radius: 20px;
  margin: 20px 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  align-self: center;
`;
const Actions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;
const Caption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
const CapUser = styled.Text`
  font-family: Poppins-SemiBold;
  color: ${textColor};
  margin-right: 10px;
`;
const CapComment = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 10px;
  color: #DDDDDD;
`;