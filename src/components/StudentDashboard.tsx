import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Heart, 
  Calendar, 
  BookOpen, 
  Users, 
  PenTool, 
  Plus,
  MessageCircle,
  TrendingUp,
  Clock
} from 'lucide-react';

interface JournalEntry {
  id: string;
  content: string;
  date: string;
  mood: number;
}

export const StudentDashboard: React.FC = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [currentMood, setCurrentMood] = useState(7);

  useEffect(() => {
    // Load journal entries from localStorage
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setJournalEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveJournalEntry = () => {
    if (!journalEntry.trim()) return;

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      content: journalEntry,
      date: new Date().toLocaleDateString(),
      mood: currentMood
    };

    const updatedEntries = [newEntry, ...journalEntries];
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setJournalEntry('');
  };

  const wellbeingScore = 78;
  const weeklyProgress = 12;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold hero-text mb-2">Student Dashboard</h1>
        <p className="text-muted-foreground">Your personal mental health companion</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass rounded-nature shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Heart className="w-4 h-4 mr-2 text-success" />
              Wellbeing Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{wellbeingScore}/100</div>
            <Progress value={wellbeingScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="glass rounded-nature shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+{weeklyProgress}%</div>
            <p className="text-xs text-muted-foreground">vs last week</p>
          </CardContent>
        </Card>

        <Card className="glass rounded-nature shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <PenTool className="w-4 h-4 mr-2 text-accent-foreground" />
              Journal Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{journalEntries.length}</div>
            <p className="text-xs text-muted-foreground">total entries</p>
          </CardContent>
        </Card>

        <Card className="glass rounded-nature shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2 text-warning" />
              Last Session
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2d</div>
            <p className="text-xs text-muted-foreground">ago</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Journaling Section */}
        <div className="lg:col-span-2">
          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <PenTool className="w-5 h-5 mr-2 text-primary" />
                Digital Journal
              </CardTitle>
              <CardDescription>
                Express your thoughts and track your mental health journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  How are you feeling today? (1-10)
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">😟</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={currentMood}
                    onChange={(e) => setCurrentMood(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm">😊</span>
                  <Badge variant="secondary">{currentMood}/10</Badge>
                </div>
              </div>
              
              <Textarea
                placeholder="What's on your mind today? Write about your feelings, experiences, or anything you'd like to reflect on..."
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                className="min-h-32 rounded-nature"
              />
              
              <Button onClick={saveJournalEntry} className="w-full" variant="default">
                <Plus className="w-4 h-4 mr-2" />
                Save Entry
              </Button>
            </CardContent>
          </Card>

          {/* Recent Journal Entries */}
          {journalEntries.length > 0 && (
            <Card className="glass rounded-nature shadow-card mt-6">
              <CardHeader>
                <CardTitle className="font-serif">Recent Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {journalEntries.slice(0, 3).map((entry) => (
                    <div key={entry.id} className="p-3 glass rounded-nature">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{entry.date}</span>
                        <Badge variant="secondary">Mood: {entry.mood}/10</Badge>
                      </div>
                      <p className="text-sm">{entry.content.slice(0, 150)}...</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get immediate support with evidence-based coping strategies
              </p>
              <Button variant="soft" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <Heart className="w-5 h-5 mr-2 text-success" />
                Quick Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Take a brief wellbeing check-in (PHQ-9, GAD-7)
              </p>
              <Button variant="soft" className="w-full">
                Start Assessment
              </Button>
            </CardContent>
          </Card>

          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <Calendar className="w-5 h-5 mr-2 text-warning" />
                Book Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a confidential session with a counselor
              </p>
              <Button variant="soft" className="w-full">
                Schedule Now
              </Button>
            </CardContent>
          </Card>

          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Resource Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access guided meditations, videos, and articles
              </p>
              <Button variant="soft" className="w-full">
                Explore Resources
              </Button>
            </CardContent>
          </Card>

          <Card className="glass rounded-nature shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-serif">
                <Users className="w-5 h-5 mr-2 text-secondary-foreground" />
                Peer Forum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other students anonymously
              </p>
              <Button variant="soft" className="w-full">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};