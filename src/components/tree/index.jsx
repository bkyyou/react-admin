import React, { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { getUserList } from '../../api/login/index.js';

import './index.css';

const YouMenuItem = (props) => {
  const { data, isPaddingL } = props;
  // console.log('data', data)
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={isPaddingL ? 'paddingL' : ''}>
      {
        data.children 
        ? 
        <div>
          <div onClick={() => setIsShow(!isShow)}>
            {isShow ? <UpOutlined /> : <DownOutlined />}
            {data.title}
          </div>
          {
            isShow && <div>
              {data.children.map((val, i) => {
                return <YouMenuItem key={i} data={val} isPaddingL={true}></YouMenuItem>
              })}
            </div>
          }
        </div> 
        :
        <YouMenuItemSub title={data.title}></YouMenuItemSub>
      }

    </div>
  )
}

const YouMenuItemSub = (props) => {
  const { title } = props;
  return (
    <div>
      {title}
    </div>
  )
}

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const ExpandTable = ({columns, data}) => {
  const [expandData, setExpandData] = useState({});
  return <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => {
        console.log('expandedRowRender record', record);
        // return <p style={{ margin: 0 }}>{record.description}</p>
        return <ExpandTable data = {expandData[record.key]} columns={columns}/>
      },
      rowExpandable: (record) => record.name !== 'Not Expandable',
      // onExpandedRowsChange: (val) => {
      //   console.log(val)
      // },
      onExpand: (expanded, record) => {
        console.log(expanded, record)
        setExpandData({...expandData, [record.key]: data});
      },
    }}
    dataSource={data}
  />
}

const YouMenu = (props) => {
  const { menuData } = props;
  return (
    <>
      {menuData.map((val, i) => {
        return <YouMenuItem key={i} data={val} isPaddingL={false}></YouMenuItem>
      })}
    </>
  )
}


export default YouMenu;