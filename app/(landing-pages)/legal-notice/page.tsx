import { breadcrumbLegalNoticePage } from "@/data/breadcrumb";
import Breadcrumb from "@/components/breadcrumb";
import Divider from "@/components/divider";

const LegalNotice = () => {
  return (
    <>
      <Breadcrumb item={breadcrumbLegalNoticePage} />
      <Divider />
    </>
  );
};

export default LegalNotice;
