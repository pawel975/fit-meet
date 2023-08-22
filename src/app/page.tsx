import styles from "./page.module.css";
import { prisma } from "@/db";

async function getUsers() {
  return prisma.user.findMany();
}

export default async function Home() {
  const users = await getUsers();

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
