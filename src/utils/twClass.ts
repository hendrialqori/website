export const cls = (...args: string[]) => {
  return args.map((className) => typeof className === "string").join(" ");
};
