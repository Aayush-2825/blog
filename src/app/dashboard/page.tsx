import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/BlogPostCard";


type BlogPost = {
  id: string;
        title: string;
        content: string;
        imageURL: string;
        authorID: string;
        authorName: string;
        authorImage: string;
        createdAt: Date;
        updatedAt: Date;

};

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorID: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = user?.id ? await getData(user.id) : [];

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">Your Blog Articles</h2>

      <Link
        className={buttonVariants({ className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" })}
        href="/dashboard/create"
      >
        Create Post
      </Link>
      </div>

      {data.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item:BlogPost) => (
        <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
      ) : (
      <p className="text-gray-600 text-center mt-8">You have no blog posts yet. Start creating one!</p>
      )}

      
    </div>
  );
}