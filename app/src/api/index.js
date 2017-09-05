/**
 * Created by xiangtianyu on 2017/9/5.
 */
import axios from 'axios'
import {
    cityListSource
} from './resource'
export default {
  getCityList (num) {
    return axios.get(cityListSource, {
      params: {
        count: num
      }
    })
  }
}
