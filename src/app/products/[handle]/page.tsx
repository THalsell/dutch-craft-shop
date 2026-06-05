import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ProductDetail } from "@/features/products/components/product-detail";
import { getProductByHandle } from "@/features/products/queries";
import { MOCK_PRODUCTS } from "@/data/mock-products";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.name} — ${product.collectionName} | Dutch Craft` };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) notFound();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-10 pb-20">
          <ProductDetail product={product} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
