/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

function changeNodeToRented(data,id){
    data.forEach((item) => {
        if(item.children){
             changeNodeToRented(item.children,id)
        }else{
            if(item.id==id){
                item.isRented = true
            }
        }
     })
}
function addWorkSection(data,form){
    data.forEach((item) => {
        if(item.id == form.farNodeId){
            delete form.farNodeId
            item.children.unshift(form)
            return 1
        } })
    data.forEach((item) => {
        if(item.children){
            if(addWorkSection(item.children,form)){
                return 1
            }
        }
    })
}

module.exports = {
    param2Obj,
    changeNodeToRented,
    addWorkSection
}
