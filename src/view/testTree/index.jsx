import React from 'react';
import YouMenu from '../../components/tree/index.jsx';

const TestRree = () => {
  const testData = [
    {
      title: '1',
    },
    {
      title: '2',
      children: [
        {
          title: '2-1'
        },
        {
          title: '2-2',
          children: [
            {
              title: '2-2-1'
            }
          ]
        },
      ]
    },
    {
      title: '3',
    },
  ]
  return (
    <YouMenu menuData={testData}></YouMenu>
  )
}

export default TestRree