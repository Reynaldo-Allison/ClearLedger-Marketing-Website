import { Target, Users, Lightbulb, Heart } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-white">
            About{' '}
            <span className="bg-gradient-to-r from-[#00D9C0] to-[#00A88F] bg-clip-text text-transparent">
              ClearLedger
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            We're on a mission to make financial tracking effortless through automation and intelligent technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-white text-center">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                ClearLedger was born from a simple frustration: manually tracking every expense was time-consuming and error-prone. We believed there had to be a better way.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                By combining OCR technology with AI-powered transaction classification, we created a solution that automates the tedious parts of personal finance while giving users complete visibility into their money movement.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Today, ClearLedger helps Android users track their finances with minimal manual input, with Windows support coming soon. Focus on what matters: making informed financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Our Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Target className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Automation First</h3>
              <p className="text-sm text-white/60">
                We believe technology should work for you, not the other way around.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Users className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Privacy Matters</h3>
              <p className="text-sm text-white/60">
                Your financial data stays on your device. We don't collect or sell your information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Lightbulb className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Simplicity</h3>
              <p className="text-sm text-white/60">
                Complex features delivered through a simple, intuitive interface.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Heart className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">User-Centric</h3>
              <p className="text-sm text-white/60">
                Every feature is designed with real user needs and feedback in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-white">Built by a Passionate Team</h2>
            <p className="text-white/70 text-lg mb-8">
              We're a small team of developers, designers, and financial enthusiasts dedicated to building tools that make personal finance accessible to everyone.
            </p>
            <p className="text-white/60">
              ClearLedger is currently available for Android, with Windows support in development. We continuously update based on user feedback and emerging financial tracking needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
