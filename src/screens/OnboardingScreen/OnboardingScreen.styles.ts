import { StyleSheet } from 'react-native';

import { COLORS } from '@app/constants/Colors';
import { FONTS } from '@app/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.teal,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    color: COLORS.mintWhite,
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: FONTS.FunnelSans['700'],
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.softAquamarine,
    textAlign: 'center',
    marginBottom: 48,
    fontFamily: FONTS.FunnelSans['300'],
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: FONTS.FunnelSans['600'],
    color: COLORS.mintWhite,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.paleMint,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.deepTeal,
  },
  buttonContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
});
