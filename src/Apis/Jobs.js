import Axios from "axios";
const ServerURL = "https://6584555f4d1ee97c6bcf8410.mockapi.io/api/v1/assessment";

export const GetAllJobs = (setData) => {
    Axios.get(`${ServerURL}/jobs`)
        .then(function (response) {
            if (response?.status === 200) {
                setData(response?.data)
            }
        })
        .catch(function (error) {
            setData({ errMessage: "Something went wrong", error })
        });

}

export const CreateNewJob = (input) => {
    return new Promise(async (resolve, reject) => {
        await Axios.post(`${ServerURL}/jobs`, input)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            });
    })
}

export const UpdateJob = (input, id) => {
    return new Promise(async (resolve, reject) => {
        await Axios.put(`${ServerURL}/jobs/${id}`, input)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            });
    })
}


export const DeleteJob = (id) => {
    return new Promise(async (resolve, reject) => {
        await Axios.delete(`${ServerURL}/jobs/${id}`)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            });
    })
}


