import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <>
      <p>
        Status: <span>{status}</span>
      </p>
      {session!.user!.name ? (
        <h1>{session!.user!.name}</h1>
      ) : (
        <h1>Invalid session</h1>
      )}
    </>
  );
}
