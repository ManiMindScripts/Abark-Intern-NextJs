import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth.config";


export interface AuthUser {
  id: string;
  name?: string | null;
  email?: string | null;
}

export async function auth(req?: Request): Promise<AuthUser | null> {
     const session = await getServerSession(authOptions);
  if (!session || !session.user) return null;

  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  };
}