import { StyleSheet } from "react-native";
import { globalStyles } from '../../globalStyles'

console.log({globalStyles})
export const styles = StyleSheet.create({
    container: {
        ...globalStyles.themeBlue,
        position: 'absolute',
        top: 0,
        height: 50,
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 12,
        zIndex: 2,
    },
    containerProduct: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        zIndex: 2,
    },
    containerCart: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        height: 80,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
        zIndex: 2,
    },
    backBtn: {

    },
    cartText: {
        ...globalStyles.bodyStyle_1,
        ...globalStyles.regularStyle,
        paddingLeft: 21,
        color: '#1E222B',
        lineHeight: 24,
    },
    backBtnImage: {
        width: 40,
        height: 40,
    },
    cartContainer: {
        position: 'relative',
        width: 29,
        height: 29,
    },
    cartImage: {
        position: 'absolute',
        width: 16,
        height: 18,
        bottom: 0,
        left: 0,
    },
    cartNumberContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartNumberText: {
        ...globalStyles.semiboldStyle,
        ...globalStyles.labelStyle,
        position: 'absolute',
        color: '#FFF',
    },
    cartNumberImage: {
        width: 24,
        height: 24,
    }
})