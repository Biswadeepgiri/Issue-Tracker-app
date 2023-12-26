'use client';

import { TextField } from '@radix-ui/themes'
import { Text } from '@radix-ui/themes';
import { TextArea } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import {useForm} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import React, { useState } from 'react'
import axios from 'axios';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Issue } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Callout } from '@radix-ui/themes';
import { MdErrorOutline } from "react-icons/md";
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import Spinner from '@/app/components/Spinner';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

// interface IssueForm {
//   title: String,
//   description: String
// }

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {

  const router = useRouter();

  const {register,control,handleSubmit, formState : { errors }} = useForm<IssueForm>(
    {
      resolver: zodResolver(createIssueSchema)
    }
  );
  const [err,setErr] = useState('');
  const [isSubmitted,setSubmitted] = useState(false);
  
  return (
    <div className='max-w-xl'>
      {err && (
      <Callout.Root color="red" className='mb-5'>
        <Callout.Icon>
    <MdErrorOutline />
  </Callout.Icon>
        <Callout.Text>{err}</Callout.Text>

      </Callout.Root>
      )
}

    

    <form className=' space-y-3'
      onSubmit={handleSubmit(async (data) => {
        try{
          setSubmitted(true);
        await axios.post('/api/issues',data);
        router.push('/issues')
        }
        catch(error){
          setSubmitted(false);
          setErr('An unexpected error occured');

        }
      })}>
        <TextField.Root>
            <TextField.Input placeholder='Tilte' {...register('title')} />
        </TextField.Root>
        {errors.title && 
        <ErrorMessage>
          {errors.title.message}
          </ErrorMessage>
          }
        <Controller
         name="description"
         control={control}
         render={({ field }) => <SimpleMDE placeholder='Description' {...field}  />}
         />
         {errors.description && 
         <ErrorMessage>
          {errors.description.message}
          </ErrorMessage>
          }
        
        <Button disabled={isSubmitted}>Submit New Issue
          {
          isSubmitted && <Spinner />
          }
</Button>
        
    </form>
    </div>
  )
}

export default NewIssuePage;