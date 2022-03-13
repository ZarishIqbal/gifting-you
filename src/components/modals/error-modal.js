import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import colors from "@config/colors";
import AppText from "@components/text/app-text";
function ModalError(props) {
  const { enTitle } = props;
  const { ptTitle } = props;
  const [visible, setVisible] = useState(props.visible);

  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        onPress={() => setVisible(false)}
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: colors.green,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText
          style={{
            color: colors.white,
            fontSize: 15,
            marginTop: 0,
            fontWeight: "700",
          }}
          en={enTitle}
          pt={ptTitle}
        />
      </TouchableOpacity>
    </Modal>
  );
}
export default ModalError;
