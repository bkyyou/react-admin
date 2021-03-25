import React, { Component } from 'react';
// import { Layout, Menu } from 'antd';
import { Layout } from 'antd';
import Aside from '../..//components/home/aside/index.js';
import ContainMain from '../../components/containMain/index';
import './index.scss';

// import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons'

// const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      openKeys: [''],//当前展开的 SubMenu 菜单项 key 数组
      selectedKeys: [''],//当前选中的菜单项 key 数组
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };
  componentDidMount() {
    var test = document.getElementById('test');
    var remove = document.getElementById('remove');
    function funTest() {
        console.log('test');
        // test.removeEventListener('click');
    }
    test.addEventListener('click', funTest);
    remove.addEventListener('click', function() {
      console.log('test');
      test.removeEventListener('click', funTest);
    })
  }
  render() {
    return (
      <div className='home_container'>
        <Layout>
          {/* <Sider style='width: 150px'> */}
          {/* <Sider style={{width: '150px'}}> */}
          <Sider collapsed={this.state.collapsed}>
            <Aside></Aside>
          </Sider>
          <Layout>
            <Header className='header' onClick={this.onCollapse}>Header</Header>
            <Content className="content">
              <div>
                <div id="test">test</div>
                <div id="remove">remove</div>
                <ContainMain></ContainMain>
              </div>
            </Content>
          </Layout>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </div>

    )
  }
}

export default Home;