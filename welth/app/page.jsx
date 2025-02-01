import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2 text-blue-600">
                  {statsData.value}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances with intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((howItWorks, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  {howItWorks.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{howItWorks.title}</h3>
                <p className="text-gray-600">{howItWorks.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                  </div>
                  <div>
                    <p className="
                      text-gray-600
                      mt-4
                      text-center
                      italic
                      leading-relaxed
                     ">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Ready to get started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using Welth to manage their finances with intelligence.
          </p>
          
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
              Start Free Trial
            </Button>
          </Link>
          </div>
        </section>
    </div>
  
  );
}
