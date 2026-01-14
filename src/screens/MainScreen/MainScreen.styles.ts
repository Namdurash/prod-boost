import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/Fonts";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tealGreen,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: FONTS.FunnelSans['600'],
    fontSize: 24,
    color: COLORS.mintWhite,
    alignSelf: 'center'
  },
  totalTokensContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  manageTokensPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  totalTokensText: {
    fontFamily: FONTS.FunnelSans['400'],
    fontSize: 50,
    color: COLORS.mintWhite,
    alignSelf: 'center'
  },
  tasksHeading: {
    fontFamily: FONTS.FunnelSans['400'],
    fontSize: 18,
    color: COLORS.softAquamarine,
  },
  text: {
    fontFamily: FONTS.FunnelSans['600'],
    fontSize: 18,
    color: 'red',
  },
  tasksHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskListContainer: {
    gap: 8,
  }
})