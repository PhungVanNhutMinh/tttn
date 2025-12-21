import { Table } from 'antd';
import React from 'react';
import Loading from '../LoadingComponent/Loading';

const TableComponent = (props) => {
    const { selectionType = 'checkbox', data = [], isLoading = false, columns = [] } = props

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('Selected rows:', selectedRowKeys, selectedRows);
        },
    };

    return (
        <Loading isLoading={isLoading}>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                {...props}
            />
        </Loading>
    );
};

export default TableComponent;
