"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormField, SelectField } from "./FormField";
import { subscriptionPlans } from "@/lib/data/subscriptions";
import { Check, CreditCard, User, Package, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";

type CheckoutStep = "account" | "plan" | "payment" | "confirmation";

interface FormData {
  email: string;
  name: string;
  planId: string;
  billingCycle: "monthly" | "yearly";
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  cardName?: string;
}

export function CheckoutWizard() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("account");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    planId: "plan-premium",
    billingCycle: "monthly",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentResult, setPaymentResult] = useState<"success" | "failure" | null>(null);

  const steps: { id: CheckoutStep; label: string; icon: React.ReactNode }[] = [
    { id: "account", label: "Account", icon: <User className="w-4 h-4" /> },
    { id: "plan", label: "Plan", icon: <Package className="w-4 h-4" /> },
    { id: "payment", label: "Payment", icon: <CreditCard className="w-4 h-4" /> },
    { id: "confirmation", label: "Confirm", icon: <Check className="w-4 h-4" /> },
  ];

  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateCardNumber = (number: string): boolean => {
    const cleaned = number.replace(/\s/g, "");
    return /^\d{16}$/.test(cleaned);
  };

  const validateExpiry = (expiry: string): boolean => {
    return /^\d{2}\/\d{2}$/.test(expiry);
  };

  const validateCvc = (cvc: string): boolean => {
    return /^\d{3,4}$/.test(cvc);
  };

  const handleAccountNext = () => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setCurrentStep("plan");
  };

  const handlePlanNext = () => {
    setCurrentStep("payment");
  };

  const handlePaymentNext = () => {
    const newErrors: FormErrors = {};

    if (!formData.cardName) {
      newErrors.cardName = "Cardholder name is required";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
    } else if (!validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.cardExpiry) {
      newErrors.cardExpiry = "Expiry date is required";
    } else if (!validateExpiry(formData.cardExpiry)) {
      newErrors.cardExpiry = "Please use MM/YY format";
    }

    if (!formData.cardCvc) {
      newErrors.cardCvc = "CVC is required";
    } else if (!validateCvc(formData.cardCvc)) {
      newErrors.cardCvc = "Please enter a valid CVC";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate payment processing
    setIsSubmitting(true);
    setTimeout(() => {
      // Simulate success/failure (90% success rate for demo)
      const success = Math.random() > 0.1;
      setPaymentResult(success ? "success" : "failure");
      setIsSubmitting(false);
      if (success) {
        setCurrentStep("confirmation");
      }
    }, 2000);
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const selectedPlan = subscriptionPlans.find((p) => p.id === formData.planId);
  const price = selectedPlan
    ? formData.billingCycle === "monthly"
      ? selectedPlan.price_monthly
      : selectedPlan.price_yearly
    : 0;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  index <= stepIndex
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {index < stepIndex ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.icon
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 md:w-24 h-0.5 mx-2 ${
                    index < stepIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step) => (
            <span
              key={step.id}
              className="text-xs text-muted-foreground w-20 text-center"
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card border rounded-xl p-6">
        {/* Account Step */}
        {currentStep === "account" && (
          <div>
            <h2 className="text-xl font-bold mb-6">Create Your Account</h2>
            <div className="space-y-4">
              <FormField
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(v) => updateFormData("name", v)}
                error={errors.name}
                required
                autoComplete="name"
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(v) => updateFormData("email", v)}
                error={errors.email}
                required
                autoComplete="email"
              />
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={handleAccountNext}>Continue to Plan</Button>
            </div>
          </div>
        )}

        {/* Plan Step */}
        {currentStep === "plan" && (
          <div>
            <h2 className="text-xl font-bold mb-6">Select Your Plan</h2>
            
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-lg border p-1">
                <button
                  onClick={() => updateFormData("billingCycle", "monthly")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    formData.billingCycle === "monthly"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => updateFormData("billingCycle", "yearly")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    formData.billingCycle === "yearly"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  Yearly (Save 17%)
                </button>
              </div>
            </div>

            {/* Plans */}
            <div className="space-y-3">
              {subscriptionPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => updateFormData("planId", plan.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                    formData.planId === plan.id
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-muted-foreground/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{plan.name}</span>
                      {plan.is_popular && (
                        <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="font-bold">
                      ${formData.billingCycle === "monthly" ? plan.price_monthly : plan.price_yearly}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{formData.billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {plan.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={handlePlanNext}>Continue to Payment</Button>
            </div>
          </div>
        )}

        {/* Payment Step */}
        {currentStep === "payment" && (
          <div>
            <h2 className="text-xl font-bold mb-6">Payment Details</h2>
            
            {paymentResult === "failure" && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-destructive">Payment Failed</p>
                  <p className="text-sm text-destructive/80">
                    Your payment could not be processed. Please check your card details and try again.
                  </p>
                </div>
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2">Order Summary</h3>
              <div className="flex justify-between text-sm">
                <span>{selectedPlan?.name} Plan ({formData.billingCycle})</span>
                <span className="font-medium">${price}</span>
              </div>
            </div>

            <div className="space-y-4">
              <FormField
                label="Cardholder Name"
                name="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={(v) => updateFormData("cardName", v)}
                error={errors.cardName}
                required
                autoComplete="cc-name"
              />
              <FormField
                label="Card Number"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(v) => updateFormData("cardNumber", v)}
                error={errors.cardNumber}
                required
                autoComplete="cc-number"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Expiry Date"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={(v) => updateFormData("cardExpiry", v)}
                  error={errors.cardExpiry}
                  required
                  autoComplete="cc-exp"
                />
                <FormField
                  label="CVC"
                  name="cardCvc"
                  placeholder="123"
                  value={formData.cardCvc}
                  onChange={(v) => updateFormData("cardCvc", v)}
                  error={errors.cardCvc}
                  required
                  autoComplete="cc-csc"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={handlePaymentNext} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Processing...
                  </>
                ) : (
                  `Pay $${price}`
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {currentStep === "confirmation" && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to NewsDaily!</h2>
            <p className="text-muted-foreground mb-6">
              Your subscription is now active. A confirmation email has been sent to{" "}
              <strong>{formData.email}</strong>.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-medium mb-3">Subscription Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Plan</dt>
                  <dd className="font-medium">{selectedPlan?.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Billing</dt>
                  <dd className="font-medium capitalize">{formData.billingCycle}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Amount</dt>
                  <dd className="font-medium">${price}/{formData.billingCycle === "monthly" ? "mo" : "yr"}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button>Start Reading</Button>
              </Link>
              <Link href="/account">
                <Button variant="outline">View Account</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
