import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  UserCheck, 
  MessageCircle, 
  AlertTriangle, 
  BookOpen, 
  Send,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

interface StudentMessage {
  id: string;
  studentId: string;
  message: string;
  timestamp: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'new' | 'responded' | 'escalated';
}

export const VolunteerDashboard: React.FC = () => {
  const [responseText, setResponseText] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  // Mock data for demonstration
  const messages: StudentMessage[] = [
    {
      id: '1',
      studentId: 'Student_A47',
      message: "I've been feeling overwhelmed with my coursework lately. Everything seems too much and I'm having trouble sleeping. Any advice on managing stress?",
      timestamp: '2 hours ago',
      urgency: 'medium',
      status: 'new'
    },
    {
      id: '2',
      studentId: 'Student_B23',
      message: "Thank you for your response yesterday. The breathing exercises really helped during my presentation today!",
      timestamp: '4 hours ago',
      urgency: 'low',
      status: 'responded'
    },
    {
      id: '3',
      studentId: 'Student_C91',
      message: "I'm having some really dark thoughts and I don't know what to do. I feel like I'm losing control.",
      timestamp: '6 hours ago',
      urgency: 'high',
      status: 'escalated'
    }
  ];

  const handleSendResponse = () => {
    if (!responseText.trim() || !selectedMessage) return;
    
    // In a real app, this would send the response
    console.log('Sending response to message:', selectedMessage, responseText);
    setResponseText('');
    setSelectedMessage(null);
  };

  const handleEscalate = (messageId: string) => {
    // In a real app, this would escalate to faculty
    console.log('Escalating message:', messageId);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'secondary';
      case 'responded': return 'default';
      case 'escalated': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold hero-text mb-2">Volunteer Dashboard</h1>
        <p className="text-muted-foreground">Supporting students through peer-to-peer assistance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-primary" />
              Active Conversations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">ongoing</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-success" />
              Students Helped
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">47</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2 text-warning" />
              Avg Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">2.3h</div>
            <p className="text-xs text-muted-foreground">target: &lt;3h</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              Satisfaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">94%</div>
            <p className="text-xs text-muted-foreground">student feedback</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-2">
          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                Student Messages
              </CardTitle>
              <CardDescription>
                Pseudonymous messages from students seeking support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                      selectedMessage === message.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedMessage(message.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{message.studentId}</span>
                        <Badge variant={getUrgencyColor(message.urgency) as "secondary" | "destructive" | "outline"}>
                          {message.urgency}
                        </Badge>
                        <Badge variant={getStatusColor(message.status) as "secondary" | "default" | "destructive"}>
                          {message.status}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                    {message.urgency === 'high' && (
                      <div className="mt-2">
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEscalate(message.id);
                          }}
                        >
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Escalate to Faculty
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Response Panel */}
        <div className="space-y-6">
          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="w-5 h-5 mr-2 text-primary" />
                Response Panel
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedMessage ? (
                <div className="space-y-4">
                  <Alert>
                    <AlertDescription>
                      Responding to: {messages.find(m => m.id === selectedMessage)?.studentId}
                    </AlertDescription>
                  </Alert>
                  
                  <Textarea
                    placeholder="Write a supportive, empathetic response. Remember to suggest professional help if needed..."
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                    className="min-h-32"
                  />
                  
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleSendResponse}
                      className="flex-1"
                      variant="hero"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Response
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleEscalate(selectedMessage)}
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Select a message to respond
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Training Hub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="soft" className="w-full justify-start">
                Crisis Intervention Guidelines
              </Button>
              <Button variant="soft" className="w-full justify-start">
                Active Listening Techniques
              </Button>
              <Button variant="soft" className="w-full justify-start">
                When to Escalate
              </Button>
              <Button variant="soft" className="w-full justify-start">
                Self-Care for Volunteers
              </Button>
            </CardContent>
          </Card>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Remember:</strong> You're here to provide peer support. Always suggest professional help for serious issues and escalate when in doubt.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};