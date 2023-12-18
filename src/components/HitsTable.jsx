import { useEffect, useState } from "react"


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
        

const HitsTable = (hits) => {
    return (
        <div className="Table">
            <DataTable paginator rows={5} value={hits.hits} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x" header="X"></Column>
                <Column field="y" header="Y"></Column>
                <Column field="r" header="R"></Column>
                <Column field="inside" header="Inside"></Column>
                <Column field="created" sortable header="Created"></Column>
            </DataTable>
        </div>
        
    )
}

export default HitsTable;