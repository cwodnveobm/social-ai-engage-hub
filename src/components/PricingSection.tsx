
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactModal from './ContactModal';
import { useToast } from '@/components/ui/use-toast';

const pricingPlans = [
  {
    name: "Basic",
    price: 199,
    period: "month",
    description: "Perfect for small businesses just getting started with social automation.",
    features: [
      "Automated DM replies",
      "Comment monitoring",
      "Basic analytics",
      "5 social accounts",
      "24/7 email support"
    ],
    highlighted: false,
    buttonText: "Subscribe Now",
    planId: "basic_monthly"
  },
  {
    name: "Premium",
    price: 999,
    period: "month",
    description: "Advanced automation for growing businesses with higher volume needs.",
    features: [
      "Everything in Basic",
      "Advanced AI responses",
      "Content generation",
      "Unlimited social accounts",
      "Priority support",
      "Custom integrations"
    ],
    highlighted: true,
    buttonText: "Subscribe Now",
    planId: "premium_monthly"
  },
  {
    name: "Custom",
    price: null,
    period: null,
    description: "Enterprise-grade solution tailored to your specific business needs.",
    features: [
      "Custom AI training",
      "Dedicated account manager",
      "White-label solution",
      "API access",
      "Custom analytics dashboard",
      "SLA guarantee"
    ],
    highlighted: false,
    buttonText: "Contact Us",
    planId: "enterprise"
  }
];

const PricingPlan = ({ plan, index }: { plan: typeof pricingPlans[0], index: number }) => {
  const { toast } = useToast();
  
  const handlePayment = (planId: string) => {
    // Implement Razorpay payment
    const options = {
      key: "rzp_live_5JYQnqKRnKhB5y", 
      amount: plan.price ? plan.price * 100 : 0, // Razorpay takes amount in smallest currency unit
      currency: "USD",
      name: "Social AI Agent",
      description: `${plan.name} Plan Subscription`,
      handler: function() {
        toast({
          title: "Payment Successful!",
          description: "Your subscription has been activated.",
        });
      },
      prefill: {
        name: "",
        email: "",
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden ${
        plan.highlighted 
          ? 'border-2 border-accent shadow-xl bg-white' 
          : 'border border-gray-200 shadow-md bg-white'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {plan.highlighted && (
        <div className="bg-accent text-white py-2 px-4 text-center font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-2 text-charcoal">{plan.name}</h3>
        
        <div className="mb-4">
          {plan.price ? (
            <div className="flex items-end">
              <span className="text-3xl md:text-4xl font-bold text-charcoal">${plan.price}</span>
              <span className="text-gray-500 ml-1">/{plan.period}</span>
            </div>
          ) : (
            <div className="text-3xl md:text-4xl font-bold text-charcoal">Custom Pricing</div>
          )}
        </div>
        
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-green-500 mt-1">
                <Check size={16} />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {plan.name === "Custom" ? (
          <ContactModal 
            buttonText={plan.buttonText}
            className="w-full"
            variant={plan.highlighted ? "default" : "outline"}
          />
        ) : (
          <Button
            variant={plan.highlighted ? "default" : "outline"}
            className="w-full"
            onClick={() => handlePayment(plan.planId)}
          >
            {plan.buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <>
      <section id="pricing" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan to elevate your social media presence with our AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Add Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </>
  );
};

export default PricingSection;
