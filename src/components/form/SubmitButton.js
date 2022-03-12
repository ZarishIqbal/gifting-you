import React from "react";

import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import { View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

function SubmitButton({
  enTitle,
  ptTitle,
  style,
  subTitle,
  ptSubtitle,
  fontSize,
}) {
  const { handleSubmit } = useFormikContext();

  return (
    <View>
      <AppButton
        enTitle={enTitle}
        ptTitle={ptTitle}
        onPress={handleSubmit}
        style={style}
        fontSize={fontSize ?? 16}
      />
      {subTitle && (
        <AppText
          en={"(" + subTitle + ")"}
          pt={"(" + ptSubtitle + ")"}
          style={{
            position: "absolute",
            right: "25%",
            top: "40%",
            color: colors.white,
          }}
        />
      )}
    </View>
  );
}

export default SubmitButton;
