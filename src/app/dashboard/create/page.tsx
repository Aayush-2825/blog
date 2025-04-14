import { handleSubmission } from '@/app/actions'
import { Submitbutton } from '@/components/SubmitButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const CreateRoute = () => {
  return (
    <div className='ml-6 mr-6 mb-4 mt-6'>
        <Card className='max-w-lg mx-auto'>
            <CardHeader >
            <CardTitle >Create a new article</CardTitle>
            <CardDescription>Create a new Post to share with world</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-4' action={handleSubmission}>
                    <div className='flex flex-col gap-2'>
                        <Label>Title</Label>
                        <Input name='title' required type='text' placeholder='Title' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Component</Label>
                        <Textarea name='content' required placeholder='Content'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>ImageURL</Label>
                        <Input name='imageURL' required type='url' placeholder='Image URL' />
                    </div>
                   <Submitbutton />
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default CreateRoute