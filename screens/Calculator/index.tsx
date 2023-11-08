import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");
const Calculator = () => {
  const [display, setDisplay] = useState("");
  const HandleButton = (value: string) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (e) {
        setDisplay("Error");
      }
    } else if (value === "del") {
      setDisplay((prevDisplay) => {
        return prevDisplay.slice(0, -1);
      });
    } else if (value === "+/-") {
      setDisplay((prevDisplay) => {
        if (prevDisplay.startsWith("-")) {
          return prevDisplay.slice(1); // Remove the last character (-)
        } else {
          return "-" + prevDisplay;
        }
      });
    } else if (value === "()") {
      setDisplay((prevDisplay) => {
        const lastChar = prevDisplay.charAt(prevDisplay.length - 1);

        if (lastChar === "(") {
          return prevDisplay + "(";
        } else if (
          prevDisplay === "" ||
          lastChar === "+" ||
          lastChar === "-" ||
          lastChar === "*" ||
          lastChar === "/"
        ) {
          return prevDisplay + "(";
        } else {
          return prevDisplay + ")";
        }
      });
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };
  return (
    <View>
      <StatusBar hidden />

      <View>
        <TextInput
          value={display}
          focusable={false}
          showSoftInputOnFocus={false}
          onChangeText={(value: string) => setDisplay(value)}
          style={{
            width: width,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
            padding: 10,
            paddingTop: height * 0.13,
            height: Platform.OS === "ios" ? height * 0.365 : height * 0.3,
            fontSize: 30,
            backgroundColor: "rgb(230,230,230)",
          }}
        />
        <Pressable onPress={() => HandleButton("del")}>
          <Feather
            name="delete"
            value="delete"
            size={25}
            style={{
              backgroundColor: "rgb(230,230,230)",
              textAlign: "right",
              padding: 10,
            }}
          />
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("C")}
        >
          <Text style={styles.txt}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("()")}
        >
          <Text style={styles.txt}>()</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("%")}
        >
          <Text style={styles.txt}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("/")}
        >
          <Text style={styles.txt}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("7")}>
          <Text style={styles.txt}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("8")}>
          <Text style={styles.txt}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("9")}>
          <Text style={styles.txt}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("*")}
        >
          <Text style={styles.txt}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("4")}>
          <Text style={styles.txt}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("5")}>
          <Text style={styles.txt}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("6")}>
          <Text style={styles.txt}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("-")}
        >
          <Text style={styles.txt}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("1")}>
          <Text style={styles.txt}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("2")}>
          <Text style={styles.txt}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("3")}>
          <Text style={styles.txt}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("+")}
        >
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => HandleButton("+/-")}
        >
          <Text style={styles.txt}>-/+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton("0")}>
          <Text style={styles.txt}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => HandleButton(".")}>
          <Text style={styles.txt}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleButton("=")}
        >
          <Text style={styles.txt}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
  btn: {
    width: Platform.OS === "ios" ? width * 0.25 : width * 0.255,
    height: 110,
    padding: 30,
    backgroundColor: "rgb(50, 150,50)",
  },
  button: {
    width: width * 0.25,
    padding: 30,
    height: 110,
    backgroundColor: "rgb(10, 30,200)",
  },
});
