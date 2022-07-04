import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Product = ({ navigation }) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [button, setButton] = useState(0);
  const [id, setId] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Entypo
            name="chevron-left"
            size={35}
            style={styles.MenuIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>Product</Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <ScrollView>
          <>
            <Text style={styles.Fashion}>Brand*</Text>
            <View style={[styles.NameBox, { marginBottom: 5 }]}>
              <TextInput
                style={styles.Name}
                placeholder="Brand name...."
                placeholderTextColor={"gray"}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <Text style={styles.Fashion}>Additional information*</Text>
            <View style={[styles.NameBox, { marginBottom: 5 }]}>
              <TextInput
                style={styles.Name}
                placeholder="Add Descriptions"
                placeholderTextColor={"gray"}
                value={info}
                onChangeText={(text) => setInfo(text)}
              />
            </View>
            <Text style={styles.Fashion}>Area*</Text>
            <View style={[styles.NameBox, { marginBottom: 5 }]}>
              <TextInput
                style={styles.Name}
                placeholder="Area name...."
                placeholderTextColor={"gray"}
                value={area}
                onChangeText={(text) => setArea(text)}
              />
            </View>

            <Text style={styles.Fashion}>₹ Price*</Text>
            <View style={[styles.NameBox, { marginBottom: 20 }]}>
              <TextInput
                style={styles.Name}
                placeholder="₹ 00.0"
                placeholderTextColor={"gray"}
                value={price}
                onChangeText={(text) => setPrice(text)}
              />
            </View>
            {button ? (
              <TouchableOpacity style={styles.SubmitBox}>
                <Text style={styles.Submit}>Update Submit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.SubmitBox}>
                <Text style={styles.Submit}>Submit</Text>
              </TouchableOpacity>
            )}
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 8,
  },
  Title: {
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
    marginRight: 60,
  },
  Fashion: {
    fontSize: 20,
    fontWeight: "600",
    margin: 16,
  },
  NameBox: {
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 16,
    borderColor: "gray",
  },
  Name: {
    fontSize: 18,
    padding: 10,
  },
  SubmitBox: {
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 5,
    backgroundColor: "#F9A623",
    marginTop: 10,
  },
  Submit: {
    fontSize: 26,
    padding: 10,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  Box: {
    margin: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
  },
  NameTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "black",
    flex: 1,
  },
  Price: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 20,
    color: "#F9A623",
  },
  Information: {
    fontSize: 18,
    fontWeight: "600",
    margin: 5,
    color: "black",
  },
  Icon: {
    marginHorizontal: 10,
  },
});
