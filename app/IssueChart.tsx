'use client';

import { Card } from '@radix-ui/themes';
import { ResponsiveContainer ,  BarChart , XAxis , YAxis , Bar, Label} from "recharts"
import React from 'react'

interface Props {
    open: number;
    inprogress: number;
    closed: number;
}


const IssueChart = ({open , inprogress , closed}:Props) => {

    const chartdata = [
        {label:'Open',value:open},
        {label:'In Progress', value:inprogress},
        {Label:'Closed',value:closed},
        
    ]
  return (
    <Card>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartdata}>
                <XAxis dataKey="label" />
                <YAxis />
                <Bar dataKey="value"  barSize={70} fill='#3299a8'/>

            </BarChart>
        </ResponsiveContainer>

    </Card>
  )
}

export default IssueChart