import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { TaskProvider } from "./src/hooks/useTasks";
import Routes from "./src/routes";
import { theme } from "./src/theme/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <TaskProvider>
        <Routes />
      </TaskProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.background.bgpattern,
  },
  taskStatus: {
    flexDirection: "row",
    gap: 14,
  },
});
