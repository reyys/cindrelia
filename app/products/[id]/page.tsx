import { PRODUCTS_DATA } from "@/app/components/constants/products";
import ViewDetail from "@/app/components/views/detail";
import { redirect } from "next/navigation";

async function Page({ props }: { props: { params: Promise<{ id: string }> } }) {
  const { id } = await props.params;
  const product = PRODUCTS_DATA.find((p) => p.id === parseInt(id));

  if (!product) return redirect("/");

  return <ViewDetail product={product} />;
}

export default Page;
