import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Download, 
  Calendar,
  Activity,
  Shield,
  Brain,
  Heart
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  // Mock data for demonstration
  const stats = {
    totalStudents: 1247,
    activeUsers: 389,
    avgWellbeingScore: 73,
    criticalAlerts: 3,
    weeklyGrowth: 12,
    responseTime: 2.1
  };

  const wellbeingTrends = [
    { cohort: 'First Year', score: 68, change: -2 },
    { cohort: 'Second Year', score: 75, change: +3 },
    { cohort: 'Third Year', score: 78, change: +1 },
    { cohort: 'Graduate', score: 71, change: -1 }
  ];

  const criticalAlerts = [
    { id: 1, student: 'Student_X42', severity: 'High', time: '2h ago', status: 'Pending' },
    { id: 2, student: 'Student_Y78', severity: 'Critical', time: '4h ago', status: 'Escalated' },
    { id: 3, student: 'Student_Z13', severity: 'Medium', time: '6h ago', status: 'Resolved' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold hero-text mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">System-wide analytics and mental health insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalStudents.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">registered</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Activity className="w-4 h-4 mr-2 text-success" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">this week</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Avg Wellbeing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.avgWellbeingScore}/100</div>
            <Progress value={stats.avgWellbeingScore} className="mt-1" />
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-destructive" />
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.criticalAlerts}</div>
            <p className="text-xs text-muted-foreground">require attention</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-success" />
              Weekly Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">+{stats.weeklyGrowth}%</div>
            <p className="text-xs text-muted-foreground">engagement</p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Brain className="w-4 h-4 mr-2 text-warning" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.responseTime}h</div>
            <p className="text-xs text-muted-foreground">avg to help</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wellbeing Trends */}
        <div className="lg:col-span-2">
          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Wellbeing Trends by Cohort
              </CardTitle>
              <CardDescription>
                Average wellbeing scores across student populations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wellbeingTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{trend.cohort}</span>
                      <Progress value={trend.score} className="w-32" />
                      <span className="text-sm font-bold">{trend.score}/100</span>
                    </div>
                    <Badge 
                      variant={trend.change >= 0 ? 'default' : 'destructive'}
                      className="ml-2"
                    >
                      {trend.change >= 0 ? '+' : ''}{trend.change}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex space-x-2">
                  <Button variant="soft" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                  <Button variant="soft" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="soft" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts */}
        <div>
          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                Critical Alerts
              </CardTitle>
              <CardDescription>
                Students requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {criticalAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{alert.student}</span>
                      <Badge 
                        variant={
                          alert.severity === 'Critical' ? 'destructive' : 
                          alert.severity === 'High' ? 'outline' : 'secondary'
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{alert.time}</span>
                      <span className={
                        alert.status === 'Resolved' ? 'text-success' :
                        alert.status === 'Escalated' ? 'text-warning' :
                        'text-destructive'
                      }>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="destructive" className="w-full mt-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Review All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* System Health */}
      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-success" />
            System Health & Privacy
          </CardTitle>
          <CardDescription>
            Anonymization status and system performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-success">Data Privacy</h3>
              <p className="text-sm text-muted-foreground">100% anonymized</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
                <Activity className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-success">System Uptime</h3>
              <p className="text-sm text-muted-foreground">99.9% operational</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-success">AI Performance</h3>
              <p className="text-sm text-muted-foreground">94% accuracy</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};