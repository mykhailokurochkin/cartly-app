import { redirect } from "next/navigation";

export default function Home() {
  redirect("/checkout?product_id=1");
}
