
const information = {
    '1': {
        name: '张三',
        gender: '男',
        age: '22',
        ability: '开车'
    },
    '2': {
        name: '李四',
        gender: '男',
        age: '21',
        ability: '做饭'
    }
}


module.exports = [
  // get user information
  {
    url: '/vue-admin-template/information/getBaseInformation\.*',
    type: 'get',
    response: config => {
      const { id } = config.query
      const data = information[id]
      // mock error
      if (!data) {
        return {
          code: 60204,
          message: 'ID wrong,try again'
        }
      }

      return {
        code: 20000,
        data: data
      }
    }
  },
]
