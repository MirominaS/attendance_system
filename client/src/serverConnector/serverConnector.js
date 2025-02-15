import axios from 'axios';

export const serverConnector = ({url,payload}) => {return new Promise((resolve,reject) => {
    axios.post(url,payload)
    .then((response) => {
        resolve(response);
    })
    .catch((error) => {
        reject(error?.response?.data)
      });
    })
}
