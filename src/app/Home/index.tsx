
import { StyleSheet, View, Image,TouchableOpacity, Text, FlatList } from 'react-native';
import {styles} from "./styles"
import { Button } from '@/components/Button';
import {Input} from '@/components/Input'
import { FilterStatus } from '@/types/FilterStatus';
import {Filter} from '@/components/Filter'
import { Item } from '@/components/Item';
import { useState } from 'react';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const INITIAL_ITEMS = [
  {id: "1", status:FilterStatus.DONE, description: "1 pacote de café"},
  {id: "2", status: FilterStatus.PENDING, description: "3 pacotes de macarrão"},
  {id: "3", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "4", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "5", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "6", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "7", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "8", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "9", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "10", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "11", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "12", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "13", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "14", status: FilterStatus.PENDING, description: "3 cebolas"},
  {id: "15", status: FilterStatus.PENDING, description: "3 cebolas"}
]
export function Home() {
    const [items, setItems] = useState(INITIAL_ITEMS);
    
  const handleRemove = (id: string) => {
    console.log(id)
    setItems(prev => prev.filter(item => item.id !== id));
  };


 return (
  <View style={styles.conteiner}>
    <Image source={require("@/assets/logo.png")} style={styles.logo}/>
    <View style={styles.form}>
    <Input placeholder="O que você precisa comprar?"/>
    <Button title ="Adicionar" />
    </View>
    <View style={styles.content}>
      <View style={styles.header}>
      {
        FILTER_STATUS.map(((status) => (
          <Filter key={status} status={status} isActive/>
        )))
      }
      <TouchableOpacity style={styles.clearButton}>
        <Text style={styles.clearText}>Limpar</Text>
      </TouchableOpacity>
      </View>
        <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
           <Item
            data={item}
            onStatus={() => console.log("muda o status")}
             onRemove={() => handleRemove(item.id) 
             } />
        } showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style ={styles.separator}></View>}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui</Text>}/>
    </View>
  </View>
 )
}


