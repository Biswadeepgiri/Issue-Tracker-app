'use client';
import { Select } from '@radix-ui/themes'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AsigneeSelect = ({issueId}:{issueId:number}) => {
    const [error,setError] = useState(false);
    const router = useRouter();

    const assigneselect = async() => 
    {
        try{
            // throw new Error;
        await axios.delete('/api/issues/'+issueId+'/assign');
        router.push('/issues'+issueId);
        router.refresh();
        }
        catch(error){
            setError(true);
        }
    }
  return (
    <Select.Root>
        <Select.Trigger color='orange' variant="classic" radius="large" placeholder="Assign to.." />
        <Select.Content color='orange'>
            <Select.Group>
                <Select.Label >Suggestions</Select.Label>
                <Select.Item value="1">Developer 1</Select.Item>
                <Select.Item value="2">Developer 2</Select.Item>
                <Select.Item value="3">Developer 3</Select.Item>
                <Select.Item value="4">Developer 4</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default AsigneeSelect