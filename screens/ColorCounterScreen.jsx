import React, { useReducer, useState } from "react";
import { Text, View } from "react-native";

import { ColorCounter } from "../components/ColorCounter";

const INCREASEMENT = 15;

const ColorCounterReducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, red: state.red + action.value * INCREASEMENT };
    case "green":
      return { ...state, green: state.green + action.value * INCREASEMENT };
    case "blue":
      return { ...state, blue: state.blue + action.value * INCREASEMENT };
  }
};

export const ColorCounterScreen = () => {
  const [state, dispatch] = useReducer(ColorCounterReducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        title="Red"
        increase={() => dispatch({type: 'red', value: 1})}
        decrease={() =>  dispatch({type: 'red', value: -1})}
      />
      <ColorCounter
        title="Green"
        increase={() => dispatch({type: 'green', value: 1})}
        decrease={() =>  dispatch({type: 'green', value: -1})}
      />
      <ColorCounter
        title="Blue"
        increase={() => dispatch({type: 'blue', value: 1})}
        decrease={() =>  dispatch({type: 'blue', value: -1})}
      />

      <Text>
        {red} - {green} - {blue}
      </Text>

      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};
