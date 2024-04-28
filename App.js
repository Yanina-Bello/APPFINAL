import React, { useState } from 'react';
import {
    Button,
    Flatlist,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    View
} from 'react-native';

// Components
import Modal from './Components/Modal';
import AddItem from './Components/AddItem';


    return (
      
<View style={styles.Container}>
    <AddItem
    onChange={onHandlerChangeItem}
    onAddItem={addItem}
    value={textItem}
/>
/</View>

    )
export default function App() {
    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])
}