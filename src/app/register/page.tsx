import styles from "./page.module.css";

export default function Page() {
  return (
    <div className="">
      <header>Registration form</header>
      <form className={styles.registerForm}>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="lastName">Last Name</label>
        <select>
          <option>male</option>
          <option>female</option>
        </select>
      </form>
    </div>
    // id        String @id @default(cuid())
    // firstName String
    // lastName  String
    // gender    String
    // age       Int
    // photo     String
  );
}
