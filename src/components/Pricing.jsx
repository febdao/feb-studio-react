import { CheckIcon, ClockIcon, UserGroupIcon, PhotoIcon, CalendarDaysIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Mini Session',
    id: 'mini',
    href: '/booking?mini',
    price: '$250',
    description: "Best for quick family updates, couples, or little ones who get tired fast.",
    time: '30 minutes',
    people: 'Up to 6 people',
    edited: '15 edited photos',
    featured: false,
    upgraded: ['Extra images: $15 each', 'Full gallery: +$150'],
  },
  {
    name: 'Standard Session',
    id: 'standard',
    href: '/booking?standard',
    price: '$400',
    description: 'Most popular option with more variety and time to relax.',
    time: '60 minutes',
    people: 'Up to 10 people',
    edited: '30 edited photos',
    upgraded: ['Extra images: $10 each', 'Full gallery: +$200'],
    featured: true,
  },
  {
    name: 'Extended Session',
    id: 'extended',
    href: '/booking?extended',
    price: '$600',
    description: "Great for bigger families, grandparents, or when kids need extra time.",
    time: '90 minutes',
    people: 'Up to 15 person',
    edited: '50 edited photos',
    upgraded: ['Extra images: $10 each', 'Full gallery: +$200'],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-2 block-title text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
          Photography Packages in <span>Canberra</span>
        </h2>
      </div>
      <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
        Natural, warm photos with a relaxed experience.<br />I photograph families and events across Canberra, with simple pricing and fast delivery.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative scale-110 bg-gray-900 shadow-2xl dark:bg-gray-800 dark:shadow-none'
                : 'bg-white/60 sm:mx-8 lg:mx-0 dark:bg-white/2.5',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 dark:ring-white/10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400',
                'text-base/7 font-semibold',
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900 dark:text-white',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.price}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300',
                'mt-6 text-base/7',
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              <li key={tier.time} className="flex gap-x-3">
                <ClockIcon
                  aria-hidden="true"
                  className={classNames(
                    tier.featured ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400',
                    'h-6 w-5 flex-none',
                  )}
                />
                {tier.time}
              </li>
              <li key={tier.people} className="flex gap-x-3">
                <UserGroupIcon
                  aria-hidden="true"
                  className={classNames(
                    tier.featured ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400',
                    'h-6 w-5 flex-none',
                  )}
                />
                {tier.people}
              </li>
              <li key={tier.edited} className="flex gap-x-3">
                <PhotoIcon
                  aria-hidden="true"
                  className={classNames(
                    tier.featured ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400',
                    'h-6 w-5 flex-none',
                  )}
                />
                {tier.edited}
              </li>
            </ul>
            <p className="mt-6 text-pretty sm:mt-10 text-indigo-400">
              Upgrade options
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300',
                'mt-2 space-y-3 text-sm/6',
              )}
            >
              {tier.upgraded.map((upgraded) => (
                <li key={upgraded} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400',
                      'h-6 w-5 flex-none',
                    )}
                  />
                  {upgraded}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 dark:shadow-none'
                  : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-indigo-600 dark:bg-white/10 dark:text-white dark:inset-ring-white/5 dark:hover:bg-white/20 dark:hover:inset-ring-white/5 dark:focus-visible:outline-white/75',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Book now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
