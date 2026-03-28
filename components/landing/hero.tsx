import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Star, Users, Shield } from 'lucide-react'

const coverageAreas = [
  { cx: 52, cy: 47, r: 14, name: 'Addis Ababa', tutors: 120, primary: true },
  { cx: 37, cy: 28, r: 7,  name: 'Bahir Dar',   tutors: 38,  primary: false },
  { cx: 43, cy: 20, r: 7,  name: 'Gondar',       tutors: 32,  primary: false },
  { cx: 63, cy: 33, r: 7,  name: 'Dire Dawa',    tutors: 40,  primary: false },
  { cx: 29, cy: 52, r: 5,  name: 'Jimma',        tutors: 22,  primary: false },
  { cx: 65, cy: 54, r: 5,  name: 'Harar',        tutors: 18,  primary: false },
  { cx: 51, cy: 65, r: 6,  name: 'Hawassa',      tutors: 26,  primary: false },
  { cx: 73, cy: 44, r: 5,  name: 'Jijiga',       tutors: 14,  primary: false },
]

const ETHIOPIA_PATH =
  'M 37 4 L 43 3 L 48 5 L 55 4 L 62 7 L 68 12 L 72 10 L 77 13 L 80 18 ' +
  'L 78 23 L 82 27 L 82 33 L 79 37 L 84 42 L 82 47 L 76 50 L 72 55 L 68 60 ' +
  'L 63 65 L 60 71 L 56 76 L 50 80 L 45 76 L 40 72 L 36 66 L 33 60 L 28 56 ' +
  'L 24 52 L 22 46 L 24 40 L 20 35 L 18 29 L 21 23 L 25 18 L 29 14 L 34 8 Z'

export function Hero() {
  const totalTutors = coverageAreas.reduce((sum, a) => sum + a.tutors, 0)
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
                {/* Ethiopia coverage map */}
                <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4 sm:p-6">
                  <svg
                    viewBox="0 0 100 100"
                    aria-label="Goongoon coverage map of Ethiopia"
                    className="mx-auto w-full max-w-sm"
                  >
                    <path
                      d={ETHIOPIA_PATH}
                      fill="hsl(145 30% 92%)"
                      stroke="hsl(145 40% 60%)"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                    {(() => {
                      const capital = coverageAreas.find((a) => a.primary)
                      if (!capital) return null
                      return coverageAreas.filter((a) => !a.primary).map((area) => (
                        <line
                          key={`line-${area.name}`}
                          x1={capital.cx}
                          y1={capital.cy}
                          x2={area.cx}
                          y2={area.cy}
                          stroke="hsl(145 50% 55%)"
                          strokeWidth="0.5"
                          strokeDasharray="1.5 1.5"
                          opacity="0.6"
                        />
                      ))
                    })()}
                    {coverageAreas.map((area) => (
                      <g key={area.name}>
                        <circle cx={area.cx} cy={area.cy} r={area.r + 3} fill="hsl(145 55% 50%)" opacity="0.12" />
                        <circle
                          cx={area.cx}
                          cy={area.cy}
                          r={area.r}
                          fill={area.primary ? 'hsl(145 55% 45%)' : 'hsl(145 45% 55%)'}
                          opacity="0.85"
                        />
                        <circle cx={area.cx} cy={area.cy} r={1.2} fill="white" opacity="0.9" />
                      </g>
                    ))}
                    {coverageAreas.map((area) => (
                      <text
                        key={`label-${area.name}`}
                        x={area.cx}
                        y={area.cy + area.r + 5}
                        textAnchor="middle"
                        fontSize={area.primary ? '3.2' : '2.6'}
                        fontWeight={area.primary ? '700' : '500'}
                        fill="hsl(145 35% 25%)"
                      >
                        {area.name}
                      </text>
                    ))}
                  </svg>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-muted/30">
                  <div className="flex flex-col items-center py-3 px-2 text-center">
                    <span className="text-lg font-bold text-primary">{totalTutors}+</span>
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
