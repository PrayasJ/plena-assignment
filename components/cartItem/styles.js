import { StyleSheet } from "react-native";

import { globalStyles } from "../../globalStyles";

export const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 25,
		paddingVertical: 16,
		borderBottomColor: '#EBEBFB',
		borderBottomWidth: 1
	},
  infoContainer: {
		flexDirection: 'row',
		width: '60%',
		alignItems: 'center',
	},
  image: {
		height: 50,
		width: 75,
		borderRadius: 6,
		marginRight: 12
	},
  detailContainer: {
		width: '70%'
	},
  title: {
		...globalStyles.bodyStyle_2,
		...globalStyles.semiboldStyle,
		color: '#1E222B',
		textWrap: 'balance',
	},
  price: {
		...globalStyles.bodyStyle_2,
		...globalStyles.regularStyle,
		color: '#1E222B',
		lineHeight: 20,
	},
  countContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
  countBtnContainer: {},
  countBtnImage: {
		width: 40,
		height: 40,
	},
  countValue: {
		...globalStyles.bodyStyle_2,
		...globalStyles.semiboldStyle,
		color: '#1E222B',
		paddingHorizontal: 13,
	},
});
