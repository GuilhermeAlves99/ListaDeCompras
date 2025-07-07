import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {CircleCheck, Import} from 'lucide-react-native'
import {styles} from './style'
import { FilterStatus } from "@/types/FilterStatus";
import {StatusIcon} from '@/components/StatusIcon'
type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

export function Filter({status, isActive, ...rest}: Props){
    return (
        <TouchableOpacity style = {[styles.container, {opacity: isActive ? 1 : 0.8}]} activeOpacity={0.8} {...rest}>
            <StatusIcon status = {status}/>
            <Text style={styles.title}>
                {status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}