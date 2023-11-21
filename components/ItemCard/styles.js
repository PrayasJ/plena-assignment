import { StyleSheet } from "react-native";
import { globalStyles } from '../../globalStyles'

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F8F9FB',
		width: '45%',
		borderRadius: 12,
		padding: 13,
  },
	imageContainer: {
		width: '100%',
		position: 'relative',
		height: 150,
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 120,
		width: '90%',
		margin: 8,
		marginTop: 24,
		borderRadius: 6,
	},
	favouriteContainer: {

	},
	favouriteImage: {
		width: 14.55,
		height: 13.35,
	},
	infoContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between'

	},
	mainInfo: {
		width: '70%'
	},
	price: {
		...globalStyles.semiboldStyle,
		...globalStyles.bodyStyle_2,
		color: '#1E222B',
		lineHeight: 20,
	},
	title: {
		...globalStyles.regularStyle,
		...globalStyles.labelStyle,
		color: '#616A7D',
		letterSpacing: 0.24,
		lineHeight: 16,
	},
	addContainer: {

	},
	addImage: {
		width: 24,
		height: 24,
	}
});
