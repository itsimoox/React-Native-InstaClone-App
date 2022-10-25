import styled from 'styled-components';
import { Pressable } from 'react-native';
import { bgColor } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { View as V } from 'react-native';
import { Icon } from '.';

const Tabs = () => {
  const {navigate} = useNavigation();
  return (
    <V>
      <View>
        <Pressable onPress={() => navigate('Home')}>
          <Icon name="home" />
        </Pressable>
        <Pressable onPress={() => navigate('Wishlist')}>
          <Icon name="search" />
        </Pressable>
        <Pressable onPress={() => navigate('Cart')}>
          <Icon name="camera" />
        </Pressable>
        <Pressable onPress={() => navigate('Settings')}>
          <Icon name="user" />
        </Pressable>
      </View>
    </V>
  );
}

export default Tabs;

const View = styled.View`
  width: 100%;
  position: absolute;
  bottom: 20px;
  height: 75px;
  background-color: #ccc;
  background-color: ${bgColor};
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  opacity: 1.88;
`;