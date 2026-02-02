import { CheckoutWizard } from "@/components/news/CheckoutWizard";

export const metadata = {
  title: "Checkout - NewsDaily",
  description: "Complete your subscription to NewsDaily",
};

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Complete Your Subscription
      </h1>
      <CheckoutWizard />
    </div>
  );
}
