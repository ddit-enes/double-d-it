import { FC } from "react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { getJobDetailsPath } from "@/utils/path";
import { Career } from "@/types/career";

type SingleCardProps = {
  career: Career;
};

type CardProps = {
  careers?: Career[];
};

const SingleCard: FC<SingleCardProps> = ({ career }) => {
  const { title, slug, description, postedOn } = career;

  if (!career) {
    return null;
  }

  return (
    <Card className="border-l-4 border-l-primary">
      <Link href={getJobDetailsPath(slug)}>
        <div className="flex items-center">
          <div className="flex-grow">
            <CardHeader className="space-y-3">
              <CardTitle className="hover:underline">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <p className="text-xs">Posted on: {postedOn}</p>
            </CardFooter>
          </div>
          <div className="pr-6">
            <ChevronRight />
          </div>
        </div>
      </Link>
    </Card>
  );
};

const CareerCard: FC<CardProps> = ({ careers }) => {
  return (
    <div className="container mx-auto my-6">
      <div className="space-y-6 mx-6">
        {careers?.map((career, index) => <SingleCard key={index} career={career} />)}
      </div>
    </div>
  );
};

export default CareerCard;
