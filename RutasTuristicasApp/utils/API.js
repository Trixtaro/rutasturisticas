const BASE_API = 'http://167.71.172.89:8080'

class API {

    getLugarPorZona = async (id) => {
        const response = await fetch(`${BASE_API}/api/lugares/${id}`);
        const data = response.json()
        console.log(data)
        return data
    }

}

export default new API();