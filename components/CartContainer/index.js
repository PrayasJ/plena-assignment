import { Button, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
} from "../../redux/itemSlice";
import { CartItem } from "../cartItem";
import { DELIVERY_CHARGE } from "../../api/constants";

export const CartContainer = (props) => {
  const dispatch = useDispatch();
  const { cart, cartInfo } = props;

	const getCartSubtotal = () => {
		let totalAmount = 0;
		Object.keys(cart).forEach((index) => {
			totalAmount += cart[index] * cartInfo[index].price;
		})

		return totalAmount;
	}

	const getTotal = () => {
		return getCartSubtotal() + DELIVERY_CHARGE;
	}

  return (
    <View style={styles.cart}>
      <View style={styles.itemContainer}>
        {Object.keys(cart).map((index, key) => {
          return (
					<CartItem 
						item={cartInfo[index]} 
						itemCount={cart[index]} 
						key={key}
					/>);
        })}
      </View>
			{Object.keys(cart).length != 0 && <View style={styles.amountBox}>
				<View style={styles.amountRow}>
					<Text style={styles.amountLabel}>Subtotal</Text>
					<Text style={styles.amountValue}>${getCartSubtotal().toFixed(2)}</Text>
				</View>
				<View style={styles.amountRow}>
					<Text style={styles.amountLabel}>Delivery</Text>
					<Text style={styles.amountValue}>${DELIVERY_CHARGE.toFixed(2)}</Text>
				</View>
				<View style={styles.amountRow}>
					<Text style={styles.amountLabel}>Total</Text>
					<Text style={styles.amountValue}>${getTotal().toFixed(2)}</Text>
				</View>
				<Pressable style={styles.checkOutButton}>
					<Text style={styles.checkOutText}>
						Proceed To checkout
					</Text>
				</Pressable>
			</View>}
    </View>
  );
};
