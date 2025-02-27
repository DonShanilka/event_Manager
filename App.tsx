import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import TabLayout from "./src/app/(tabs)/_layout";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TabLayout />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A31',
    height:'110%'
  },
});
