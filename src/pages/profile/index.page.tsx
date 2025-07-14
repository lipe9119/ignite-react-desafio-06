import { DefaultLayout } from "@/components/DefaultLayout";
import PageHeader from "@/components/PageHeader";
import { User } from "phosphor-react";
import { ReactElement } from "react";

export default function Profile() {
  return (
    <div>
      <PageHeader>
        <User size={32} />
        <span>Explorar</span>
      </PageHeader>
    </div>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
