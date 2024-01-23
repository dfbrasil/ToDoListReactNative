import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabBottomRoutes from "./routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <TabBottomRoutes />
        </NavigationContainer>    
    )

}
