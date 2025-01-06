import { breadcrumbContactPage } from "@/data/breadcrumb";
import Breadcrumb from "@/components/breadcrumb";
import Divider from "@/components/divider";

const Contact = () => {
  return (
    <>
      <Breadcrumb item={breadcrumbContactPage} />
      <Divider />
    </>
  );
};

export default Contact;
