import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth";

export default NextAuth(authOptions);
