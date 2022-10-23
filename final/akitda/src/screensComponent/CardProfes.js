import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { profes } from "../data/profes";
import { useNavigation } from "@react-navigation/native";

const CardProfes = () => {
  const navigation = useNavigation();
  return profes.map((data, index) => {
    return (
      <View key={index} style={{ marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() =>
            navigation.navigate("Detail_Profes", {
              title: data.title,
              address: data.address,
              image: data.image,
              name: data.name,
              strength: data.strength,
              number: data.number,
              email: data.email,
              university: data.university,
              years: data.years,
            })
          }
        >
          <Image
            source={data.image}
            style={{ width: 85, height: 85, borderRadius: 60 }}
          />

          <View style={{ width: 236, height: 80, marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat_Bold",
                lineHeight: 16,
                letterSpacing: -0.32,
              }}
            >
              {data.name}
            </Text>
            <Text
              style={{
                marginTop: 7,
                fontSize: 10,
                lineHeight: 16,
                letterSpacing: -0.32,
                fontFamily: "Montserrat_Regular",
              }}
            >
              {data.university}
            </Text>
            <Text
              style={{
                marginTop: 7,
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: -0.32,
                fontFamily: "Montserrat_Regular",
              }}
            >
              {data.address}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

export default CardProfes;
