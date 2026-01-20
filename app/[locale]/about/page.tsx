import { Footer } from '@/components/Footer';
import { Target, Users, Zap, Heart } from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * 关于页面
 */
export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面头部 */}
      <section className="w-full px-8 py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">About QAStack</h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive directory for software testing tools and resources
          </p>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="w-full px-8 py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* 项目介绍 */}
          <div>
            <h2 className="text-3xl font-bold mb-4">What is QAStack?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              QAStack is a curated directory of software testing tools designed to help QA engineers,
              developers, and testing professionals discover the right tools for their testing needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for automation frameworks, performance testing tools, or API testing
              solutions, QAStack provides detailed information, comparisons, and insights to help you make
              informed decisions.
            </p>
          </div>

          {/* 核心价值 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Comprehensive</h3>
                </div>
                <p className="text-muted-foreground">
                  Cover all major testing categories from unit testing to end-to-end automation
                </p>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Community-Driven</h3>
                </div>
                <p className="text-muted-foreground">
                  Built by testers, for testers, with insights from the testing community
                </p>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Up-to-Date</h3>
                </div>
                <p className="text-muted-foreground">
                  Regularly updated with the latest tools and testing trends
                </p>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Free & Open</h3>
                </div>
                <p className="text-muted-foreground">
                  Free to use with no registration required, accessible to everyone
                </p>
              </div>
            </div>
          </div>

          {/* 功能特性 */}
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Detailed tool descriptions with pricing information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Categorized by testing type and technology stack</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Educational blog posts and tutorials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Regular updates with new tools and resources</span>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="rounded-lg border p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Have suggestions for tools we should add? Found an issue? We'd love to hear from you.
            </p>
            <p className="text-muted-foreground">
              This project is open source and welcomes contributions from the community.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
