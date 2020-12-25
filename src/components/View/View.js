import React, { PropTypes } from 'react'
import { View } from "react-native";
import style from "./styles";

const ViewComponent = props => {
    return (
        <View style={style}>
            {style}
        </View>
    )
}

export {ViewComponent}