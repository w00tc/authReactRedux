import React from 'react';
import {useLogout} from "./LogoutHook";
import Button from "@material-ui/core/Button";

export const Logout = () => {
    const {handleClick} = useLogout();
    return (
        <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                > Logout</Button>
        </div>
    )
}