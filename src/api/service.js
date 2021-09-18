import axios from 'axios'
import NProgress from 'nprogress'
import  'nprogress/nprogress.css'

const service = axios.create({
    timeout: 10000,
  });

// 请求拦截器
service.interceptors.request.use((config)=>{
    NProgress.start();
    return config;
});


// 响应拦截器
service.interceptors.response.use((response)=>{
    NProgress.done();
     return response.data;
    },
    (error)=>{
    NProgress.done();
    alert('请求异常'+ error.message)
    /*return Promise.reject(error);//抛出一个reject状态的promise,方便以后处理 */
    return Promise(()=>{})//抛出一个padding状态的promise,中断异常，后续不处理
    }
) 


export default service