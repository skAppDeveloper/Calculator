import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import { StatusBar } from "expo-status-bar";

const CalculatorScreen = () => {
  const [text, setText] = useState("");
  const [lastText, setLastText] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleInput = (input) => {
    if (input === "+" || input === "-" || input === "*" || input === "/") {
      setText(text + input);
      return;
    }

    switch (input) {
      case "⌫":
        setText(text.substring(0, text.length - 1));
        return;
      case "AC":
        setLastText("");
        setText("");
        return;
      case "=":
        setLastText(text + "=");
        calculate();
        return;
    }
    setText(text + input);
  };

  const calculate = () => {
    let lastArr = text[text.length - 1];
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setText(text);
    } else {
      let result = eval(text).toString();
      setText(result);
      return;
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <StatusBar style="light" backgroundColor="grey" />
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <View
          style={{
            marginTop: 24,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Switch
            value={theme === "dark"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 20 }}>
            {lastText}
          </Text>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 40 }}>
            {text}
          </Text>
        </View>
        <View style={{ backgroundColor: "grey", height: 3 }}></View>
        <View
          style={
            theme === "light"
              ? styles.textContainer
              : [styles.textContainer, { backgroundColor: "black" }]
          }
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => handleInput("AC")}
                style={{
                  backgroundColor: "green",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 22,
                  }}
                >
                  AC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("⌫")}
                style={{
                  backgroundColor: "green",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  ⌫
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("%")}
                style={{
                  backgroundColor: "green",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  %
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
                onPress={() => handleInput("/")}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  ÷
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => handleInput("1")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 22,
                  }}
                >
                  1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("2")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("3")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
                onPress={() => handleInput("*")}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  x
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => handleInput("4")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("5")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("6")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  6
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
                onPress={() => handleInput("-")}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  -
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => handleInput("7")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  7
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleInput("8")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleInput("9")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  9
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
                onPress={() => handleInput("+")}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => handleInput(".")}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 22,
                  }}
                >
                  .
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => handleInput("0")}
                  style={{
                    backgroundColor: "grey",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 22 }}
                  >
                    0
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  width: 137,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 140,
                    height: 60,
                    padding: 10,
                  }}
                  onPress={() => handleInput("=")}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 22,
                      justifyContent: "center",
                    }}
                  >
                    =
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ThemeContext.Provider>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#F1F2F3",
  },
  textContainer: {
    backgroundColor: "#F1F2F3",
    flex: 2.5,
    borderRadius: 20,
    margin: 5,
    marginBottom: 5,
  },
});
