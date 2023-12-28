import React from 'react'
import { Button , Link , Flex} from '@radix-ui/themes'
import IssueStatusFilter from './IssueStatusFilter'
import './issueactions.css';

const IssueActions = () => {
  return (
    <Flex mb="5" justify="between">
        <IssueStatusFilter />
    <Button className='text-white new-issue-btn'>
      <Link href='/issues/new' className="new-issue-link" >New Issue</Link>
    </Button>
    </Flex>
  )
}

export default IssueActions