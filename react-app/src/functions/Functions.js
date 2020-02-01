import axios from 'axios';

export const getProfile = async () => {

    const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/profile`,{
        mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${localStorage.usertoken}`
        }
    })

}
