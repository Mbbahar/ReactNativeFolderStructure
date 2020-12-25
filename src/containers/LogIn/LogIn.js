import React from "react";
import { ViewComponent, Button } from "../../components";

const LogIn = ({_login}) => {
    return (
        <ViewComponent>
            <Button text={"Login"} onPress={_login} />
        </ViewComponent>
    );
}

export default LogIn