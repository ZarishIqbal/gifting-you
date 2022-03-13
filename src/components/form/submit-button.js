import React from "react";

import { useFormikContext } from "formik";

import AppButton from "@components/buttons/app-button";
import { View } from "react-native";
import AppText from "@components/text/app-text";
import colors from "@config/colors";

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
