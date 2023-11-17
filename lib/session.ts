import {options} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export async function getCurrentUser() {
  const session = await getServerSession(options);
  console.log('session : ', session)
  return session?.user;
}
