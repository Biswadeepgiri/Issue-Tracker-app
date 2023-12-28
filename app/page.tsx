import Image from 'next/image'
import LatestIssues from './LatestIssues';
import IssueSummary from './IssueSummary';
import prisma from '@/prisma/client';
import { Flex, Grid } from '@radix-ui/themes';
import IssueChart from './IssueChart';

export default async function Home() {

  const openissues = await prisma.issue.count({where:{status:'OPEN'}})
  const inprogressissues = await prisma.issue.count({where:{status:'IN_PROGRESS'}})
  const closedissues = await prisma.issue.count({where:{status:'CLOSED'}})
  return (
    
  // <LatestIssues />
  <>
  <Grid columns={{initial:"1", md:"2"}} gap="9">
    <Flex direction="column" gap="5">
      <IssueSummary open={openissues} inprogress={inprogressissues} closed={closedissues} />
      <IssueChart open={openissues} inprogress={inprogressissues} closed={closedissues} />

    </Flex>
    <LatestIssues />

  </Grid>
  </>
  );
}
