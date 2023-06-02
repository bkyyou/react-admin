import React, { useState } from 'react';
import { Table } from 'antd';

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

const ExpandTable = ({columns, data}) => {
  const [expandData, setExpandData] = useState({});
  return data ? <Table
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
        setTimeout(() => {
          setExpandData({...expandData, [record.key]: data});
        }, 2000);
      },
    }}
    dataSource={data}
  /> : '请稍后。。。'
}

export default ExpandTable