import { StyleSheet } from 'react-native';

import { COLORS } from '@app/constants/Colors';
import { FONTS } from '@app/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.deepTeal,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontFamily: FONTS.FunnelSans['300'],
    color: COLORS.pureWhite,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  rewardTokensText: {
    fontFamily: FONTS.FunnelSans['300'],
    color: COLORS.pureWhite,
    fontSize: 16,
    marginRight: 4,
  },
});
