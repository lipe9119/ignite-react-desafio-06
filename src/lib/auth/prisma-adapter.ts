import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { Adapter } from "next-auth/adapters";
import { destroyCookie } from "nookies";
import { prisma } from "../prisma";

export function PrismaAdpter(
  req: NextApiRequest | NextPageContext["req"],
  res: NextApiResponse | NextPageContext["res"]
): Adapter {
  return {
    async createUser(user: { name: string; avatar_url: string }) {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
        },
      });

      destroyCookie({ res }, "@bookwise:userId", {
        path: "/",
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: null,
        emailVerified: null,
        avatar_url: prismaUser.avatar_url!,
      };
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return null;
      }

      return {
        id,
        name: user.name,
        email: "",
        emailVerified: null,
        avatar_url: user.avatar_url!,
      };
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account) {
        return null;
      }
      const { user } = account;

      return {
        id: user.id,
        name: user.name,
        email: "",
        emailVerified: null,
        avatar_url: user.avatar_url!,
      };
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
        },
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: "",
        emailVerified: null,
        avatar_url: prismaUser.avatar_url!,
      };
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      });

      return {
        expires,
        sessionToken,
        userId,
      };
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      });

      if (!prismaSession) {
        return null;
      }

      return {
        session: {
          expires: prismaSession.expires,
          sessionToken: prismaSession.session_token,
          userId: prismaSession.user_id,
        },
        user: {
          id: prismaSession.user.id,
          name: prismaSession.user.name,
          email: "",
          emailVerified: null,
          avatar_url: prismaSession.user.avatar_url!,
        },
      };
    },

    async updateSession({ sessionToken, expires, userId }) {
      const prismSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      });

      return {
        expires: prismSession.expires,
        sessionToken: prismSession.session_token,
        userId: prismSession.user_id,
      };
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      });
    },

    async linkAccount(account: {
      userId: string;
      type: string;
      provider: string;
      providerAccountId: string;
      refresh_token?: string;
      access_token?: string;
      expires_at?: number;
      token_type?: string;
      scope?: string;
      id_token?: string;
      session_state?: string;
    }) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      });
    },
  };
}
