import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.registerContainer}>
      <header>
        <h1>Registration form</h1>
      </header>
      <form className={styles.registerForm}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option>male</option>
          <option>female</option>
        </select>
        <input />
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
