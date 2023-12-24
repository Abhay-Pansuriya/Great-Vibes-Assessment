import { Axios } from "axios";
const ServerURL = "https://6584555f4d1ee97c6bcf8410.mockapi.io/api/v1/assessment";

export const GetAllJobs = () => {
    return new Promise(async (resolve, reject) => {
        await Axios.get(`${ServerURL}/jobs`)
            .then(function (response) {
                resolve(response)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            });
    })
}

export const CreateNewJob = (input) => {
    return new Promise(async (resolve, reject) => {
        await Axios.post(`${ServerURL}/jobs`, input)
            .then(function (response) {
                console.log(response);
                resolve(response)
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            });
    })
}

export const UpdateJob = (input, id) => {
    return new Promise(async (resolve, reject) => {
        await Axios.put(`${ServerURL}/jobs/${id}`, input)
            .then(function (response) {
                console.log(response);
                resolve(response)
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            });
    })
}


export const DeleteJob = (input, id) => {
    return new Promise(async (resolve, reject) => {
        await Axios.delete(`${ServerURL}/jobs/${id}`, input)
            .then(function (response) {
                console.log(response);
                resolve(response)
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            });
    })
}


