import React, { useEffect, useState } from 'react';

import './Table.css'


const Table = () => {

    const assetClassColors = {
        Macro: 'white',
        Equities: '#3a68e1',
        Credit: 'lightgreen',
    };
    const tableHeaders = [{
        'name': 'Ticker',
        'key': 'ticker'
    },

    {
        'name': 'Price',
        'key': 'price'
    },

    {
        'name': 'Asset Class',
        'key': 'assetClass'
    },
    ]
    const [sortedData, setSortedData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./tableData.json?timestamp=' + new Date().getTime());
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setSortedData(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);


    const [sortOrder, setSortOrder] = useState('asc');

    const sortData = (column) => {
        const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedData].sort((a, b) => {
            if (column === 'assetClass') {
                const assetClassOrder = { Equities: 1, Macro: 2, Credit: 3 };
                return assetClassOrder[a[column]] - assetClassOrder[b[column]];
            }
            if (column === 'price') {
                return sortOrder[column] === 'asc' ? b[column] - a[column] : a[column] - b[column];
            }
            return sortOrder[column] === 'asc' ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]);
        });
        setSortedData(sorted);
        setSortOrder({ ...sortOrder, [column]: order });
    };

    return (
        <>


            <table data-testid="table-component">
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>
                                <span onClick={() => sortData(header.key)}>
                                    {header.name}
                                    {sortOrder[header.key] === 'asc' ? ' ↑' : ' ↓'}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {sortedData.map((item, rowIndex) => (
                        <tr key={rowIndex}>
                            {tableHeaders.map((header, colIndex) => (
                                <td
                                    style={{
                                        backgroundColor: header.key === 'assetClass' ? assetClassColors[item[header.key]] : 'transparent',
                                        color: header.key === 'price' ? (item[header.key] >= 0 ? 'black' : 'red') : 'inherit',
                                    }}

                                    key={colIndex}>{item[header.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;

