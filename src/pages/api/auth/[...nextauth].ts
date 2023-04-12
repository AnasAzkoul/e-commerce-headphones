import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import {prisma} from '@/lib/db/index';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
