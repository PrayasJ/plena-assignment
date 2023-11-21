import axios from "axios";
import { API } from "./constants";

export const fetchData = async (setData) => {
	axios.get(API.ALL_DATA).then((response) => {
		if(response.status == 200) {
			const products = response.data.products || [];
			setData(products)
		}
	})
}