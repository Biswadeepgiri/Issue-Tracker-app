import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
import { Heading , Flex , Text, Card, Grid , Box , Button , Link} from '@radix-ui/themes';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import ReactMarkdown from 'react-markdown';
import {Pencil2Icon} from '@radix-ui/react-icons';
import DeleteIssueButton from './DeleteIssueButton';

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
    <Grid  columns={{initial:"1" , sm:"5"}} gap="5">
        <Box className='md:col-span-4'>
        <Heading>{issue.title}</Heading>
        <Flex className='space-x-3 mb-2' my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className='prose max-w-full' mt="4">
            <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
        </Box>
        <Box>
            <Flex direction="column" gap="4">
            <Button>
                <Pencil2Icon/>
                <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
            </Button>
            <DeleteIssueButton issueId={issue.id}/>
            </Flex>

        </Box>
    </Grid>
  )
}

export default IssueDetailPage