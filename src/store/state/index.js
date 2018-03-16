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
  }
}
export default {app, languageMap}
