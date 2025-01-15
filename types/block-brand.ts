export type BlockBrand = {
  brands: Brand[] | null;
  title?: string | null;
};

export type Brand = {
  // image?: string | DirectusFiles | null;
  image?: string | null;
  link?: string | null;
  name?: string | null;
};
