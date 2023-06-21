import { FC } from 'react'


import type  {Metadata} from 'next'
import LargeHeading from '@/ui/LargeHeading';
import Paragraph from '@/ui/Paragraph';
import DocumentationTabs from '@/components/DocumentationTabs'

export const metadata: Metadata = {
    title: 'Similitude API | Documentation',
    description: 'Free & Open Source word similitude API'
}

const page: FC = () => {
  return(
   <div className='container max-w-7xl mx-auto mt-12'>
    <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a Request</LargeHeading>
        <Paragraph>api/va/similitude</Paragraph>

        <DocumentationTabs/>
    </div>
   </div>) 
}

export default page