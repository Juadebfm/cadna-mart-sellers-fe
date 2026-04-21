import { deliveryStandards, solidPrinciples } from './core/constants/engineeringPrinciples'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-12 sm:px-10">
      <header className="mb-10 rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Cadna Mart Seller Frontend
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          React + TypeScript Standards-First Starter
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          This project is intentionally bootstrapped with strict quality gates and architectural
          principles to keep long-term maintainability high as teams and features grow.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold text-slate-900">SOLID in This Codebase</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solidPrinciples.map((principle) => (
            <article key={principle.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{principle.key}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{principle.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{principle.definition}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-slate-900">Delivery Standards</h2>
        <ul className="space-y-3">
          {deliveryStandards.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
