import { breadcrumbPrivacyPolicyPage } from "@/data/breadcrumb";
import Breadcrumb from "@/components/breadcrumb";
import Divider from "@/components/divider";

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb item={breadcrumbPrivacyPolicyPage} />
      <Divider />
    </>
  );
};

export default PrivacyPolicy;
