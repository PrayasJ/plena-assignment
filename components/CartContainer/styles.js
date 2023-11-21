import { StyleSheet } from "react-native";

import { globalStyles } from "../../globalStyles";

export const styles = StyleSheet.create({
  cart: {
		height: '100%',
		width: '100%',
		justifyContent: 'space-between',
	},
  itemContainer: {
		width: '100%',
	},
  amountBox: {
    borderRadius: 30,
    backgroundColor: '#F8F9FB',
    marginHorizontal: 8,
    marginTop: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 36,
    paddingBottom: 13,
  },
  amountLabel: {
    ...globalStyles.bodyStyle_2,
    ...globalStyles.regularStyle,
    color: '#616A7D',
    lineHeight: 20,
  },
  amountValue: {
    ...globalStyles.bodyStyle_2,
    ...globalStyles.mediumStyle,
    color: '#1E222B',
    lineHeight: 20,
    fontWeight: 500,
  },
  checkOutButton: {
    
    borderRadius: 20,
    backgroundColor: '#2A4BA0',
    
    marginTop: 22,
    marginHorizontal: 16,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkOutText: {
    ...globalStyles.buttonStyle,
    ...globalStyles.boldStyle,
    fontWeight: 600,
    color: '#fff',
  }
});
