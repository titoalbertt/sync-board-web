import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Globe,
  Shield,
  Users,
  Star,
  ArrowRight,
  Rocket,
  Github,
  Twitter,
  CheckCircle2,
  Lightbulb,
  Target,
  TrendingUp,
  Sparkles,
  Activity,
  Zap as ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description:
        "Optimized performance with cutting-edge technology to deliver exceptional speed and responsiveness.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure by Default",
      description:
        "Built-in security features and best practices to keep your data and applications protected.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description:
        "Powerful collaboration tools designed for modern teams to work together seamlessly.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Scale",
      description:
        "Scale effortlessly to millions of users worldwide with our distributed infrastructure.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Smart Insights",
      description:
        "AI-powered analytics and insights to help you make data-driven decisions.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Goal Oriented",
      description:
        "Purpose-built tools designed to help you achieve your specific business objectives.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Product Manager",
      avatar: "AT",
      content:
        "This platform has transformed how our team collaborates. The productivity gains have been remarkable.",
      rating: 5,
    },
    {
      name: "Jordan Lee",
      role: "Software Engineer",
      avatar: "JL",
      content:
        "The developer experience is exceptional. Clean APIs and comprehensive documentation made integration seamless.",
      rating: 5,
    },
    {
      name: "Morgan Davis",
      role: "CEO",
      avatar: "MD",
      content:
        "We saw a 40% improvement in operational efficiency within first month of implementation.",
      rating: 5,
    },
  ];

  const stats = [
    {
      label: "Active Users",
      value: "1M+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Projects Completed",
      value: "50K+",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      label: "Customer Rating",
      value: "4.9/5",
      icon: <Star className="w-5 h-5" />,
    },
    {
      label: "Growth Rate",
      value: "150%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "$9",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 10 users",
        "10GB storage",
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      title: "Professional",
      price: "$29",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 users",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom analytics",
        "Dedicated support",
        "Advanced security",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden gradient-hero py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-accent/20 to-primary/10 opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-accent/20 text-accent-foreground border-accent/40 shadow-sm"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              New Version Released
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground">
              <span className="block">Build amazing</span>
              <span className="block text-white">digital experiences</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              The all-in-one platform for modern teams to collaborate, build,
              and scale their digital products with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-background hover:bg-accent/10 text-black hover:text-white cursor-pointer"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background hover:bg-accent/10 text-black cursor-pointer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
            <div className="flex justify-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-white" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <ZapIcon className="w-4 h-4 text-white" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our platform provides all the tools and features your team needs
              to build and scale amazing products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 shadow-md hover:shadow-xl hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect plan for your team's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-border/50 shadow-md hover:shadow-xl hover-lift transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-primary/50 shadow-glow bg-card/70 backdrop-blur-sm"
                    : "bg-card/50 backdrop-blur-sm"
                }`}
              >
                <CardHeader className="text-center pb-6">
                  {plan.popular && (
                    <Badge
                      variant="default"
                      className="w-fit mx-auto mb-4 gradient-primary"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-lg font-normal text-muted-foreground">
                        /month
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 shadow-md hover:shadow-lg hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="mr-3 ring-2 ring-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-primary-foreground">
              Join thousands of teams who are already building better products
              with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background hover:bg-accent/10 hover-lift shadow-lg"
              >
                <Rocket className="w-4 h-4" />
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
              >
                <Users className="w-4 h-4 mr-2" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SyncBoard
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-md leading-relaxed">
                The all-in-one platform for modern teams to collaborate, build,
                and scale their digital products with confidence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} SyncBoard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
