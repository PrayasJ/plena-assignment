import { StyleSheet } from "react-native";
import { globalStyles } from '../../globalStyles'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    titleNormal: {
        ...globalStyles.regularStyle,
        fontSize: 50,
        fontWeight: 300,
        color: '#1E222B',
        paddingHorizontal: 20,
    },
    titleBold: {
        ...globalStyles.boldStyle,
        fontSize: 50,
        fontWeight: 800,
        color: '#1E222B',
        paddingHorizontal: 20,
    },
    ratingContainer: {
        width: 100,
        height: 17,
        position: 'relative',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    ratingEmpty: {
        top: 0,
        left: 0,
        width: 100,
        height: 17,
        position: 'absolute',
    },
    ratingFilledContainer: {
        position: 'absolute',
        width: 0, //star gap 6.8px
        height: 17,
        overflow: "hidden",
        top: 0,
        left: 0,
    },
    ratingFilled: {
        width: 100,
        height: 17,
    },
    imageContainer: {
        height: 207,
        width: '100%',
        position: 'relative',
    },
    image: {
        height: 207,
        width: '100%',
    },
    imageIndexContainer: {
        bottom: 20,
        left: 20,
        position: "absolute",
        width: 70,
        flexDirection: 'row',
    },
    currentImageLine: {
        height: 4,
        borderRadius: 10,
        flex: 1,
    },
    favouriteContainer: {
        top: 14,
        right: 35,
        position: 'absolute',
        padding: 17,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    favouriteImage: {
        width: 26,
        height: 24,
    },
    discountContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 70,
        marginVertical: 30,

        backgroundColor: '#2A4BA0',
        alignSelf: 'flex-start',
    },
    discountText: {
        ...globalStyles.labelStyle,
        ...globalStyles.regularStyle,
        letterSpacing: 0.24,
        color: '#FAFBFD',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        columnGap: 23,
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    addToCart: {
        borderWidth: 1,
        borderColor: '#2A4BA0',
        paddingVertical: 18,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
    },
    addToCartText: {
        ...globalStyles.buttonStyle,
        ...globalStyles.mediumStyle,
        fontWeight: 600,
        color: '#2A4BA0',
    },
    buyNow: {
        backgroundColor: '#2A4BA0',
        paddingVertical: 18,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
    },
    buyNowText: {
        ...globalStyles.buttonStyle,
        ...globalStyles.mediumStyle,
        fontWeight: 600,
        color: '#fff',
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    detailsTitle: {
        ...globalStyles.bodyStyle_1,
        ...globalStyles.regularStyle,
        color: '#1E222B',
        lineHeight: 24,
    },
    detailText: {
        ...globalStyles.bodyStyle_1,
        ...globalStyles.regularStyle,
        color: '#8891A5',
        lineHeight: 24,
    }
})