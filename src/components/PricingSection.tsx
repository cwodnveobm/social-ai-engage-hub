import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactModal from './ContactModal';
import { useToast } from '@/components/ui/use-toast';

const pricingPlans = [
  {
    name: "Basic",
    price: 2999, // ₹2,999
    period: "month",
    description: "Perfect for small businesses just getting started with social automation.",
    features: [
      "Automated DM replies",
      "Comment monitoring",
      "Basic analytics",
      "1 social account", // Updated from 5 to 1
      "24/7 email support"
    ],
    highlighted: false,
    buttonText: "Subscribe Now",
    planId: "basic_monthly"
  },
  {
    name: "Premium",
    price: 4999, // ₹4,999
    period: "month",
    description: "Advanced automation for growing businesses with higher volume needs.",
    features: [
      "Everything in Basic",
      "Advanced AI responses",
      "Content generation",
      "4 social accounts", // Updated from Unlimited to 4
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
    const options = {
      key: "rzp_live_5JYQnqKRnKhB5y",
      amount: plan.price ? plan.price * 100 : 0, // Razorpay takes amount in paise
      currency: "INR",
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
      modal: {
        confirm_close: true,
        escape: true,
        animation: true,
        backdropClose: true,
        handleback: true, // Handle back button press on mobile
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    
    paymentObject.on('payment.failed', function(response: any) {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "Please try again or contact support if the issue persists.",
      });
    });

    paymentObject.open();
  };

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden backdrop-blur-sm ${
        plan.highlighted 
          ? 'border-2 border-accent shadow-xl bg-gradient-to-br from-white/90 to-purple-50/90' 
          : 'border border-gray-200 shadow-lg bg-white/90'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {plan.highlighted && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 text-charcoal">{plan.name}</h3>
          
          <div className="mb-4">
            {plan.price ? (
              <div className="flex items-end">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ₹{(plan.price).toLocaleString('en-IN')}
                </span>
                <span className="text-gray-500 ml-1">/{plan.period}</span>
              </div>
            ) : (
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Custom Pricing
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{plan.description}</p>
          
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
              >
                <span className="mr-2 text-blue-500 mt-1">
                  <Check size={16} className="text-gradient" />
                </span>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {plan.name === "Custom" ? (
            <ContactModal 
              buttonText={plan.buttonText}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              variant="default"
            />
          ) : (
            <Button
              variant={plan.highlighted ? "default" : "outline"}
              className={`w-full ${
                plan.highlighted 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                  : "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
              }`}
              onClick={() => handlePayment(plan.planId)}
            >
              {plan.buttonText}
            </Button>
          )}
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl" />
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the perfect plan to elevate your social media presence with our AI-powered tools.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
