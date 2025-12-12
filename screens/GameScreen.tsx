import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useGame } from "../context/Context";

const GameScreen = () => {
  const disparoRealizado = useGame((state) => state.disparoRealizado);
  const tablero = useGame((state) => state.tablero);
  const disparar = useGame((state) => state.disparar);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>Disparos Realizados: {disparoRealizado}</Text>
      </View>
      <View style={styles.Container2}>
        <ScrollView>
          {/* Scroll Horizontal (Izquierda / Derecha) */}
          <ScrollView horizontal={true}>
            {/* Recorremos Y */}
            {tablero.map((fila, rowIndex) => (
              <View key={"fila-${rowIndex}"}>
                {/* Recorremos X */}
                {fila.map((celda, colIndex) => (
                  <TouchableOpacity
                    key={"celda-${rowIndex}-${colIndex}"}
                    style={[
                      styles.cell,
                      celda === "agua" ? styles.cellAgua : styles.cellHundido,
                    ]}
                    onPress={() => disparar(colIndex, rowIndex)} // Pasamos X, Y
                  >
                    <Text style={styles.coordText}>
                      {colIndex},{rowIndex}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //Styles del contenedor del tablero
  Container2: {
    padding: 20,
    backgroundColor: "#4d46467b",
    borderRadius: 8,
    alignItems: "center",
  },
  cell: {
    width: 50, // Tamaño de la celda
    height: 50,
    margin: 5, // Espacio entre celdas
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  // Estilos según estado
  cellAgua: {
    backgroundColor: "#83cef0ff", // Azul claro
  },
  cellHundido: {
    backgroundColor: "#e57373", // Rojo claro (para cuando lo implementes)
  },
  coordText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
  },
  Text: {
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
  },
});
