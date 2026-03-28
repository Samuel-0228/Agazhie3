import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Star, Users, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit gap-1.5 px-3 py-1.5">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>Trusted by 500+ families</span>
            </Badge>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find the{' '}
              <span className="text-primary">perfect tutor</span>{' '}
              for your child
            </h1>
            
            <p className="max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Connect with verified university students and graduates who excel academically. 
              Personalized tutoring for EUEE, SAT, and all subjects.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/tutors">Find a Tutor</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/become-tutor">Become a Tutor</Link>
              </Button>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Verified tutors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" />
                <span>Safe & secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                <span>1-on-1 sessions</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-border">
                {/* Goongoon coverage map image */}
                <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4 sm:p-6">
                  <Image
                    src="/images/goongoon-map.svg.png"
                    alt="Goongoon coverage map of Ethiopia"
                    width={400}
                    height={400}
                    className="mx-auto w-full max-w-sm"
                    priority
                  />
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-muted/30">
                  <div className="flex flex-col items-center py-3 px-2 text-center">
                    <span className="text-lg font-bold text-primary">310+</span>
                    <span className="text-xs text-muted-foreground">Tutors</span>
                  </div>
                  <div className="flex flex-col items-center py-3 px-2 text-center">
                    <span className="text-lg font-bold text-primary">8</span>
                    <span className="text-xs text-muted-foreground">Cities</span>
                  </div>
                  <div className="flex flex-col items-center py-3 px-2 text-center">
                    <span className="text-lg font-bold text-primary">500+</span>
                    <span className="text-xs text-muted-foreground">Families</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 border-t border-border bg-muted/20 px-4 py-2 text-center text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-foreground">Goongoon</span>
                    {' '}— across Ethiopia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
