import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';

const people = [
  {
    id: 1,
    name: 'Location',
    unavailable: true,
  },
  {
    id: 2,
    name: 'Kolkata',
    unavailable: false,
  },
  {
    id: 3,
    name: 'Delhi(NCR)',
    unavailable: false,
  },
  {
    id: 4,
    name: 'Hydrabad',
    unavailable: false,
  },
  {
    id: 5,
    name: 'Benglore',
    unavailable: false,
  },
  {
    id: 6,
    name: 'Pune',
    unavailable: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FormSelect() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative block sm:w-[30%] lg:w-1/5">
            <Listbox.Button className="relative w-full cursor-default rounded  border-0 bg-inherit py-2 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-2 ring-blSky-100 focus:border-0 focus:ring-2 focus:ring-blSky-100 sm:py-4 sm:text-sm">
              <span className="flex items-center">
                {/* <img
                  src={selected.avatar}
                  alt=""
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                /> */}
                <span className="ml-0 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-2 flex items-center pr-2">
                <Icon
                  icon={faCaretDown}
                  className="h-5 w-5 text-blSky-100"
                  size="xs"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="ring-blsky-100 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-blSky-700 py-1 text-base text-gray-100 shadow-lg ring-2 ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-blSky-100 text-gray-100' : 'text-gray-100',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={person}
                    disabled={person.unavailable}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img
                            src={person.avatar}
                            alt=""
                            className="h-6 w-6 flex-shrink-0 rounded-full"
                          /> */}
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-gray-100' : 'text-blSky-100',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <Icon icon={faCheck} className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
