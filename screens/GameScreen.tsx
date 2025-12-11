import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGame } from "../context/Context";

const GameScreen = () => {
  const disparoRealizado = useGame((state) => state.disparoRealizado);

  return (
    <View>
      <View>
        <Text>Disparos Realizados: {disparoRealizado}</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
