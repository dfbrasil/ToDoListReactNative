
import { SafeAreaView, TextInput, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "./style";

export default () => {
    return(
        <SafeAreaView style={style.searchBar}>
            <TextInput
                placeholder="Buscar task..."
             />
            <FontAwesome name="search" color="#000" size={24} />
        </SafeAreaView>
    )
}