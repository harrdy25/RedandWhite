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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct,
  insertProduct,
  updateProduct,
} from "../redux/action/product.action";

const Product = ({ navigation }) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [button, setButton] = useState(0);
  const [id, setId] = useState(0);

  const product = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  console.log(("SDSds0", product));

  const handleSubmit = () => {
    if (!(name == "" || info == "" || price == "" || area == "")) {
      let productData = {
        name,
        info,
        price,
        area,
      };
      dispatch(insertProduct(productData));
      setName("");
      setInfo("");
      setArea("");
      setPrice("");
      setButton(0);
    }
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleDelete = (id) => {
    Alert.alert("Delete", "Are you sure you want to delete this Item", [
      {
        text: "Cancel",
      },
      { text: "OK", onPress: () => dispatch(deleteProduct(id)) },
    ]);
  };

  const productEdit = (id) => {
    let fData = product.product.filter((item) => item.id === id);
    setName(fData[0].name);
    setInfo(fData[0].info);
    setArea(fData[0].area);
    setPrice(fData[0].price);
    setButton(1);
    setId(id);
  };

  const updateDataSubmit = () => {
    let pData = {
      id: id,
      name,
      info,
      price,
      area,
    };
    dispatch(updateProduct(pData));
    setName("");
    setInfo("");
    setArea("");
    setPrice("");
    setButton(0);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.Box}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={styles.NameTitle}>{item.name}</Text>
          <Text style={styles.Price}>₹ {item.price}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.Information}>{item.info}</Text>
            <Text style={styles.Information}>{item.area}</Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Entypo
                name="cross"
                size={35}
                color={"red"}
                style={styles.Icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                productEdit(item.id);
              }}
            >
              <Entypo
                name="edit"
                size={30}
                color={"gray"}
                style={styles.Icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

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
              <TouchableOpacity
                style={styles.SubmitBox}
                onPress={() => updateDataSubmit()}
              >
                <Text style={styles.Submit}>Update Submit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.SubmitBox}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.Submit}>Submit</Text>
              </TouchableOpacity>
            )}
            <View>
              <FlatList
                data={product.product}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
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
