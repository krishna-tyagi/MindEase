import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  expandedContent?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  expandedContent,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className={cn(
        "feature-card gradient-card border-0 shadow-card",
        isExpanded && "scale-105 shadow-glow",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-lg font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      
      {isExpanded && expandedContent && (
        <CardContent className="pt-0">
          <div className="p-4 bg-accent/50 rounded-lg border border-accent">
            <p className="text-sm text-accent-foreground">{expandedContent}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};