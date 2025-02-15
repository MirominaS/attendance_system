import axios from 'axios';

export const serverConnector = ({url,payload,headers}) => {return new Promise((resolve,reject) => {
    let endPointURL = process.env.REACT_APP_API_SERVER_ENDPOINT + url
        axios.post(endPointURL,payload,{headers:headers})
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error?.response?.data)
            });    
    })
   
}
