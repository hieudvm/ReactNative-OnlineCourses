import API from '../../api'
import { resume } from 'expo/build/AR'

const isloading = true

const data = []

export const getTopSellCourses = () => {
    API.post('/course/top-sell', {
        "limit": 10,
        "page": 1
    }).then((Response) => {
        if (Response.status === 200) {
            isloading = false
            data = Response.payload
            return data
        } else {
            return new Array()
        }
    }).catch((Error) => {
        return new Array()
    })
}

export const getTopNewCourses = () => {
    API.post('/course/top-new', {
        "limit": 10,
        "page": 1
    }).then((Response) => {
        if (Response.status === 200) {
            isloading = false
            data = Response.payload
            return data
        } else {
            return new Array()
        }
    }).catch((Error) => {
        return new Array()
    })
}

export const getTopRateCourses = () => {
    API.post('/course/top-rate', {
        "limit": 10,
        "page": 1
    }).then((Response) => {
        isloading = false
        data = Response.payload
        return data
    }).catch((Error) => {
        return new Array()
    })
}

export {isloading}