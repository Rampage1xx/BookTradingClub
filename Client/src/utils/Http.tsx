import axios, {AxiosInstance} from 'axios';

const instance1: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Content-Type': 'application/json'},
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    },
    withCredentials: true
});


const getFile = (): Promise<{}> => {
    return instance1.get('/file/prova.pdf')
         .then(r => {console.log(r); return r.data})
         .catch(e => e)
}

export { getFile}
