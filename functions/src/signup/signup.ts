import createUser from "./database";

export default async function signUp(
  email: string,
  password: string,
) {
  const { user } = await createUser(email, password);
  return user.uid;
}
