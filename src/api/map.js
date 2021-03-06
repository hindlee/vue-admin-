import request from '@/utils/request'

export function getMap(){
    return request({
                   url: '/vue-admin-template/map/getMap',
                   method: 'get',
    })
}
export function rentingMap(data){
    return request({
                   url: '/vue-admin-template/map/rentingMap',
                   method: 'post',
                   params:{data}                    
    })
}
export function addWorkSection(data){
	return request({
		url: '/vue-admin-template/map/addWorkSection',
		method: 'post',
		params:data                    
	})
}
