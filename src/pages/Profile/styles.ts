import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  padding: 0 30px ${ Platform.OS === 'android' ? 150 : 40 }px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${ getStatusBarHeight() + 5 }px;
`;

export const Title = styled.Text`
  text-align:center
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 14px 0 14px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;