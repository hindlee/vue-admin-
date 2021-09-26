import { getMap, rentingMap, addWorkSection } from '@/api/map'
import { mapGetters } from 'vuex'

const state = {
    mapData:[]
}

const mutations = {
   SET_MAPDATA: (state, data) => {
        state.mapData = data
    },
   
}

const actions = {
    // get 园区数据 
    getMap({ commit }) { 
        return new Promise((resolve, reject) => {
            getMap().then(response => {
                const { data } = response
                console.log(data)
                if (!data) {
                    return reject('load faild')
                }
                commit('SET_MAPDATA', data)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 租借 园区
    rentingMap({ commit }, data) { 
        return new Promise((resolve, reject) => {
            rentingMap(data).then(response => {
                const { data } = response
                if (!data) {
                    return reject('load faild')
                }
                commit('SET_MAPDATA', data)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    //add new work Section
    addWorkSection({ commit },data ) { 
        return new Promise((resolve, reject) => {
            addWorkSection(data).then(response => {
                const { data } = response
                if (!data) {
                    return reject('load faild')
                }
                commit('SET_MAPDATA', data)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

