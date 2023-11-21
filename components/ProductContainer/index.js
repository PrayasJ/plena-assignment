import { Dimensions, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import Carousel from 'react-native-reanimated-carousel';
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
} from "../../redux/itemSlice";
import { useState } from "react";

function splitter(str, l){
	var strs = [];
	while(str.length > l){
			var pos = str.substring(0, l).lastIndexOf(' ');
			pos = pos <= 0 ? l : pos;
			strs.push(str.substring(0, pos));
			var i = str.indexOf(' ', pos)+1;
			if(i < pos || i > pos+l)
					i = pos;
			str = str.substring(i);
	}
	strs.push(str);
	return strs;
}

export const ProductContainer = (props) => {
  const dispatch = useDispatch();
  const { item, isFavourite } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const titles = splitter(item.title, 10);

	const getRatingWidth = (rating) => {
		const _STAR_GAP = 6.8;

		const digit = parseInt(rating)
		const fraction = rating - digit;
		
		return (20 + _STAR_GAP/8) * digit + (20 - _STAR_GAP/2) * fraction;
	}

	var icon = isFavourite ? 
		require('../../assets/images/favouriteMainFilled.png') :
		require('../../assets/images/favouriteMainEmpty.png');

  return (
		<View style={styles.container}>
			<Text style={styles.titleNormal}>
				{titles[0]}
			</Text>
			<Text style={styles.titleBold}>
				{titles[1]}
			</Text>
			<View style={styles.ratingContainer}>
				<Image
					source={require("../../assets/images/ratingEmpty.png")}
					style={styles.ratingEmpty}
				/>
				<View style={{...styles.ratingFilledContainer, width: getRatingWidth(item.rating)}}>
				<Image
					source={require("../../assets/images/ratingFilled.png")}
					style={styles.ratingFilled}
				/>
				</View>
			</View>
			<View style={styles.imageContainer}>
				<Carousel
					width={Dimensions.get('window').width}
					height={207}
					style={styles.image}
					data={item.images}
					onSnapToItem={(index) => setCurrentImageIndex(index)}
					renderItem={(q) => (
							<Image
								source={{ uri: q.item }}
								style={styles.image}
								key={q.index}
							/>
						)
					}	
				/>
				<View style={{...styles.imageIndexContainer, columnGap: 20/item.images.length}}>
					{item.images.map((_, index) => (
							<View style={{
								...styles.currentImageLine, 
								backgroundColor: index == currentImageIndex ? '#F9B023' : '#E4E4E4'
							}} key={index}></View>
						)
					)}
				</View>
				{/* <Image
					source={{ uri: item.images[2] }}
					style={styles.image}
				/> */}
				<Pressable 
					style={styles.favouriteContainer}
					onPress={()=> {
						if (isFavourite) {
              dispatch(removeFromFavourites(item.id));
            } else {
              dispatch(addToFavourites(item.id));
            }
					}}
				>
					<Image
						source={icon}
						style={styles.favouriteImage}
					/>
				</Pressable>
			</View>
			<View style={styles.discountContainer}>
				<Text style={styles.discountText}>
					{item.discountPercentage}% OFF
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Pressable 
					style={styles.addToCart}
					onPress={() => {
						dispatch(addToCart(item.id))
					}}
				>
					<Text style={styles.addToCartText}>
						Add To Cart
					</Text>
				</Pressable>
				<Pressable style={styles.buyNow} onPress={props.openCart}>
					<Text style={styles.buyNowText}>
						Buy Now
					</Text>
				</Pressable>
			</View>
			{item.description && <View style={styles.detailsContainer}>
				<Text style={styles.detailsTitle}>
					Details
				</Text>
				<Text style={styles.detailText}>
					{item.description || ''}
				</Text>
			</View>}
		</View>
	);
};
