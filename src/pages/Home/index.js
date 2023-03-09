import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto Conta Luz",
    value: "300,90",
    date: "08/03/2023",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.500,00",
    date: "02/03/2023",
    type: 1, //receita / entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "7.200,90",
    date: "05/03/2023",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Paulo Carlos"></Header>

      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
    marginTop: 25,
  },
  list: {
    marginStarting: 14,
    marginEnd: 14,
    margin: 7,
  },
});
