export default async function(name: string) {
  const variable = name || "word";
  return `hello ${variable}`;
}
