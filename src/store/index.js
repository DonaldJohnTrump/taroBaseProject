import { atom, selectorFamily } from 'recoil'
import { apiGetAText } from '../api/home'
// 计数器
export const GLOBAL_COUNT = atom({
  key: 'GLOBAL_COUNT',
  default: 0,
})

// 异步全局状态
export const TEST_ID = selectorFamily({
  key: 'TEST_ID', // 全局下保持唯一性
  get: () => async () => {
    let res
    try {
       res = await apiGetAText()
    } catch (error) {
        console.log(error);
    }
     return res
  }
})