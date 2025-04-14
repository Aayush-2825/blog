"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formdata: FormData) {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) return redirect("/api/auth/register")
   

    const title = formdata.get("title") as string;
    const content = formdata.get("content") as string; 
    const imageURL = formdata.get("imageURL") as string; 

    const data = await prisma.blogPost.create({
        data: { 
            title: title as string,
            content: content as string,
            imageURL: imageURL as string,
            authorID: user.id ,
            authorImage: user.picture as string,
            authorName: user.given_name as string,
        },
    });
    return redirect("/dashboard");
}