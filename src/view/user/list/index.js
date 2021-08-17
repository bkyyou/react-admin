import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActions, bindState } from '../../../reducer/reducer';
import { getUserList } from '../../../api/login/index.js';
import Loading from '../../../components/loading';
import { Table, Tag, Space } from 'antd';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: []
    }
  }
  componentDidMount() {
    console.log('this.props----1', this.props)
    this.props.updateLoadingState({show: true, loadingTip: '表格加载中...'})
    setTimeout(() => {
      console.log('this.props----2', this.props)
    }, 500);
    getUserList().then(res => {
      console.log('res', res);
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
      setTimeout(() => {
        this.props.updateLoadingState({show: false, loadingTip: '表格加载中...'})
        this.setState({
          columns,
          data
        })
      }, 2000);

      setTimeout(() => {
        columns[0].title = 1
        console.log(111222)
        this.props.updateLoadingState({show: false, loadingTip: '表格加载中...'})

        this.setState({
          columns
        })
      }, 6000);
    })
  }
  render() {
    let { columns, data } = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <Loading></Loading>
      </div>
    )
  }
}

export default connect(bindState, bindActions)(UserList);