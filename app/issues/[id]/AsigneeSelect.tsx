'use client';
import { Select } from '@radix-ui/themes'
import React from 'react'

const AsigneeSelect = () => {
  return (
    <Select.Root>
        <Select.Trigger aria-placeholder='Assign..' />
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
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