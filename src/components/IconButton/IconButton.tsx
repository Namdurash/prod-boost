import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

import type { TouchableOpacityProps } from 'react-native';

export const IconButton = ({ iconComponent, ...props }: IconButtonProps) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      {iconComponent}
    </TouchableOpacity>
  );
};

export interface IconButtonProps extends TouchableOpacityProps {
  iconComponent: React.ReactNode;
}
