import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { Video } from "expo-av";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Button, Center } from "native-base";
import { inlineStyles } from "react-native-svg";

const Separator = () => <View style={styles.separator} />;

const CourseDetail = ({ navigation, route }) => {
  const { title } = route.params;
  const { video } = route.params;
  const { heading1 } = route.params;
  const { content1 } = route.params;
  const { imgPost1 } = route.params;
  const { heading2 } = route.params;
  const { content2 } = route.params;
  const { imgPost2 } = route.params;
  return (
    <SafeAreaView>
      <View>
        <View style={styles.topNav}>
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: "row" }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View>
              <Text style={styles.topNavTitle}>{title}</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ height: "84%" }}>
          <View style={styles.pageCSS}>
            {/* all page */}
            <View>
              <Video
                style={styles.video}
                source={video}
                useNativeControls
                resizeMode="contain"
              />
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{title}</Text>
                <FontAwesome
                  name="bookmark-o"
                  size={28}
                  color="#447DB9"
                  style={{ marginLeft: "10%" }}
                />
              </View>
              <View style={styles.videoView}>
                <MaterialIcons
                  name="people-outline"
                  size={24}
                  color="black"
                  style={{ marginLeft: 12 }}
                />
                <Text
                  style={{ marginLeft: 12, fontFamily: "Montserrat_Regular" }}
                >
                  1236
                </Text>
              </View>
              <Separator />
            </View>
            <Text
              style={{
                fontFamily: "Montserrat_Bold",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              {heading1}
            </Text>
            <Text style={styles.text}>{content1}</Text>
            <Image source={imgPost1} style={styles.img} />
            <Text
              style={{
                fontFamily: "Montserrat_Bold",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              {heading2}
            </Text>
            <Text style={styles.text}>{content2}</Text>
            <Image source={imgPost2} style={styles.img} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageCSS: {
    padding: 20,
  },
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
  video: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 20,
  },
  videoInfo: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  videoTitle: {
    fontFamily: "Montserrat_Bold",
    fontSize: 16,
    letterSpacing: 1,
    width: "80%",
  },
  videoView: {
    marginVertical: 4,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    padding: 6,
    fontFamily: "Montserrat_Regular",
    color: "#335EF7",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontFamily: "Montserrat_Light",
    fontSize: 14,
    marginVertical: 20,
  },
  img: {
    width: null,
    flex: 1,
    height: 250,
  },
});
export default CourseDetail;
