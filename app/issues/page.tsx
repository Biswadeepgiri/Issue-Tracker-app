import React from 'react'
import { Status } from '@prisma/client';

import {Button, Table, TableBody, TableColumnHeaderCell, TableHeader, TableRow} from '@radix-ui/themes';
import Link from 'next/link';
import prisma from '@/prisma/client';
import { IssueStatusBadge } from '@/app/components';
import IssueActions from './list/IssueActions';
const Issuespage = async (
  {
    searchParams,
  }: {
    searchParams:{status:Status };
  }) => {
    // console.log(searchParams.status);

    const statuses = Object.values(Status);
    const status = statuses.includes(searchParams.status) 
      ? searchParams.status
      : undefined
  const issues = await prisma.issue.findMany({
    where: {
      status
    }
  });
  
  return (
    <div>
      {/* <div className='mb-5'>
    <Button>
      <Link href='/issues/new'>New Issue</Link>
    </Button>
    </div> */}
    <IssueActions />
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell >Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created Date</Table.ColumnHeaderCell>

        </Table.Row>

      </Table.Header>
      <Table.Body>
        {issues.map(issue => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`} className='hover:underline'>
              {issue.title}
              </Link>
            <div className='block md:hidden'>
              <IssueStatusBadge  status={issue.status} />
            </div>
             </Table.Cell>
            <Table.Cell className='hidden md:table-cell'><IssueStatusBadge  status={issue.status} /></Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default Issuespage