import { BlockFigure, type Figure } from "@/types/block-figure";
import { Star } from "lucide-react";

type FigureProps = {
  figures: Figure[] | null;
};

type FiguresProps = {
  figure: BlockFigure;
};

const Figure = ({ figures }: FigureProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20">
      {figures?.map((item, index) => (
        <div key={index}>
          <h3 className="text-4xl md:text-5xl mb-3 font-bold text-primary">{item.value}</h3>
          <p className="text-lg mt-2 font-semibold">{item.label}</p>
          <ul className="space-y-2 mt-4">
            {item.features?.map((feature, idx) => (
              <li key={idx} className="flex text-sm">
                <span className="mt-0.5 mr-2 text-primary">
                  <Star size={16} className="fill-primary" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const FiguresBlock = ({ figure }: FiguresProps) => {
  const { title, figures } = figure;

  return (
    <section className="pt-16 pb-10 md:pt-28 px-6 container mx-auto">
      <h2 className="md:text-center md:mb-14">{title}</h2>
      <Figure figures={figures} />
    </section>
  );
};

export default FiguresBlock;
