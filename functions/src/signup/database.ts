import * as admin from "firebase-admin";

export default async function createUser(email: string, password: string) {
  const user = await admin.auth().createUser({ email, password });

  return { user };
}
