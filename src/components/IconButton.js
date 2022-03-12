import React from 'react';
import {Image, Pressable} from 'react-native';
import colors from '../config/colors';

function IconButton({src, onPress}) {
  return (
    <Pressable
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 5,
        height: 60,
        width: 100,
      }}
      onPress={onPress}>
      <Image source={src} height={50} width={50} />
    </Pressable>
  );
}

export default IconButton;
