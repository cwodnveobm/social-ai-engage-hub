
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  MessageSquare, 
  Calendar,
  Image
} from 'lucide-react';

const features = [
  {
    icon: <MessageCircle size={24} />,
    title: "Automated DM Replies",
    description: "Let AI handle your direct messages 24/7 with personalized, contextual responses that sound just like you."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Smart Comment Responses",
    description: "Intelligently engage with comments using AI that understands context and maintains your brand voice."
  },
  {
    icon: <Image size={24} />,
    title: "AI Image Creation",
    description: "Generate stunning social media graphics and content with our advanced AI image generator."
  },
  {
    icon: <Calendar size={24} />,
    title: "Content Scheduling",
    description: "Plan and automate your content calendar with smart scheduling for optimal engagement times."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-primary">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-charcoal">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Powerful AI Features</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered tools help businesses like yours save time and increase engagement on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
