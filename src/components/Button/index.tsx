import { TouchableOpacity, Text, TouchableOpacityProps} from "react-native";
import {styles} from "./styles"

type Props = TouchableOpacityProps & {
    title?: string
}
export function Button({title, ...rest}: Props){
    return(
        // "...rest" serve para colocar o restante das propriedades de Touchable nessa propriedade
        //assim,  quando tiver um activeOpacity, por exemplo, ele será alocado
        //dentro de rest, o que facilita, pois posso deixar opcional o uso de outras
        //propriedades
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
