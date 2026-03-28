import { MapPin, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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

/* Simplified, approximate outline of Ethiopia (SVG viewBox 0 0 100 100) */
const ETHIOPIA_PATH =
  'M 37 4 L 43 3 L 48 5 L 55 4 L 62 7 L 68 12 L 72 10 L 77 13 L 80 18 ' +
  'L 78 23 L 82 27 L 82 33 L 79 37 L 84 42 L 82 47 L 76 50 L 72 55 L 68 60 ' +
  'L 63 65 L 60 71 L 56 76 L 50 80 L 45 76 L 40 72 L 36 66 L 33 60 L 28 56 ' +
  'L 24 52 L 22 46 L 24 40 L 20 35 L 18 29 L 21 23 L 25 18 L 29 14 L 34 8 Z'

export function TutorMap() {
  const totalTutors = coverageAreas.reduce((sum, a) => sum + a.tutors, 0)

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5 px-3 py-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Nationwide Coverage</span>
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Goongoon Tutor Family
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our growing network of verified tutors spans communities across Ethiopia,
            bringing quality education directly to families in every region.
          </p>
        </div>

        {/* Map card */}
        <div className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl ring-1 ring-border/30">
          <div className="relative w-full bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 sm:p-10">
            <svg
              viewBox="0 0 100 100"
              aria-label="Goongoon Tutor Family coverage map of Ethiopia"
              className="mx-auto w-full max-w-md"
            >
              {/* Country outline */}
              <path
                d={ETHIOPIA_PATH}
                fill="hsl(145 30% 92%)"
                stroke="hsl(145 40% 60%)"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />

              {/* Connection lines from capital to hubs */}
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

              {/* Coverage circles */}
              {coverageAreas.map((area) => (
                <g key={area.name}>
                  <circle
                    cx={area.cx}
                    cy={area.cy}
                    r={area.r + 3}
                    fill="hsl(145 55% 50%)"
                    opacity="0.12"
                  />
                  <circle
                    cx={area.cx}
                    cy={area.cy}
                    r={area.r}
                    fill={area.primary ? 'hsl(145 55% 45%)' : 'hsl(145 45% 55%)'}
                    opacity="0.85"
                  />
                  <circle
                    cx={area.cx}
                    cy={area.cy}
                    r={1.2}
                    fill="white"
                    opacity="0.9"
                  />
                </g>
              ))}

              {/* City labels */}
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
            <div className="flex flex-col items-center py-4 px-3 text-center">
              <span className="text-2xl font-bold text-primary">{totalTutors}+</span>
              <span className="mt-0.5 text-xs text-muted-foreground">Active Tutors</span>
            </div>
            <div className="flex flex-col items-center py-4 px-3 text-center">
              <span className="text-2xl font-bold text-primary">{coverageAreas.length}</span>
              <span className="mt-0.5 text-xs text-muted-foreground">Cities Covered</span>
            </div>
            <div className="flex flex-col items-center py-4 px-3 text-center">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="mt-0.5 text-xs text-muted-foreground">Families Served</span>
            </div>
          </div>

          {/* Caption */}
          <div className="flex items-center justify-center gap-2 border-t border-border bg-muted/20 px-6 py-3 text-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 shrink-0 text-primary" />
            <span>
              <span className="font-semibold text-foreground">Goongoon Tutor Family</span>
              {' '}— connecting dedicated tutors with eager learners across every corner of Ethiopia.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
