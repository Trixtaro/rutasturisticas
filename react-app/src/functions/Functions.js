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
            return false;
        }
        return false;
    } else {
        return data.admin;
    }
}

export async function getAdminAttribute () {
    const admin = await isAdmin();
    if (admin) {
        const data = await getProfile();
        return data;
    } else {
        return null;
    }
}