import React from 'react'
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Table } from '@radix-ui/themes';
import Link from 'next/link';
import { IssueStatusBadge } from './components';

const LatestIssues = async () => {

    const latestIssues = await prisma.issue.findMany({
        orderBy: {createdAt:'desc'},
        take: 5
    });
  return (
    <Card>
        <Heading>Latest Issues</Heading>
    <Table.Root>
        <Table.Body>
            {latestIssues.map(issue => (
                <Table.Row key={issue.id}>
                    <Table.Cell>
                    <Flex direction="column" align="start" gap="2">
                        <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                        <IssueStatusBadge status={issue.status} />
                        </Flex>
                        
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table.Root>
    </Card>
  )
}

export default LatestIssues