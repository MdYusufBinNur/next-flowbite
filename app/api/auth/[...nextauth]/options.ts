import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credential) {
        const res = await fetch(`${process.env.NEXTAPI_URL}/login`, {
          method: "POST",
          headers: { 
            "Content-type": "application/json",
            "X-Requested-With":"XMLHttpRequest"
           },
           mode:'cors',
          credentials:"include",
          body: JSON.stringify(credential),
        });

        const data = await res.json();
        if (!data.error && data.data.token) {
        cookies().set("jwt", data.data.token);
          return data.data.user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error:'/login'
    
  },
};
