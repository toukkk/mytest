import { Message } from "element-ui"
// export const Executor=(cb) => new Promise((resolve, reject) => {
//   cb().then((res) => {
//     if(res.errCode===0) {
//       resolve(res)
//     } else {
//       Message.error(res.message);
//       reject(res)
//     }
//   })
// })
export const Executor = function (cb) {
  return new Promise((resolve, reject) => {
    cb().then(res => {
      if (res.errCode === 0) {
        resolve(res);
      }
      else {
        Message.error(res.errMessage)
        reject(res)
      }
    })
  })
}
export function AlgorithmListA(params) {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  }
  res.data = [
    {
      url: require("@/assets/image/logo.png"),
      algoId: "1245",
      algoName: "表情包",
      algoType: "图片类",
      algoEdition: "v1.2.3",
      algoTime: "2022-5-6 6:00:00",
      algoSupplier: "test",
      algoState: true,
      subscribe: true,
    },
    {
      url: require("@/assets/image/logo.png"),
      algoId: "1246",
      algoName: "test",
      algoType: "图片类",
      algoEdition: "v1.2.3",
      algoTime: "2022-5-6 6:00:00",
      algoSupplier: "test",
      algoState: true,
      subscribe: false,
    },
  ]
  if (params) {
    if (params.algoName) {
      res.data = res.data.filter(val => val.algoName === params.algoName)
    }
    if (params.algoType) {
      res.data = res.data.filter(val => val.algoType === params.algoType)
    }
  }
  res.errCode = 0
  res.errMessage = 'file'
  res.total = res.data.length
  return Promise.resolve(res)
}
export function SupplierListA(params) {
  // requset.get('/algo/delete',{id:1}) = 
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  };
  res.data = [
    {
      supplierName: "test",
      contacts: "tiezhu",
      post: "经理",
      telephone: "12345678910",
      mailbox: "824618906@qq.com",
      algoEmpower: [
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
      ],
      userEmpower: [
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
      ],
    },
    {
      supplierName: "test1",
      contacts: "tiezhu",
      post: "经理",
      telephone: "12345678910",
      mailbox: "824618906@qq.com",
      algoEmpower: [
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
      ],
      userEmpower: [
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
      ],
    },
    {
      supplierName: "test2",
      contacts: "tiezhu",
      post: "经理",
      telephone: "12345678910",
      mailbox: "824618906@qq.com",
      algoEmpower: [
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
        {
          algoName: '表情包',
          onLineDate: '2022.4.15'
        },
      ],
      userEmpower: [
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
        {
          userName: 'tiezhu',
          empowerDate: '2022.2.12',
        },
      ],
    },
  ];
  if (params) {
    if (params.supplierName) {
      res.data = res.data.filter(val => val.supplierName == params.supplierName)
    }
  }
  res.errCode = 0
  res.errMessage = 'file'
  res.total = res.data.length
  return Promise.resolve(res)
}
export function FriendsListA() {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  };
  res.data = [
    {
      name: '张铁柱',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    },
    {
      name: '张大雷',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    }, {
      name: '张戚戚',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    }, {
      name: '张为荣',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    }, {
      name: '张瑞文',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    }, {
      name: '张光辉',
      relationship: '兄弟',
      avatar: require("@/assets/image/avatar.jpeg"),
      gender: '男',
      motto: '求百事之荣，不如免一事之辱；邀千人之欢，不如释一人之怨',
      message: '拼命去争取成功，但不要期望一定会成功',
      describe: '眼睛是心灵的窗户，每一个人的眼睛都不一样，有的大，有的小，所以它们总会散发出不同的意思，带给人们不同的感受。在这么多的眼睛中，老师的那双水汪汪的眼睛是我觉得最美的眼睛!',
    },
  ];
  res.errCode = 0
  res.errMessage = 'file'
  res.total = res.data.length
  return Promise.resolve(res)
}
export function ToolListA(params) {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  };
  res.data = {
    head: [{ name: "包分头" }, { name: "满足头" }],
    necklace: [{ name: "包分项链" }, { name: "满足项链" }],
    nail: [{ name: "包分甲" }, { name: "满足甲" }],
    knife: [{ name: "包分刀" }, { name: "满足刀" }],
    ring: [{ name: "包分戒指" }, { name: "满足戒指" }],
    shoes: [{ name: "包分鞋" }, { name: "满足鞋" }],
  }

  if (params) {
    res.data = res.data[params]
  } else {
    res.data = []
  }
  res.errCode = 0
  res.errMessage = 'file'
  res.total = res.data.length
  return Promise.resolve(res)
}
export function PartListA(params) {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  };
  res.data = [
    { option: 'head', url: require("@/assets/image/avatar.jpeg") },
    { option: 'necklace', url: require("@/assets/image/avatar.jpeg") },
    { option: 'nail', url: require("@/assets/image/avatar.jpeg") },
    { option: 'knife', url: require("@/assets/image/avatar.jpeg") },
    { option: 'ring', url: require("@/assets/image/avatar.jpeg") },
    { option: 'shoes', url: require("@/assets/image/avatar.jpeg") }]

  if (params) {
    res.data = res.data.map((val) => {
      if (params.name) {
        val.url = params.url
      }
      return val;
    }
    )
  }
  res.errCode = 0
  res.errMessage = 'file'
  res.total = res.data.length
  return Promise.resolve(res)
}



const ids = [1245, 1246]
export const removeAlgo = (id) => {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  }
  if (ids.includes(id - 0)) {
    res.errCode = 0
    res.message = '删除成功'
  } else {
    res.errCode = 1000
    res.message = '删除失败'
  }
  return res
}
const names = ["test", "test1", "test2"]
export const removeSup = (name) => {
  const res = {
    data: [],
    errCode: 0,
    message: '',
    total: 0
  }
  if (names.includes(name)) {
    res.errCode = 0
    res.message = '删除成功'
  } else {
    res.errCode = 1000
    res.message = '删除失败'
  }
  return res
}
























export const requestAlgo = Executor(async () => AlgorithmListA())
export const requestSuppliuer = Executor(async () => SupplierListA())


