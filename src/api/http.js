import Taro from '@tarojs/taro';
import {
  baseUrl,
} from './tools';

const request_data = {
  platform: 'wap',
  rent_mode: 2,
};

export default (options = {
  method: 'GET',
  data: {}
}) => {
  Taro.showLoading({
    title: '加载中',
  })
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const {
      statusCode,
      data
    } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.status !== 'ok') {
        Taro.showToast({
          title: `请求错误` || res.data.error.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  }).catch(err => {
    Taro.showToast({
      title: '请求失败',
      icon: 'error',
      duration: 2000
    })
  }).finally(()=>{
    Taro.hideLoading()
  });
};