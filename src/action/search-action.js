import API from '../../api'

export const search = (dispatch) => (keyword) => {
    API.post('/course/searchV2', {
        "keyword": keyword,
        "opt": {
          "sort": {
            "attribute": "price",
            "rule": "ASC"
          },
        "limit": 10,
        "offset": 1
      }
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "SEARCH_SUCCESSED", data: Response.data.payload })
            
        } else {
            dispatch({type: "SEARCH_FAILED", message: "SEARCH fail!"})
        }
    }).catch((Error) => {
        dispatch({type: "SEARCH_FAILED", message: "SEARCH fail!"})
    })

}