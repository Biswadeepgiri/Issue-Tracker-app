import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
import { Heading , Flex , Text, Card} from '@radix-ui/themes';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

interface Props {
    params : {id:string}
}


const IssueDetailPage = async ({params}:Props) => {

    // if(typeof params.id !=='number' ) notFound();

    const issue = await prisma.issue.findUnique({
        where:{id: parseInt(params.id)}
    });

    if(!issue){
        notFound();
    }

  return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex className='space-x-3 mb-2' my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
            {issue.description}
        </Card>
    </div>
  )
}

export default IssueDetailPage