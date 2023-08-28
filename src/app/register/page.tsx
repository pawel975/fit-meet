import { prisma } from "@/db";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

async function registerUser(data: FormData) {
  "use server";

  const newUserData = {
    firstName: data.get("firstName")?.valueOf(),
    lastName: data.get("lastName")?.valueOf(),
    gender: data.get("gender")?.valueOf(),
    // TODO: Switch this hardcoded validation to validation of the form
    age: 0,
    photo: "",
    // TODO: Switch this hardcoded validation to validation of the form
    login: data.get("login") ? data.get("login")!.valueOf() : "testLogin",
    // TODO: Switch this hardcoded validation to validation of the form
    password: data.get("password")
      ? data.get("password")!.valueOf()
      : "testPassword",
  };

  await prisma.user.create({
    data: {
      firstName: newUserData.firstName as string,
      lastName: newUserData.lastName as string,
      gender: newUserData.gender as string,
      age: newUserData.age as number,
      photo: newUserData.photo as string,
      password: newUserData.password as string,
      login: newUserData.login as string,
    },
  });

  redirect("/login");
}

export default function Page() {
  return (
    <div className={styles.registerContainer}>
      <header>
        <h1>Registration form</h1>
      </header>
      <form action={registerUser} className={styles.registerForm}>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" id="login" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="i-dont-want-to-answer">I don't want to answer</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="submit" value="Register account" />
      </form>
    </div>
  );
}
