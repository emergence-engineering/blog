export const calcScrollAnimationOffset = (
  descHeight: number,
  illustrationHeight: number,
  from?: string,
) => {
  console.log(descHeight, illustrationHeight, window.innerHeight);
  if (descHeight + illustrationHeight <= window.innerHeight) {
    console.log("returned 0", from);
    return 0;
  }

  return (
    window.innerHeight - descHeight - (descHeight + illustrationHeight) * 0.3
  );
};
