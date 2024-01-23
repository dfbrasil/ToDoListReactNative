import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "./styles";

const SearchBar = () => {
    return(
        <SafeAreaView style={style.searchBar}>
            <TextInput
                placeholder="Buscar task..."
             />
            <TouchableOpacity>
                <FontAwesome name="search" color="#000" size={24} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SearchBar;