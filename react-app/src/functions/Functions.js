import axios from 'axios';

export const getProfile = async () => {

    const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/profile`,{
        headers: {
            Authorization: `Bearer ${localStorage.usertoken}`
        }
    })

    const data = await response.json();

    return data;

}
