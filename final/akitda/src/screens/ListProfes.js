import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import CardProfes from "../screensComponent/CardProfes";
import { profes } from "../data/profes";
import { ScrollView } from "react-native-gesture-handler";

const ListProfes = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.topNav}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 40,
              flexDirection: "row",
            }}
          >
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View>
              <Text style={styles.topNavTitle}>Danh sách nhà chuyên môn</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginTop: 45 }}>
            <CardProfes />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    width: "100%",
    height: 96,
    backgroundColor: "#F5B870",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topNavTitle: {
    fontFamily: "Montserrat_Bold",
    fontSize: 18,
    lineHeight: 21.94,
    color: "white",
    marginLeft: 16,
  },
});

export default ListProfes;
