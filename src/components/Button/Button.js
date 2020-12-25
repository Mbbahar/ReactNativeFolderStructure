import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from "react-native";
import style from "./styles";

const Button = ({text}) => {

    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export {Button}