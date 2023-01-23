import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TabSection() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="container mx-auto px-4 py-10">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="space flex flex-col gap-4 p-1 xs:flex-row sm:gap-20">
          <Tab
            disabled
            className=" border-0 pr-6 text-xl font-medium leading-tight text-blSky-500"
          >
            Browse Jobs By
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'rounded py-3 px-6 text-sm font-medium text-blSky-100 outline outline-2 outline-blSky-100',
                selected ? 'bg-blSky-700 text-gray-100' : 'hover:shadow-lg',
              )
            }
          >
            Catagory
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'rounded border-0 py-3 px-6 text-sm font-medium text-blSky-100  outline outline-2 outline-blSky-100',
                selected ? 'bg-blSky-700 text-gray-100' : 'hover:shadow-lg',
              )
            }
          >
            Industry
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel></Tab.Panel>

          <Tab.Panel className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Reliability engineering
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Operation & Maintenance
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Health, Safety, Environment
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Asset Management
              </div>
            </div>
            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Best Practice
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                ISO Series
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Predictive Maintenance
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Quality Management
              </div>
            </div>
            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Management & Leadership
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Machine Lubrications
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Project Management
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Emerging Technologies
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Aerospace & Defence
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Automobiles
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Cement
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Chemical
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Facility Management
              </div>
            </div>

            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                FMCG
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Glass Manufacturing
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Metal & Mining
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                MSME & Small Business
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Oil & Gas
              </div>
            </div>
            <div className="flex-col">
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Pharmaceuticals
              </div>
              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Power
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Public Sector
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Pulp & Paper
              </div>

              <div className="box-border border-b-2 border-solid border-gray-300 py-1 pl-1">
                Transport & Logic
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
