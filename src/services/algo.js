import axios from "axios";
// 获取算法
export const getAlgo = async (params) => {
  const { data } = await axios.get('/mock/dataalgo.json')
  if (params) {
    if (params.algoName) {
      return data.filter(val => val.algoName === params.algoName)
    }
    if (params.algoType) {
      return data.filter(val => val.algoType === params.algoType)
    }
    // if (typeof params.remover === "number"){
    //   data.splice(params.remover, 1);
    // }
  }
  return data
}

// 获取供应商
export const getSupplier = async (params) => {
  const { data } = await axios.get('/mock/datasupplier.json')
  if (params) {
    if (params.supplierName) {
      return data.filter(val => val.supplierName == params.supplierName)[0]
    }
  }
  return data
}

// 获取好友
export const getFriends = async () => {
  const { data } = await axios.get('/mock/datafriends.json')
  return data
}

// 获取武器
export const getArms = async (params) => {
  const { data } = await axios.get('/mock/dataarms.json')
  if (params) {
    if (params.name == "part") {
      if (params.replace) {
        // return data["part"].map((val) => {
        //   if (val.option==params.replace.part) {
        //     val.url = params.replace.url
        //   }
        return data["part"].map((val) => {
          if (val.option==params.replace.part) {
            val.url = params.imageUrl
          }
        return val
      })
    }
    return data["part"]
  }
  if (params.name == "tool") {
    if (params.part) {
      return data[params.name][params.part]
    }
    return data["tool"]
  }
}
}

// 获取评价
export const getRate = async () => {
  const { data } = await axios.get('/mock/datarate.json')
  return data
}


// export const getArms = () => {
//   return axios.get('/mock/database.json')
// }