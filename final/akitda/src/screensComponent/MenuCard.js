import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { list } from "../data/list";

const MenuCard = () => {
  const navigation = useNavigation();

  return list.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() =>
          navigation.push("CourseDetail", {
            title: data.title,
            video: data.video,
            heading1: data.heading1,
            content1: data.content1,
            imgPost1: data.imgPost1,
            heading2: data.heading2,
            content2: data.content2,
            imgPost2: data.imgPost2,
          })
        }
      >
        <View>
          <Image style={styles.placeholder} source={data.img} />
          <Text style={styles.placeholderText}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });
};
const styles = StyleSheet.create({
  placeholder: {
    width: "100%",
    height: 200,
    position: "relative",
    marginBottom: 12,
    resizeMode: "stretch",
  },
  placeholderText: {
    position: "absolute",
    bottom: 30,
    fontFamily: "Montserrat_Bold",
    fontSize: 18,
    width: 210,
    textAlign: "center",
    marginHorizontal: 75,
    color: "white",
  },
});

export default MenuCard;
