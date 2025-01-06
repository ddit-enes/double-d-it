import { breadcrumbCareerPage } from "@/data/breadcrumb";
import Breadcrumb from "@/components/breadcrumb";
import Divider from "@/components/divider";

const Career = () => {
  return (
    <>
      <Breadcrumb item={breadcrumbCareerPage} />
      <Divider />
    </>
  );
};

export default Career;
