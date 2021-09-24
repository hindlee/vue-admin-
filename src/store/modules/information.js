
import { getInformation } from '@/api/information'
import { user } from '@/store/modules/user'

import { mapGetters } from 'vuex'
const state = {
    name: '',
    gender: '',
    age: '',
    ability: ''
}

const mutations = {
   SET_NAME: (state, name) => {
        state.name = name
    },
    SET_GENDER: (state, gender) => {
        state.gender = gender
    },
    SET_AGE: (state, age) => {
        state.age = age
    },
    SET_ABILITY: (state, ability) => {
        state.ability = ability
    }
}


const actions = {
    // get user information 
    getInformation({ commit }, param) { 
        return new Promise((resolve, reject) => {
            getInformation( param ).then(response => {
                const { data } = response
                if (!data) {
                    return reject('load faild')
                }
                const { name, gender, age, ability } = data
                commit('SET_NAME', name)
                commit('SET_GENDER', gender)
                commit('SET_AGE', age)
                commit('SET_ABILITY', ability)
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

