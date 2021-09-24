import request from '@/utils/request'

export function getInformation(date) {
  return request({
    url: '/vue-admin-template/information/getBaseInformation',
    method: 'get',
    params: date 
  })
}
