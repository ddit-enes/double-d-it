export const generateBreadcrumbLink = (pathNames: string[], path: string, index: number) => {
  const href = `/${pathNames.slice(0, index + 1).join("/")}`;
  const itemLink = path[0].toUpperCase() + path.slice(1);
  return { href, itemLink };
};
