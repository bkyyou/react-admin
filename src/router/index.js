const routers = [
  {
    title: '控制台',
    icon: 'home',
    key: '/home'
  },
  {
    title: '用户管理',
    icon: 'laptop',
    key: '/user/index',
    children: [
      {
        title: '用户列表',
        // key: '/user/index',
        key: '/home/user/list',
        icon: ''
      },
      {
        title: '添加用户',
        // key: '/home/general/index',
        key: '/home/user/add',
        icon: ''
      },
    ]
  },
  {
    title: '部门管理',
    key: '/home/department',
    children: [
      {
        title: '部门列表',
        key: '/home/department/list',
        icon: ''
      },
      {
        title: '添加部门',
        key: '/home/department/add',
        icon: ''
      },
    ]
  },
  {
    title: '职位管理',
    icon: 'edit',
    key: '/home/entry',
    children: [
      {
        key: '/home/entry/form/basic-form',
        title: '职位列表',
        icon: ''
      },
      {
        key: '/home/entry/form/step-form',
        title: '添加职位',
        icon: ''
      },
    ]
  },
  {
    title: '计算公式',
    icon: 'edit',
    key: '/home/drag',
    children: [
      {
        key: '/home/drag',
        title: '拖拽编辑',
        icon: ''
      },
    ]
  },
  {
    title: '请假',
    icon: 'info-circle-o',
    key: '/home/about'
  },
  {
    title: '组件测试',
    icon: 'info-circle-o',
    key: '/home/test',
    children: [
      {
        key: '/home/expandtabletest',
        title: '表格套娃',
        icon: ''
      },
      // {
      //   title: '虚拟列表',
      //   icon: 'info-circle-o',
      //   key: '/home/virtuallist'
      // },
      {
        title: 'testtree',
        icon: 'info-circle-o',
        key: '/home/testtree'
      },
      {
        title: 'testdialog',
        icon: 'info-circle-o',
        key: '/home/testdialog'
      },
      {
        title: 'drag2',
        icon: 'info-circle-o',
        key: '/home/drag2'
      },
    ]
  },
  // {
  //   title: 'antd虚拟列表',
  //   icon: 'info-circle-o',
  //   key: '/home/testantdvirtable'
  // },
  // {
  //   title: 'testtree',
  //   icon: 'info-circle-o',
  //   key: '/home/testtree'
  // },
  {
    title: '加班',
    icon: 'info-circle-o',
    key: '/home/overtime'
  }
]

export default routers;