import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { CheckBox } from 'react-native-elements';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";


interface TaskProps {
    title: string,
    subtitle: string,
    active: boolean
}

const Task = ({title, subtitle, active} : TaskProps) => {
    const [isChecked, setIsChecked] = useState(active);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);    
    };

    const handleTrash = () => {
        console.warn('Clicked on the trash')    
    };

    return (
         <TouchableOpacity style={isChecked ? styles.active : styles.inactive}>
         <View style={styles.text}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.subtitle}>{subtitle}</Text>
         </View>
         <View style={styles.icons}>
             <CheckBox
                 checked={isChecked}
                 checkedColor="green"
                 onPress={handleCheckboxToggle}
             />
             <TouchableOpacity onPress={handleTrash}>
                <FontAwesome name="trash" color="rgba(0, 0, 0, 0.50)" size={24} />
             </TouchableOpacity>
         </View>
     </TouchableOpacity>
    )
}

export default Task;
