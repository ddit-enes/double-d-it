export type BlockFigure = {
  figures: Figure[] | null;
  title?: string | null;
};

export type Figure = {
  features?: string[] | null;
  label?: string | null;
  value?: number | null;
};
