import { TextInput, TextInputProps } from "react-native";
import {styles} from './styles'

export function Input({...rest}){
    return(
        <TextInput style ={styles.container} {...rest} placeholderTextColor={"#74768B"}/>
    )
}