import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Calendar, MapPin } from "lucide-react";
const Awards = () => {
  const awards = [{
    title: "Outstanding Achievement in CEMC Gauss Contest",
    organization: "CEMC (Centre for Education in Mathematics and Computing)",
    date: "Jan. 2024",
    description: "Secured 1st place in school, scoring 142/150 (top ~2.5% internationally) in the CEMC Gauss Mathematics Contest.",
    type: "Mathematics Competition",
    icon: <Trophy className="h-6 w-6" />
  }, {
    title: "Harvard CS50 Introduction to Computer Science",
    organization: "Harvard University",
    date: "Oct. 2024 - Dec. 2024",
    description: "An introductory Computer Science course offered at Harvard which I took online. This exposed me to various coding languages and theoretical topics. Completed 10 problem sets and 1 final project with a 100% grade in the course.",
    type: "Course Completion",
    icon: <Star className="h-6 w-6" />
  }, {
    title: "Statement of Outstanding Results for Cambridge Lower Secondary Checkpoint",
    organization: "Cambridge Assessment International Education",
    date: "Jul. 2023 - May 2024",
    description: "Received a Statement of Outstanding Results for Cambridge Lower Secondary Checkpoint results. Scoring above 92% on all 3 tests (Math: 50/50; Science: 50/50; English: 46/50).",
    type: "Academic Achievement",
    icon: <Star className="h-6 w-6" />
  }];
  const leadership = [{
    title: "Co-Founder",
    organization: "Bin to Better",
    date: "Jan. 2025 - Present",
    description: "Founded a nonprofit reporting over 30,000 used tennis balls, partnering with 10+ facilities to support schools, shelters, and assisted living centers.",
    location: "Fremont, CA"
  }, {
    title: "Video Editor and Officer",
    organization: "Engineering and Technology Club",
    date: "Sep. 2024 - Present",
    description: "Serving as an officer in one of the largest student organizations at American High School, with 300+ members. Responsible for guest speaker videos, organizing meetings, and coordinating outreach efforts.",
    location: "American High School"
  }, {
    title: "Treasurer",
    organization: "Physics Club",
    date: "May 2025 - Present",
    description: "Serving in an executive position for one of the largest STEM clubs in American High school, with 150+ members. Responsibilities include managing and allocating funds, filling out club forms, conducting monthly events, meetings and more.",
    location: "American High School"
  }];
  return <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Awards & Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and community impact
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-primary bg-clip-text text-transparent">Academic Achievements</span>
          </h3>
          <div className="space-y-6">
            {awards.map((award, index) => <Card key={index} className="gradient-card hover-lift shadow-card transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{award.icon}</div>
                      <div>
                        <CardTitle className="text-xl text-primary mb-2">{award.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium text-foreground">{award.organization}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{award.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="hover-glow transition-smooth">
                      {award.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-primary bg-clip-text text-transparent">Leadership Roles</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((role, index) => <Card key={index} className="gradient-card hover-lift shadow-card transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">{role.title}</h4>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="font-medium text-primary">{role.organization}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{role.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Awards;