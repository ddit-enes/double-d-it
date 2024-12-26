import Image from "next/image";
import { cn } from "@/lib/cn";
import { type Brand } from "@/types/brand";

const Brand = ({ className, brand }: { className?: string; brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <a href={href} target="_blank" rel="nofollow noreferrer" className="relative h-12 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </a>
    </div>
  );
};

const Brands = ({ title, brands }: { title: string; brands: Brand[] }) => {
  return (
    <section className="pt-16 pb-10 md:pt-28 container mx-auto">
      <div className="mx-6">
        <h2 className="md:text-center md:mb-14">{title}</h2>
        <div className="grid grid-cols-6 gap-6 md:gap-10 items-center justify-center">
          {brands.map((brand, index) => (
            <Brand key={index} className="col-span-3 sm:col-span-1" brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
