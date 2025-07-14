import { DefaultLayout } from "@/components/DefaultLayout";
import PageHeader from "@/components/PageHeader";
import { Binoculars } from "phosphor-react";
import { ReactElement } from "react";

export default function Explore() {
  return (
    <div>
      <PageHeader>
        <Binoculars size={32} />
        <span>Explorar</span>
      </PageHeader>
    </div>
  );
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
