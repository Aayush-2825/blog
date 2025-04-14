
import Link from 'next/link'
import React from 'react'
import { prisma } from '../utils/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import BlogPostCard from '@/components/BlogPostCard'
import { redirect } from 'next/navigation'


async function getData(userID: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorID: userID,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  return data
}

const DashboardRoute = async () => {

  const {getUser} = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }
  const data = await getData(user.id)

  return (
    <div>
      <div className='flex flex-row items-center justify-between ml-6 mr-6 mb-4 mt-6'>
        <h1 className='text-3xl font-bold'>Your Articles</h1>
        
        <Link href='/dashboard/create' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Create New Article
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {data.map((item) => (
          <BlogPostCard key={item.id} data={item} />
        ))}
        </div>
    </div>
  )
}

export default DashboardRoute