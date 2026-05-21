import { Heart, Lightbulb, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Automation First',
    desc: 'We believe technology should work for you, not the other way around.',
  },
  {
    icon: Users,
    title: 'Privacy Matters',
    desc: 'Your financial records are treated as sensitive by default, with privacy-minded controls built into the experience.',
  },
  {
    icon: Lightbulb,
    title: 'Simplicity',
    desc: 'Complex features delivered through a simple, intuitive interface.',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    desc: 'Every feature is designed with real user needs and feedback in mind.',
  },
];

export function About() {
  return (
    <div className="bg-[#06111d]">
      <section className="bg-page-glow py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex rounded-lg border border-[#7fdcc2]/28 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
            About ClearLedger
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Making financial tracking effortless through automation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
            We're on a mission to make financial tracking effortless through automation and intelligent technology.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071521] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">Our Story</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Born from a simple frustration
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/64">
            <p>
              ClearLedger was born from a simple frustration: manually tracking every expense was time-consuming and error-prone. We believed there had to be a better way.
            </p>
            <p>
              By combining OCR technology with AI-powered transaction classification, we created a solution that automates the tedious parts of personal finance while giving users complete visibility into their money movement.
            </p>
            <p>
              Today, ClearLedger helps Android users track their finances with minimal manual input, with Windows support coming soon. Focus on what matters: making informed financial decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Our Values</h2>
            <p className="mt-4 text-lg leading-8 text-white/62">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-white/10 bg-[#0a2030] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a2030] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Built by a Passionate Team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/64">
            ClearLedger was developed by a team of creative and technically driven students from The University of the West Indies (UWI) with a shared goal of solving one of the Caribbean’s most overlooked challenges namely personal financial management in a cash-first economy. Our capstone team combines skills in software engineering, mobile application development, database architecture, cloud systems, and artificial intelligence integration. From designing the system architecture to implementing secure backend services, AI-powered receipt parsing, and intuitive mobile experiences, the team worked collaboratively to transform an academic project into a practical financial technology solution built specifically for Jamaica and the wider Caribbean, under the supervision of Dr. Ricardo Anderson, professor at the university of the west indies who provided guidance in project management, software engineering, system design, and implementation strategy throughout the development process.
            Together, the ClearLedger team believes technology should make financial management easier, more accessible, and more relevant to Caribbean users — not more complicated.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/52">
            ClearLedger is currently available for Android, with Windows support in development. We continuously update based on user feedback and emerging financial tracking needs.
          </p>
        </div>
      </section>
    </div>
  );
}
