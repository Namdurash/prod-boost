import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tealGreen,
    paddingHorizontal: 16,
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
