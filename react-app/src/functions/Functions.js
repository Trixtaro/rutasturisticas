import { Redirect } from "react-router-dom";

export const getProfile = async () => {
    const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/profile`,{
        headers: {
            Authorization: `Bearer ${localStorage.usertoken}`
        }
    })
    const data = await response.json();
    return data;
}

export async function isAdmin () {
    const data = await getProfile();
    console.log(data);
    if (data.length === 1) {
        console.log(data[0]);
        if ( data[0] === 'token_invalid' ) {
            alert('Token invalido');
            return false;
        }
        return false;
    } else {
        return data.admin;
    }
}