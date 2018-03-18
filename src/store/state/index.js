import moment from 'moment'
const DATE_FORMAT = 'YYYY / MM / DD'
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
    },
    {
      title: 'COMMENTS',
      id: 7,
      pageKey: 'comments'
    }
  ],
  languageType: 'zh',
  showHeaderAndFooter: true
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
  },
  WORKCONTENT: {
    zh: '工作内容',
    en: 'Work Content'
  },
  COMMENTS: {
    zh: '评论区',
    en: 'Comments'
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
const workExperience = [
  {
    company: {
      zh: '彪洋科技',
      en: 'Boldseas'
    },
    position: {
      zh: '软件开发工程师',
      en: 'software developer'
    },
    dates: [
      moment('2016-04').format(DATE_FORMAT),
      moment().format(DATE_FORMAT)
    ],
    workContent: [
      '使用React、NodeJs技术开发广汽菲克及本公司财务管理系统',
      '与PO一起进行需求分析，给出客户满意的解决方案',
      '使用Vue框架承接保时捷公司H5页面，提供实现可配置化解决方案',
      '与团队一起使用React框架进行保时捷公司售前管理系统的重构',
      '与PO和院队成员一起需求分析，讨论解决方案，攻克技术难题',
      '参与敏捷开发流程培训和实践，参与story划分和task拆分过程',
      '参与代码重构和优化分享',
      '结对编程，帮助实习生快速成长'
    ]
  },
  {
    company: {
      zh: '映客直播',
      en: 'Inke'
    },
    position: {
      zh: '安卓开发实习',
      en: 'android app develop intern'
    },
    dates: [
      moment('2015-11').format(DATE_FORMAT),
      moment('2016-03').format(DATE_FORMAT)
    ],
    workContent: [
      '结合产品提出的需求，开发部分模块功能',
      '与测试人员一起对app进行性能测试和优化',
      '重构图片加载代码'
    ]
  }
]
const works = [
  {
    link: 'https://rebuild.porsche-dealer-platform.com/',
    zh: 'PMP',
    en: 'PMP',
    company: {
      zh: '保时捷',
      en: 'Porscher'
    },
    description: 'MyBudget 是广汽菲克公司内部用于管理财务支出和分配以及车型拨款和收、放款的一个系统，前端主要使用React框架和antd组件库进行开发，后台技术架构使用NodeJS + Express，主要实现了整个广汽菲克公司内部报价提报审批和分派的整个流程。',
    dutys: [
      '需求分析',
      '任务拆解',
      '页面组件化',
      '接口定义及开发',
      '配合测试',
      '代码优化',
      'bug fix',
      '版本迭代'
    ]
  },
  {
    link: 'https://porsche-pdp-minisite.boldseas.com/G1R1',
    zh: 'PDP',
    en: 'PDP',
    company: {
      zh: '保时捷',
      en: 'Porscher'
    },
    description: '本项目是保时捷公司的一款通过短信推送H5短链实现内容分发和信息留资，实现潜客培育流程推进的一个手机移动端项目。由于期数比较多，所以前台采用Vue 框架实现组件化和配置化的方式实现，配合神策采集用户操作的信息和数据，为客户定制出一份转化数据漏斗分析Excel表。',
    dutys: [
      'PS 素材切图',
      'Vue组件化实现各个不同页面的定制',
      '神策调研、接入'
    ]
  },
  {
    link: 'https://mybudget.cjdkpi.com.cn/login',
    zh: 'MyBudget',
    en: 'MyBudget',
    company: {
      zh: '广汽菲克',
      en: 'GAC FCA'
    }
  }
]
const comments = []
export default {
  app,
  languageMap,
  basicInfo,
  educationInfo,
  workExperience,
  works,
  comments
}
