'use client';

import { TextField } from '@radix-ui/themes'
import { TextArea } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import {useForm} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import React from 'react'
import axios from 'axios';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Issue } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: String,
  description: String
}

const NewIssuePage = () => {

  const router = useRouter();

  const {register,control,handleSubmit} = useForm<IssueForm>();
  
  return (
    <form className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues',data);
        router.push('/issues')
      })}>
        <TextField.Root>
            <TextField.Input placeholder='Tilte' {...register('title')} />
        </TextField.Root>
        <Controller
         name="description"
         control={control}
         render={({ field }) => <SimpleMDE placeholder='Description' {...field}  />}
         />
        
        <Button>Submit New Issue</Button>
        
    </form>
  )
}

export default NewIssuePage;