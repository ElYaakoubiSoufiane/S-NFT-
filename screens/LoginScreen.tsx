import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
// import axios from "axios";
import { handleLogin } from "../../Context/Reducer";

const container = {
  hidden: { opacity: 1, y: -20, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

export default function Login() {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const data = {
    email,
    password,
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    navigation.navigate("Home");
    // try {
    //   const url = "https://futurepioneersmernstack-c4ax.vercel.app/api/auth";
    //   const { data: res } = await axios.post(url, data);
    //   window.localStorage.setItem("token", res.data);
    //   dispatch(handleLogin());
    //   navigation.navigate("Home");
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showError ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [showError]);

  return (
    <>
      <View style={styles.container}>
        <View className=" bg-black  top-0 max-h-[120px]   w-full flex-1 items-center justify-center ">
          <Text className="text-5xl  shadow-xlg  shadow-slate-100 font-extrabold">
            S-NFT
          </Text>
        </View>
        <Animated.View
          style={[
            styles.errorMessage,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50],
                  }),
                },
              ],
            },
          ]}
        >
          {error && <Text style={styles.errorText}>{error}</Text>}
        </Animated.View>
        <View style={styles.formContainer}>
          <Animated.View style={[styles.formItem, styles.formLabel]}>
            {/* <Text style={styles.labelText}>Email</Text> */}
          </Animated.View>
          <Animated.View style={[styles.formItem, styles.formInput]}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              name="email"
              onChangeText={setEmail}
              value={email}
              required
              autoFocus
            />
          </Animated.View>
          <Animated.View style={[styles.formItem, styles.formLabel]}>
            {/* <Text style={styles.labelText}>Password</Text> */}
          </Animated.View>
          <Animated.View style={[styles.formItem, styles.formInput]}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              name="password"
              onChangeText={setPassword}
              value={password}
              required
            />
          </Animated.View>
          <TouchableOpacity
            className="flex items-center pt-5 justify-center"
            onPress={HandleSubmit}
          >
            <View className="text-center flex items-center justify-center">
              <Text
                className="items-center justify-center"
                style={styles.buttonText}
              >
                Log In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    paddingBottom: 150,
    marginBottom: 150,
  },
  errorMessage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ff5a5a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "#fff",
    fontSize: 14,
  },
  formContainer: {
    width: "80%",
  },
  formItem: {
    marginBottom: 10,
  },
  formLabel: {
    marginTop: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formInput: {
    borderWidth: 3,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  inputText: {
    fontSize: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 50,
    width: 160,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
