import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { images } from "../assets/images/index";
import { useDispatch } from "react-redux";
import { googleUser } from '../redux/action/user.action';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [hidePass, setHidePass] = useState(true);

  const dispatch = useDispatch();

  const GoogleHandler = async () => {
    dispatch(googleUser());
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Entypo
          name="chevron-left"
          size={35}
          style={styles.MenuIcon}
          onPress={() => navigation.navigate("Login")}
        />
        <View style={{ alignItems: "center" }}>
          <Image style={styles.Logo} source={images.IMG_AVATAR_PNG} />
        </View>
        <Text style={styles.SignUp}>SIGN UPPPPP</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Name"
            value={name}
            placeholderTextColor={"gray"}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Email"
            value={email}
            placeholderTextColor={"gray"}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={[styles.NameBox, { flexDirection: "row" }]}>
          <TextInput
            style={styles.Name}
            placeholder="Password"
            value={password}
            secureTextEntry={hidePass ? true : false}
            placeholderTextColor={"gray"}
            onChangeText={(text) => setPassword(text)}
            flex={1}
          />
          <Ionicons
            name={hidePass ? "eye-off" : "eye"}
            style={styles.EyeIcon}
            size={20}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Phone no"
            value={phone}
            placeholderTextColor={"gray"}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <TouchableOpacity style={styles.SignUpBox}>
          <Text style={styles.Sign}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="logo-google"
              style={styles.MenuIcon}
              size={30}
              onPress={() => GoogleHandler()}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" style={styles.Facebook} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-twitter" style={styles.MenuIcon} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          You have an account already?{"  "}
          <Text style={styles.Login}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 8,
  },
  Logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  SignUp: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 16,
    marginVertical: 10,
  },
  NameBox: {
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 10,
    borderColor: "gray",
  },
  Name: {
    fontSize: 20,
    padding: 10,
  },
  SignUpBox: {
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "green",
    marginTop: 20,
  },
  Sign: {
    fontSize: 26,
    padding: 8,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  Login: {
    fontSize: 22,
    fontWeight: "600",
    color: "green",
  },
  EyeIcon: {
    alignSelf: "center",
    marginRight: 16,
  },
  Facebook: {
    marginHorizontal: 10,
  },
});
