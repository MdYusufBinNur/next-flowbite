import "next-auth";
import type { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
    token?: string;
  }

  interface User {
    id: number,
    uid: string | null,
    email: string,
    photo: string | null,
    phone: string | null,
    website: string | null,
    about: string | null,
    pricing: string | null,
    instagram_username: string | null,
    role: string | null,
    status: string | null,
    active: boolean,
    designation: {
      id: number,
      name: string
    },
    reviews: any
    email_verified_at: string;
  }

}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
    token: string;
    accessTokenExpires: number;
  }
}
