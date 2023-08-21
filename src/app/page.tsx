import Image from "next/image";
import styles from "./page.module.css";
import { PrismaClient } from "@prisma/client";

// It's based on pages router, I'm using App router, go to nextJS docs to App router fetching
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      initialUsers: users,
    },
  };
}

export default function Home({ initialUsers }: any) {
  console.log(initialUsers);
  return (
    <section>
      <header>
        <h1>Home page content</h1>
        <h2>Users</h2>
        {initialUsers}
      </header>
    </section>
  );
}
