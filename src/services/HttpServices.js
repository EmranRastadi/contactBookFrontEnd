class HttpServices {
    url = "http://localhost:8000/api";


    postData = async (item, add_url) => {
        const token = await localStorage.getItem("user");
        let requestOption = {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(item)
        }

        return fetch(this.url + "/" + add_url, requestOption).then(
            response => response.json()
        )
    }


    getData = async (add_url) => {
        const token = await localStorage.getItem("user");

        let requestOption = {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-type": "Application/json"
            }
        }
        return fetch(this.url + "/" + add_url, requestOption).then(
            response => response.json()
        )
    }
}

export default HttpServices;