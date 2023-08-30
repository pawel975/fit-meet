import NextAuth from "next-auth/next";

const handler = NextAuth({
  providers: [],
});
console.log(handler);

export { handler as GET, handler as POST };
