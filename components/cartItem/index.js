import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToFavourites,
  removeFromCart,
  removeFromFavourites,
} from "../../redux/itemSlice";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const { item, itemCount } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.price}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.countContainer}>
        <Pressable
          style={styles.countBtnContainer}
          onPress={() => {
            dispatch(removeFromCart(item.id));
          }}
        >
          <Image
            source={require("../../assets/images/decrease.png")}
            style={styles.countBtnImage}
          />
        </Pressable>
				<Text style={styles.countValue}>{itemCount}</Text>
				<Pressable
          style={styles.countBtnContainer}
          onPress={() => {
            dispatch(addToCart(item.id));
          }}
        >
          <Image
            source={require("../../assets/images/increase.png")}
            style={styles.countBtnImage}
          />
        </Pressable>
      </View>
    </View>
  );
};
