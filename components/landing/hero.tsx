import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Star, Users, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-10 sm:pb-24 sm:pt-14">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow label */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium text-foreground">Trusted by 500+ families across Ethiopia</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-7">
            <h1 className="text-balance text-5xl font-extrabold tracking-tight leading-[1.1] sm:text-6xl lg:text-7xl">
              Find the{' '}
              <span className="relative inline-block">
                <span className="text-primary">perfect tutor</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5 C50 1.5, 100 7, 199 3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
              {' '}for your child
            </h1>

            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Connect with verified university students and graduates who excel academically.
              Personalized tutoring for EUEE, SAT, and all subjects.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle2, label: 'Verified tutors' },
                { icon: MapPin, label: '300+ locations' },
                { icon: Users, label: '1-on-1 sessions' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="rounded-full text-base font-semibold shadow-md shadow-primary/20 px-8">
                <Link href="/tutors">
                  Find a Tutor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-base font-medium px-8 border-border hover:bg-muted"
              >
                <Link href="/become-tutor">Become a Tutor</Link>
              </Button>
            </div>
          </div>

          {/* Right: Map card */}
          <div className="relative">
            {/* Decorative shape behind card */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-accent/8 to-transparent blur-xl" />

            <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border/60">
              {/* Map image */}
              <div className="relative bg-gradient-to-br from-primary/4 via-background to-accent/4 p-5 sm:p-7">
                <Image
                  src="/images/goongoon-map.svg.png"
                  alt="Goongoon coverage map of Ethiopia"
                  width={480}
                  height={480}
                  className="mx-auto w-full max-w-sm drop-shadow-md"
                  priority
                />
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                {[
                  { value: '310+', label: 'Tutors' },
                  { value: '300+', label: 'Locations' },
                  { value: '500+', label: 'Families' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-0.5 py-4 px-2 text-center">
                    <span className="text-xl font-bold text-primary">{value}</span>
                    <span className="text-xs font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>

              {/* Brand footer */}
              <div className="flex items-center justify-center gap-2 border-t border-border bg-muted/30 px-4 py-2.5 text-center text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Goongoon</span>
                <span>—</span>
                <span>covering all of Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
