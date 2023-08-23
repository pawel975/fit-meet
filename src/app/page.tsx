import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { prisma } from "@/db";

async function getUsers() {
  return prisma.user.findMany();
}

export default async function Home() {
  const users = await getUsers();

  // TODO: Redirect use if session is not active
  redirect("/register");

  return (
    <section>
      <header>
        <h1>Home page content</h1>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li>{(user.firstName, user.lastName)}</li>
          ))}
        </ul>
      </header>
    </section>
  );
}
