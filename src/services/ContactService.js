import HttpServices from "./HttpServices";
import {Http} from "@material-ui/icons";

export const AddContactService = (credential) => {

    const Https = new HttpServices();
    let addUrl = "user/contacts/add";
    credential.token = localStorage.getItem("user");
    return Https.postData(credential, addUrl).then((res) => {
        return res
    }).catch(error => console.log("adding error : ", error))
}

export const GetAllContactsService = (page) => {
    const Https = new HttpServices();
    let page_size = 4
    let add_url = "user/contacts/data-all/" + localStorage.getItem("user") + "/" + page_size + "?page=" + page;
    return Https.getData(add_url).then(res => {
        return res;
        // console.log("result " ,res);
    }).catch(error => console.log("get data has a error : ", error))
}

export const GetSearchDataService = (searchContent, page) => {
    let token = localStorage.getItem("user");
    const Https = new HttpServices();
    let pageSize = 4;
    if (page == "") {
        let addUrl = "user/contacts/search/" + searchContent + "/" + token + "/" + pageSize;
        return Https.getData(addUrl).then(res => {
            return res;
        }).catch(error => console.log("error in fetch : ", error));
    } else {
        let addUrl = "user/contacts/search/" + searchContent + "/" + token + "/" + pageSize + "?page=" + page;
        return Https.getData(addUrl).then(res => {
            return res;
        }).catch(error => console.log("error in fetch : ", error));
    }
}

export const GetSingleDataService = (id) => {
    const Httpss = new HttpServices();
    let url = "user/contacts/get-single/" + id;
    if (id=='') {

    } else {
        return Httpss.getData(url).then((res) => {
            return res;
        }).catch(error => console.log("error in fetch service : ", error));
    }
}

export const EditContactService = (credential , id) => {
    const Https = new HttpServices();
    let addUrl = "user/contacts/edit-single/"+id;
    return Https.postData(credential,addUrl).then(res => {
        return res;
    }).catch(error => console.log("send data has error : " , error))
}

