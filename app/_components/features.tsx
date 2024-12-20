import { FeatureTitleSectionType, FeatureType } from "@/types/feature";
import SectionTitle from "@/app/_components/section-title";
import Divider from "@/components/divider";

const SingleFeature = ({ feature }: { feature: FeatureType }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary text-primary-foreground">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">{title}</h3>
        <p className="pr-[10px] font-medium leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

const Features = ({
  titleSection,
  features,
}: {
  titleSection: FeatureTitleSectionType;
  features: FeatureType[];
}) => {
  const { title, paragraph } = titleSection;

  return (
    <>
      <Divider />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title={title} paragraph={paragraph} center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <SingleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Features;
