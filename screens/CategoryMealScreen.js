import React from "react";

import { View, Text, StyleSheet } from "react-native";

const CategoryMealScreen = (props) => {
	return (
		<View style={style.screen}>
			<Text>The Category Meal Screen!</Text>
		</View>
	);
};

const style = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoryMealScreen;
