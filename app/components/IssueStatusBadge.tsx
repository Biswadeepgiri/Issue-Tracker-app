import { Status } from '@prisma/client'
import React from 'react'
import { Badge } from '@radix-ui/themes'


// const statusMap: Record<Status,{ label: string, color: string}>{
//     OPEN:{label:'Open',color:'red'},
//     IN_PROGRESS:{label:'In Progress',color:'violet'},

// }

const IssueStatusBadge = ({status}:{status:Status}) => {
    if(status==='OPEN'){
        return (
            <Badge color='red'>Open</Badge>
        )
    }
    if(status==='IN_PROGRESS'){
        return(
            <Badge color='violet'>In Progress</Badge>
        )
    }
    if(status==='CLOSED'){
        return (
            <Badge color='green'>Closed</Badge>
        )
    }
}

export default IssueStatusBadge