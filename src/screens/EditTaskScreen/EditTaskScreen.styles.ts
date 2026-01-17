import { StyleSheet } from 'react-native';

import { COLORS } from '@app/constants/Colors';
import { FONTS } from '@app/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tealGreen,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: FONTS.FunnelSans['300'],
    color: COLORS.mintWhite,
    fontSize: 24,
  },
  formContainer: {
    justifyContent: 'center',
    gap: 16,
    flexGrow: 1,
  },
  inputContainer: {
    backgroundColor: COLORS.softAquamarine,
    padding: 16,
    borderRadius: 16,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});
