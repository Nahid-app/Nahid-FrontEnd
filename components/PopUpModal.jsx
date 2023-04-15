import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ModalCheck from "../assets/svg/ModalCheck";
import PrimaryButton from "./PrimaryButton";
import PrimaryColorButton from "./buttons/PrimaryColorButton";
import * as Haptics from "expo-haptics";
import { MotiView } from "moti";

const PopUpModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Onpress = () => {
    setModalVisible(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViewModal}>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalView}
            className="w-[85%] mx-11"
          >
            {/* The card of the Modal */}
            <MotiView
              from={{
                translateX: -10,
              }}
              animate={{
                translateX: 0,
              }}
              className=""
            >
              <ModalCheck />
            </MotiView>
            <View className="py-8">
              <Text
                style={styles.modalText}
                className="text-h4 text-primary font-[TajawalBold]"
              >
                تم تسجيلك بنجاح
              </Text>
              <Text className=" text-black font-[TajawalBold] text-center text-lRegular pt-1">
                شكرا لتسجيلك! نحن نتطلع إلى رؤيتك .
              </Text>
            </View>
            <View className="w-full px-8">
              <PrimaryColorButton
                onPress={() => setModalVisible(!modalVisible)}
                title={"الذهاب الى الخلف"}
              />
            </View>
          </MotiView>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => Onpress()}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 44,
    paddingHorizontal: 10,
    paddingVertical: 40,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 16,
    textAlign: "center",
  },
});

export default PopUpModal;
