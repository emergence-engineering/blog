export const calcScrollAnimationOffset = (
  descHeight: number,
  illustrationHeight: number,
) => {
  if (descHeight + illustrationHeight <= window.innerHeight) {
    return 0;
  }

  return (
    window.innerHeight - descHeight - (descHeight + illustrationHeight) * 0.3
  );
};
