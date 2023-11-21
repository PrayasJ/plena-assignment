import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import { SCREENS } from "../../api/constants";

export const Header = (props) => {
    var icon1 = props.currentScreen == SCREENS.PRODUCT ?
        require('../../assets/images/cart_bag_black.png') :
        require('../../assets/images/cart_bag.png');
    var icon2 = props.currentScreen == SCREENS.PRODUCT ?
        require('../../assets/images/cart_num_black.png') :
        require('../../assets/images/cart_num.png');
    return (
        <View style={
            props.currentScreen == SCREENS.HOME ? styles.container : (
                props.currentScreen == SCREENS.PRODUCT ? styles.containerProduct :
                    styles.containerCart
            ) }>
            {
                props.backFn &&
                <Pressable style={styles.backBtn} onPress={props.backFn}>
                    <Image
                        source={require('../../assets/images/back.png')}
                        style={styles.backBtnImage}
                    />
                </Pressable>
            }
            {props.currentScreen == SCREENS.CART && 
            <Text style={styles.cartText}>
                Shopping Cart({props.cartSize||0})
            </Text>}
            {props.currentScreen != SCREENS.CART && 
            <Pressable style={styles.cartContainer} onPress={props.openCart}>
                <Image 
                    source={icon1}
                    style={styles.cartImage}
                />
                {props.cartSize != 0 && <View style={styles.cartNumberContainer}>
                    <Image 
                        source={icon2}
                        style={styles.cartNumberImage}
                    />
                    <Text style={styles.cartNumberText}>
                        {props.cartSize || 0}
                    </Text>
                </View>}
            </Pressable>}
        </View>
    )
}