export interface Principle {
  key: string
  title: string
  definition: string
}

export const solidPrinciples: Principle[] = [
  {
    key: 'S',
    title: 'Single Responsibility',
    definition: 'Each module should have one reason to change.',
  },
  {
    key: 'O',
    title: 'Open-Closed',
    definition: 'Extend behavior through composition without editing stable code.',
  },
  {
    key: 'L',
    title: 'Liskov Substitution',
    definition: 'Subtypes must be safely replaceable for their base abstractions.',
  },
  {
    key: 'I',
    title: 'Interface Segregation',
    definition: 'Keep contracts focused so consumers depend only on what they use.',
  },
  {
    key: 'D',
    title: 'Dependency Inversion',
    definition: 'High-level modules depend on abstractions, not concrete details.',
  },
]

export const deliveryStandards: string[] = [
  'Apply DRY by moving shared behavior into reusable utilities and components.',
  'Use strict TypeScript and type-aware linting to detect defects early.',
  'Keep features isolated and composable to support scaling the codebase.',
  'Require automated validation before commits and before pull-request merges.',
]
