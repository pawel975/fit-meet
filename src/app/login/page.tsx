import { prisma } from "@/db";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

async function loginUser(data: FormData) {
  "use server";

  const loginData = {
    login: data.get("login")?.valueOf(),
    password: data.get("password")?.valueOf(),
  };

  const res = await prisma.user.findMany({
    where: { login: loginData.login, password: loginData.password },
  });

  if (res.length === 0) {
    redirect("/error");
  } else {
    redirect("/");
  }
}

export default function Page() {
  return (
    <div className={styles.loginContainer}>
      <header>
        <h1>Login user</h1>
      </header>
      <form action={loginUser} className={styles.loginForm}>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" id="login" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
