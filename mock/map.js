var data =[
    {
        id: 1,
        label: 'A栋',
        company: 'null',
        isRented: false,
        rentedItem: 'null',
        children:[
            {
                id: 2,
                label: 'A栋 一楼',
                company: '可口可乐',
                isRented: true,
                rentedItem: '2021-02-12 -> 2022-02-12',
                children:[
                    {
                        id: 3,
                        label: 'A栋 一楼 房间101',
                        company: '可口可乐',
                        isRented: true,
                        rentedItem: '2021-02-12 -> 2022-02-12',
                        children:[
                            {
                                id: 4,
                                label: 'A栋 一楼 房间101 工位1号',
                                linkman: '张三',
                                phone: '12345678',
                                company: '可口可乐',
                                isRented: true,
                                rentedItem: '2021-02-12 -> 2022-02-12',
                            },
                            {
                                id: 5,
                                label: 'A栋 一楼 房间101 工位2号',
                                linkman: '李四',
                                phone: '12345678',
                                company: '可口可乐',
                                isRented: true,
                                rentedItem: '2021-02-12 -> 2022-02-12',
                            },
                            {
                                id: 6,
                                label: 'A栋 一楼 房间101 工位3号',
                                linkman: '王五',
                                phone: '12345678',
                                company: '可口可乐',
                                isRented: true,
                                rentedItem: '2021-02-12 -> 2022-02-12',
                            },
                            {
                                id: 7,
                                label: 'A栋 一楼 房间101 工位4号',
                                linkman: '杨六',
                                phone: '12345678',
                                company: '可口可乐',
                                isRented: true,
                                rentedItem: '2021-02-12 -> 2022-02-12',
                            }
                        ]
                    }
                ]
            },
            {
                id: 8,
                label: 'A栋 二楼',
                company: 'null',
                isRented: false,
                rentedItem: 'null',
                children:[
                    {
                        id: 9,
                        label: 'A栋 二楼 房间102',
                        company: 'null',
                        isRented: false,
                        rentedItem: 'null',
                        children:[
                            {
                                id: 10,
                                label: 'A栋 二楼 房间102 工位5号',
                                linkman: 'null',
                                phone: 'null',
                                company: 'null',
                                isRented: false,
                                rentedItem: 'null',
                            },
                            {
                                id: 11,
                                label: 'A栋 二楼 房间102 工位6号',
                                linkman: 'null',
                                phone: 'null',
                                company: 'null',
                                isRented: false,
                                rentedItem: 'null',
                            },
                            {
                                id: 6,
                                label: 'A栋 二楼 房间102 工位7号',
                                linkman: '柳七',
                                phone: '12345678',
                                company: '个人',
                                isRented: true,
                                rentedItem: '2021-02-12 -> 2022-02-12',
                            },
                            {
                                id: 7,
                                label: 'A栋 二楼 房间102 工位8号',
                                linkman: 'null',
                                phone: 'null',
                                company: 'null',
                                isRented: false,
                                rentedItem: 'null',
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const { changeNodeToRented, addWorkSection } = require('./utils')

module.exports = [
    //园区数据
    { url: '/vue-admin-template/map/getMap',
        type: 'get',
        response: config => {
            // const data  = data      // mock error
            return {
                code: 20000,
                data: data
            }
        }
    },
    //租借工位，改变数据
    { url: '/vue-admin-template/map/rentingMap',
        type: 'post',
        response: config => {
            // const data  = data      // mock error
            changeNodeToRented(data,config.query.data)
            return {
                code: 20000,
                data
            }
        }
    },
	//add new workSection
	{ url: '/vue-admin-template/map/addWorkSection',
		type: 'post',
		response: config => {
            addWorkSection(data,config.query)
			return {
				code: 20000,
				data
			}
		}
	},

]

