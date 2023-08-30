import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const credentialDetails = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const resp = await fetch(backendURL + "/auth/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentialDetails),
        });

        const user = await resp.json();

        if (user.is_success) {
          console.log("nextauth daki user: " + user.is_success);

          return user;
        } else {
          console.log("Check your credentials");
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
