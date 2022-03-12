import React, { useEffect, useState } from "react";
import {
  Modal,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import ImagePicker from "react-native-image-crop-picker";
import { updateImage, uploadImageToStorage } from "../utils/firebaseFunction";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../redux/actions/profileActions";

export const BottomPopup = ({ visible, setVisible }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(visible);
    dispatch(updateProfileImage(image));
  }, [dispatch, image]);

  const TakePhoto = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then((response) => {
      console.log(response);
      const { path } = response;
      setImage(path);
      uploadImageToStorage(path);
      setVisible(false);
      updateImage(path);
    });
  };
  const ChooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((response) => {
      console.log(response);
      const { path } = response;
      setImage(path);
      uploadImageToStorage(path);
      setVisible(false);
      updateImage(path);
    });
  };
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={visible}
      //onRequestClose={!visible}
    >
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View>
            <TouchableOpacity style={styles.text} onPress={TakePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.text} onPress={ChooseFromGallery}>
              <Text>Choose from Gallary</Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color={colors.primary}
                onPress={() => {
                  setVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "flex-end",
  },
  bottomContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceHeigth * 0.4,
  },
  text: {
    color: "#182E44",
    fontSize: 20,
    fontWeight: "500",
    margin: 15,
  },
  button: {
    marginBottom: 10,
  },
});
