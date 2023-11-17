import type {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {jwt} from "@/lib/utils";
import {JWT} from "next-auth/jwt";

export const options: NextAuthOptions = {
    pages: {
        signIn: "/login",
        error: '/login'

    },
    session: {
        strategy: "jwt",
        maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        mode: 'cors',
                        credentials: "include",
                        body: JSON.stringify(credentials),
                    });
                    const resData = await res.json();

                    const data: { user: User; token: string } = resData.data;

                    if (!data.token) {
                        // console.log('Error : option.ts')
                        throw res;
                    }
                    // return
                    return {...data.user, token: data.token};
                } catch (error) {
                    return;
                }
            },
        }),
    ],

    callbacks: {
        async jwt({token, user, trigger, session}) {
            if (trigger === "update") {
                if (session.type === "MANUAL") {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,{
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        mode: 'cors',
                        credentials: "include",
                        token: 'Bearer ' + token.token,
                    });
                    const user = await response.json();

                    // console.log('Callback : option.ts', user)
                    return {...token, ...user};
                }
                return {...token, ...session};
            }
            if (user) {
                return {...token, ...user};
            }

            // const {exp: accessTokenExpires} = jwt.decode(token.token);
            //
            // if (!accessTokenExpires) {
            //     return token;
            // }

            // const currentUnixTimestamp = Math.floor(Date.now() / 1000);
            // const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;
            //
            // if (accessTokenHasExpired) {
            //     return await refreshAccessToken(token);
            // }

            return token;
        },
        async session({session, token}) {
            if (!token.token) {
                throw new Error("Refresh token has expired");
            }
            // console.log('Session Token : option.ts',token)
            session.token = token.token;
            session.user.name = token.name || "";
            session.user.email = token.email || "";
            session.user.email_verified_at = '2023-12-12';
            // session.user.email_verified_at = token.email_verified_at;

            return session;
        },
    },
    events: {
        async signOut({token}) {
            await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/logout`,{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                mode: 'cors',
                credentials: "include",
                token: 'Bearer ' + token.token,
            });
        },
    },
};

// async function refreshAccessToken(token: JWT) {
//     try {
//         const response = await fetchClient({
//             method: "POST",
//             url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/refresh",
//             token: token.token,
//         });
//         if (!response.ok) throw response;
//         const refreshedAccessToken: { access_token: string } = await response.json();
//         const {exp} = jwt.decode(refreshedAccessToken.access_token);
//
//         return {
//             ...token,
//             accessToken: refreshedAccessToken.access_token,
//             exp,
//         };
//     } catch (error) {
//         return {
//             ...token,
//             error: "RefreshAccessTokenError",
//         };
//     }
// }
