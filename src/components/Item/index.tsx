import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";

import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

/////é feito dessa forma para deixar separada a tipagem dos dados, caso seja necessário
//pegar somente status e description
type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};

export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status}></StatusIcon>
      </TouchableOpacity>
      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282"></Trash2>
      </TouchableOpacity>
    </View>
  );
}
