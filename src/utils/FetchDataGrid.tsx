import { extract } from '@/utils/extractData'
import { columns } from '@/static'
import { DataGrid } from '@mui/x-data-grid'
import { DashboardDataProp, DataReturnsTypes } from '@/types'
import React, { FC, useEffect, useState } from 'react'

const FetchDataAndRenderGrid: FC<DashboardDataProp> = ({ originalData }) => {

    const [data, setData] = useState<DataReturnsTypes[] | []>([])

    useEffect(() => {
        extract(originalData).then((extractedData: DataReturnsTypes[]) => {
            setData(extractedData);
        }).catch((error) => {
            console.error('Error extracting data:', error);
        });
    }, [originalData]);

    return (
        <React.Fragment>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </React.Fragment>
    )
}

export default FetchDataAndRenderGrid

