import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/FeatureCard';
import { LoginModal } from '@/components/LoginModal';
import { 
  Brain, 
  Heart, 
  Calendar, 
  BookOpen, 
  Users, 
  PenTool, 
  UserCheck, 
  BarChart3,
  ArrowRight,
  Shield,
  Globe,
  TrendingUp
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'student' | 'admin' | 'volunteer'>('student');

  const features = [
    {
      title: "AI-Guided Chatbot",
      description: "First-aid coping strategies with seamless human escalation",
      icon: Brain,
      expandedContent: "Our AI provides immediate support using evidence-based therapeutic techniques, with automatic escalation to human counselors when needed."
    },
    {
      title: "Wellbeing Assessment",
      description: "Validated tools including PHQ-9, GAD-7, and custom metrics",
      icon: Heart,
      expandedContent: "Comprehensive psychological assessments that track your mental health journey with clinically validated instruments."
    },
    {
      title: "Confidential Booking",
      description: "Secure appointment scheduling with privacy protection",
      icon: Calendar,
      expandedContent: "Book sessions with counselors and volunteers while maintaining complete anonymity and data protection."
    },
    {
      title: "Resource Hub",
      description: "Curated videos, audio guides, and educational materials",
      icon: BookOpen,
      expandedContent: "Access a library of mental health resources, guided meditations, and educational content tailored to your needs."
    },
    {
      title: "Peer Support Forum",
      description: "Anonymous community interaction and mutual support",
      icon: Users,
      expandedContent: "Connect with peers in a safe, moderated environment where you can share experiences and find community support."
    },
    {
      title: "Digital Journaling",
      description: "Private, secure space for reflection and progress tracking",
      icon: PenTool,
      expandedContent: "Express yourself safely with encrypted journaling tools that help track mood patterns and personal growth."
    },
    {
      title: "Volunteer Support",
      description: "Trained student volunteers for peer-to-peer assistance",
      icon: UserCheck,
      expandedContent: "Connect with specially trained student volunteers who understand your experience and can provide peer support."
    },
    {
      title: "Analytics Dashboard",
      description: "Insights for administrators and continuous improvement",
      icon: BarChart3,
      expandedContent: "Comprehensive analytics for program effectiveness, helping institutions improve mental health support continuously."
    }
  ];

  const visionPoints = [
    {
      icon: Shield,
      title: "Individual Care",
      description: "Personalized mental health support for every student"
    },
    {
      icon: Globe,
      title: "Institutional Integration",
      description: "Seamless integration with university health systems"
    },
    {
      icon: TrendingUp,
      title: "Policy Impact",
      description: "Data-driven insights for national mental health policy"
    }
  ];

  const handleLoginClick = (role: 'student' | 'admin' | 'volunteer') => {
    setLoginRole(role);
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            AI to guide → Humans to heal
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto font-medium">
            A context-aware psychological intervention system that combines AI efficiency 
            with human empathy for comprehensive mental health support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => handleLoginClick('student')}
              className="px-8 py-4 text-lg font-semibold"
            >
              Login as Student
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              onClick={() => handleLoginClick('admin')}
              className="px-8 py-4 text-lg font-semibold"
            >
              Login as Admin
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              onClick={() => handleLoginClick('volunteer')}
              className="px-8 py-4 text-lg font-semibold"
            >
              Login as Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 glass-strong rounded-nature-lg p-12">
            <h2 className="text-4xl font-serif font-bold mb-4 hero-text">
              Interactive MVP Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive mental health support system designed for the modern student experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                expandedContent={feature.expandedContent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 hero-text">
              Long-Term Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Scaling from individual care to institutional transformation to national policy impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full glass shadow-card flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <point.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-strong rounded-nature-lg p-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Transform Mental Health Support?
          </h2>
          <p className="text-xl text-muted mb-8">
            Join our mission to create a more empathetic and effective mental health ecosystem
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => handleLoginClick('student')}
              className="px-8 py-4 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 glass border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-lg font-serif font-bold hero-text mb-2">MindCare AI</h3>
            <p className="text-sm text-muted-foreground">
              Demo site — GDPR-style privacy, anonymity, and human escalation emphasized
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Privacy-first design with end-to-end encryption and human oversight</span>
          </div>
        </div>
      </footer>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        defaultRole={loginRole}
      />
    </div>
  );
};