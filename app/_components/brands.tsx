import { BrandType } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "@/app/_components/section-title";

const SingleBrand = ({ brand }: { brand: BrandType }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a href={href} target="_blank" rel="nofollow noreferrer" className="relative h-10 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </a>
    </div>
  );
};

const Brands = ({ brands }: { brands: BrandType[] }) => {
  const title = "Our Partners";
  const paragraph = "";

  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <SectionTitle title={title} paragraph={paragraph} center mb="30px" />
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brands.map((brand, index) => (
                <SingleBrand key={index} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
