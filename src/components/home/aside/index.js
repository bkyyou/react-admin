// import React, { Component } from 'react';
// import { Layout } from 'antd';
// import './index.scss';


// class Aside extends Component {
//   render() {
//     return (
//       <div className='aside_container'>
//         aside_container
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { getMs } from '../../api/login/index.js';
// import { Button, message, Menu, Layout } from 'antd';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Routers from '../../../router/index.js';
import './index.scss';

// const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const rootSubmenuKeys = [];

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKeys: [],//当前展开的 SubMenu 菜单项 key 数组
      // selectedKeys: ['/home/user/list'],
      selectedKeys: [],//当前选中的菜单项 key 数组
    }
  }
  componentDidMount() {
    // console.log('this.props.location.pathname', this.props);
    this.setState({
      selectedKeys: [this.props.location.pathname]
    })
  }
  openSubMenu = openKeys => {
    // const { collapsed } = this.state;
    // if (collapsed) {
    //   return false; // 因收缩Sider后hover SubMenu还会触发该事件，因此在此判断当前Sider的收缩状态来return false;
    // }
    // console.log('openKeys', openKeys);
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  selectSubMenu = selectedKey => {
    console.log('selectedKey', selectedKey);
    this.setState({
      selectedKeys: selectedKey.selectedKeys
    })
  }

  // 无子级菜单处理
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item icon={<UserOutlined />} key={key}>
        <Link to={key}>{title}</Link>
      </Menu.Item>
    )
  }

  // 子级菜单处理
  renderSubmenu = ({ title, key, children }) => {
    return (
      <SubMenu key={key} icon={<UserOutlined />} title={title}>
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? this.renderSubmenu(item) : this.renderMenu(item);
          })
        }
      </SubMenu>
    )
  }

  render() {
    const { openKeys, selectedKeys } = this.state;
    // let defaultProps = collapsed ? {} : { openKeys };
    return (

      <div className="aside_container">
        <div className="logo">
          <div>logo</div>
        </div>
        <Menu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          mode="inline"
          theme="dark"
          onOpenChange={this.openSubMenu}
          onSelect={this.selectSubMenu}
        // inlineCollapsed={this.state.collapsed}
        // inlineCollapsed={true}
        // {...defaultProps}
        >
          {
            Routers && Routers.map(firstItem => {
              return firstItem.children && firstItem.children.length > 0 ? this.renderSubmenu(firstItem) : this.renderMenu(firstItem);
            })
          }
          {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}

export default withRouter(Aside);