import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import AppButton from "@components/buttons/app-button";
import { Filter } from "@components/modals/filter-modal";
import ModalError from "@components/modals/error-modal";
import { SearchHeader } from "@components/navigation/search-header";
import { SingleQuestion } from "@components/questions/single-question";
import colors from "@config/colors";
import Toast from "react-native-toast-message";
import { firestoreMerge } from "@utils/merges";
import { addRequest } from "@utils/firebaseFunction";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};

function Questions(props) {
  const questions = Object.entries(
    useSelector((state) => state.rootState?.questions) ?? {}
  );
  const [answers, setAnswers] = useState([]);
  // const [answers, setAnswers] = useState([]);
  const [openId, setId] = useState(1);
  const [visible, setVisible] = useState();

  const [filter, setFilter] = useState(initialFilter);
  const [state, setState] = useState({ open: false });
  const profile = useSelector((state) => state.profile.profile);

  const sendRequest = () => {
    console.log(profile.requests);
    if (profile.requests > 0) {
      firestoreMerge(
        ["users", { ...profile, requests: profile.requests - 1 }],
        "profile"
      );
      addRequest(profile.image, answers);
      Toast.show({
        type: "success",
        text1: "Request sent Successfully!",
      });
      setTimeout(() => {
        props.navigation.navigate("Home");
      }, 3000);
    } else {
      Toast.show({
        type: "error",
        text1: "Unable to send request",
        text2: "Request limit reached!",
      });
    }

    //setAnswers(answers);
  };

  const setAnswer = (index, answer) => {
    if (answer === "") {
      delete answers[index];
    } else setAnswers({ ...answers, [index]: answer });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ marginBottom: 15 }}>
        <SearchHeader
          navigation={props.navigation}
          callback={() => setState({ ...state, open: true })}
        />
      </View>
      <ScrollView
        // contentContainerStyle={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {questions.map(([id, { question, placeholder }]) => {
          return (
            <SingleQuestion
              setAnswer={setAnswer}
              key={id}
              index={id}
              last={id == questions.length}
              label={question}
              placeholder={placeholder}
            />
          );
        })}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 30,
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          {/* {Object.keys(answers ?? {}).length === questions.length ? ( */}
          <View style={{ width: "45%" }}>
            <AppButton
              enTitle="Submit"
              onPress={sendRequest}
              greyed={Object.values(answers).length < questions.length}
              disabled={Object.values(answers).length < questions.length}
            />
          </View>
          {/*         
          //         enTitle="Back"
          //         greyed
          //         style={{
          //           borderColor: colors.green, 
          //         }}
          //         fontColor={colors.green}
          //         onPress={() => previousQuestion(openId - 1)}
          //       />
          //     </View>
          //     <View style={{ width: "45%" }}>
          //       <AppButton
          //         enTitle="Next"
          //         onPress={() => nextQuestion(openId + 1)}
          //       />
          //     </View>
          //   </>
// )}*/}
        </View>
        {state.open && (
          <Filter
            setState={setState}
            setFilter={setFilter}
            state={state}
            filter={filter}
          />
        )}
      </ScrollView>
      {visible && (
        <ModalError
          enTitle="You must answer all questions"
          ptTitle="You must answer all questions"
          visible={visible}
        />
      )}
    </SafeAreaView>
  );
}

export default Questions;
