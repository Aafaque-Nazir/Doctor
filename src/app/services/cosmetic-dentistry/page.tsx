import ServiceDetailPage, { generateMetadata as getServiceMetadata } from "../[slug]/page";

export async function generateMetadata() {
  return getServiceMetadata({
    params: Promise.resolve({ slug: "cosmetic-dentistry" }),
  });
}

export default function CosmeticDentistryPage() {
  return (
    <ServiceDetailPage
      params={Promise.resolve({ slug: "cosmetic-dentistry" })}
    />
  );
}
