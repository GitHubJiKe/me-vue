const app = {
  menus: [
    {
      title: 'INFORMATION',
      id: 1,
      pageKey: 'home'
    },
    {
      title: 'EDUCATION',
      id: 2,
      pageKey: 'education'
    },
    {
      title: 'WORKEXPERIENCE',
      id: 3,
      pageKey: 'work-experience'
    },
    {
      title: 'ABILITY',
      id: 4,
      pageKey: 'ability'
    },
    {
      title: 'WORKS',
      id: 5,
      pageKey: 'works'
    },
    {
      title: 'OTHERS',
      id: 6,
      pageKey: 'others'
    }
  ],
  languageType: 'zh'
}
const languageMap = {
  INFORMATION: {
    zh: '个人信息',
    en: 'Personal Information'
  },
  EDUCATION: {
    zh: '教育经历',
    en: 'Education'
  },
  WORKEXPERIENCE: {
    zh: '工作经历',
    en: 'Work Experience'
  },
  ABILITY: {
    zh: '能力展示',
    en: 'Ability'
  },
  WORKS: {
    zh: '作品展示',
    en: 'Works Show'
  },
  OTHERS: {
    zh: '其他',
    en: 'Others'
  },
  NAME: {
    zh: '姓名',
    en: 'Name'
  },
  SEX: {
    zh: '性别',
    en: 'Gender'
  },
  WORKYEARS: {
    zh: '工作年限',
    en: 'Work Years'
  },
  BIRTHDAY: {
    zh: '生日',
    en: 'Birthday'
  },
  CITY: {
    zh: '城市',
    en: 'City'
  },
  MOBILEPHONE: {
    zh: '手机号',
    en: 'MobilePhone'
  },
  EMAIL: {
    zh: '电子邮箱',
    en: 'Email'
  },
  DESCRIPTION: {
    zh: '格言',
    en: 'Motton'
  }
}
const basicInfo = {
  name: {
    zh: '苑朋飞',
    en: 'Peter Yuan'
  },
  sex: {
    zh: '男',
    en: 'Male'
  },
  education: {
    zh: '本科',
    en: 'Undergraduate Degree'
  },
  workyears: {
    zh: '3 年',
    en: 'Three Years'
  },
  birthday: {
    zh: '1993 - 02 - 19',
    en: '1993 - 02 - 19'
  },
  city: {
    zh: '北京',
    en: 'Beijing'
  },
  mobilephone: {
    zh: '18518981046',
    en: '18518981046'
  },
  email: {
    zh: 'ypf9319@gmail.com',
    en: 'ypf9319@gmail.com'
  },
  description: {
    zh: '快乐、健康',
    en: 'Happy、Healthy'
  }
}
const educationInfo = {
  collageName: {
    zh: '防灾科技学院',
    en: 'INSTITUTE OF DISASTER PREVENTION'
  },
  graduateDate: {
    zh: '2016 年 7 月 毕业',
    en: 'graduated in July 2016'
  },
  education: {
    zh: '本科',
    en: 'Undergraduate Degree'
  },
  speciality: {
    zh: '计算机科学与技术专业',
    en: 'Computer Science & Technology'
  },
  awards: {
    zh: '三次学院二等奖学金',
    en: '3 times of scholarship'
  }
}
export default {
  app,
  languageMap,
  basicInfo,
  educationInfo
}
