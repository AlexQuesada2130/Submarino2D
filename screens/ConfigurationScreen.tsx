import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useGame } from "../context/Context";

const ConfigurationScreen = () => {
  const [escrito, setText] = React.useState("5");
  const newBoardSize = useGame((state) => state.newBoard);

  const tamanio = () => {
    const sizeNum = parseInt(escrito);
    newBoardSize(sizeNum);
  };

  return (
    <View>
      <Text style={styles.Text}>Configura la dificultad:</Text>
      <TextInput
        value={escrito}
        onChangeText={setText as any}
        style={styles.Text}
      />
      <Button title="Generate new size" onPress={tamanio} />
    </View>
  );
};

export default ConfigurationScreen;

const styles = StyleSheet.create({
  Text: {
    padding: 20,
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
  },
});
