import React from "react";

import { Button, StyleSheet, Text, Modal, View } from "react-native";

const ModalItem = (props) => {
  const { visible, onDelete, item } = props;

  if (!visible) return null;

  return (
      <Modal animationType="slide">
        <View style={styles.modalTitle}>
          <Text>Mi modal</Text>
          /</View>
        <View style={styles.modalMessage}>
          <Text>Está seguro que desea borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.ModalItem}>{item.value}</Text>
            </View>
            <View style={styles.modalButton}>
            <Button onPress={onDelete} title="CONFIRM" />
    </View>
    /</Modal>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    backgroundColor: "#ccc",
    color: "white",
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: 'center',
    },
  modalButton: {
marginTop: 15,
  },
  ModalItem: {
fontSize: 30,
  },
});

export default Modal;