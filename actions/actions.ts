"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";
// import { collection } from "firebase/firestore";

export async function createNewPost(
  text: string | undefined,
  catogery: string | null
) {
  auth().protect();
  const { sessionClaims } = await auth();

  const postCollectionRef = adminDb.collection("postCollection");
  // const commentCollectionRef = adminDb.collection("comments");

  const postRef = await postCollectionRef.add({
    userid: sessionClaims?.userid!,
    profilePic: sessionClaims?.userImg!,
    createdAt: new Date(),
    text: text,
    name: sessionClaims?.userFname!,
    catogery: catogery,
  });
  return { postId: postRef.id };
}
