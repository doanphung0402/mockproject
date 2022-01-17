import { Statistic, Table } from 'antd';
import React from 'react'

function HistoryTable() {
  const dataSource = [
    {
      key: '1',
      date: '10-10-2021',
      cod:'1000000',
      shippingfee: '100000',
      return:'100000',
      total: '100000'
    },
  ];
  
  const columns = [
    {
      title: 'Ngày thanh toán',
      dataIndex: 'date',
      key: 'num',

    },
    {
      title: 'Tổng COD',
      dataIndex: 'cod',
      key: 'cod',
      render: (text, record) => <Statistic value={text}></Statistic>,
    },
    {
      title: 'Tổng Phí vận chuyển',
      dataIndex: 'shippingfee',
      key: 'shippingfee',
      render: (text, record) => <Statistic value={text}></Statistic>,
    },
    {
      title: 'Tổng Phí hoàn trả ',
      dataIndex: 'return',
      key: 'return',
      render: (text, record) => <Statistic value={text}></Statistic>,
    },
    {
      title: 'Tổng thanh toán',
      dataIndex: 'total',
      key: 'total',
      render: (text, record) => <Statistic value={text}></Statistic>,
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default HistoryTable
