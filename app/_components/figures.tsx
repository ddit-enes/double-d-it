import { FC } from "react";
import { Figure } from "@/types/figure";
import { Star } from "lucide-react";

type Props = {
  data: Figure[];
};
const Figures: FC<Props> = ({ data }) => {
  return (
    <section className="pt-16 pb-10 md:pt-28 container mx-auto">
      <div className="mx-6">
        <h2 className="md:text-center md:mb-14">Trusted by hundreds worldwide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl mb-3 font-bold text-primary">{item.value}</h3>
              <p className="text-lg mt-2 font-semibold">{item.label}</p>
              <ul className="space-y-2 mt-4">
                {item.features.map((feature, idx) => (
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
      </div>
    </section>
  );
};

export default Figures;
