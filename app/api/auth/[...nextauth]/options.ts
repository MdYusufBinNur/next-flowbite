import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credential) {
        const res = await fetch(`${process.env.NEXTAPI_URL}/api/v1/login`, {
          method: "POST",
          headers: { 
            "Content-type": "application/json",
            "X-Requested-With":"XMLHttpRequest"
           },
           mode:'cors',
          credentials:"include",
          body: JSON.stringify(credential),
        });
       // console.log(res.headers)
       // cookies().set('jwt', 'dafadsf');

        const data = await res.json();
       console.log(data);
        if(!data.success){
         return null;
        }

        if (data.success && data.token) {
        cookies().set("jwt", data.token, {
          httpOnly:true
        });
          return data.user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    error:'/sing-in' 
    
  },
};
