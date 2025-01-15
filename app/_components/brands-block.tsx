import Image from "next/image";
import { BlockBrand, Brand } from "@/types/block-brand";

type BrandProps = {
  brands: Brand[] | null;
};

type BlockBrandProps = {
  brand: BlockBrand;
};

const Brands = ({ brands }: BrandProps) => {
  return (
    <div className="grid grid-cols-6 gap-6 md:gap-10 items-center justify-center">
      {brands?.map((brand, index) => (
        <div key={index} className="flex items-center justify-center col-span-3 sm:col-span-1">
          {brand.link && brand.image && brand.name && (
            <a
              href={brand.link}
              target="_blank"
              rel="nofollow noreferrer"
              className="relative h-12 w-full"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1200px) 18vw, 18vw"
                className="object-cover"
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const BrandsBlock = ({ brand }: BlockBrandProps) => {
  const { title, brands } = brand;

  return (
    <section className="pt-16 pb-10 md:pt-28 container mx-auto">
      <div className="mx-6">
        <h2 className="md:text-center md:mb-14">{title}</h2>
        <Brands brands={brands} />
      </div>
    </section>
  );
};

export default BrandsBlock;
