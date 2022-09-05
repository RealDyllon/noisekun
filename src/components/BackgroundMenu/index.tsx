import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiMonitor } from 'react-icons/fi'

import { useBackgroundStore } from '../../stores/BackgroundStore'

export const BackgroundMenu = () => {
  const setBackground = useBackgroundStore(set => set.setBackground)
  const background = useBackgroundStore(set => set.background)

  return (
    <Menu as="div" className="z-50">
      <div className="flex group">
        <Menu.Button className="opacity-90 group-hover:opacity-100">
          <FiMonitor size={22} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="max-h-[85vh] flex flex-col gap-2 overflow-y-auto snap snap-y snap-mandatory scroll-pt-2 last:border-red-600 absolute left-4 right-4 md:left-auto md:right-0 mt-2 p-2 origin-top-right rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl focus:outline-none">
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'static' && !active && 'border-transparent'
                } ${background === 'static' && !active && 'border-white/50'} ${
                  active && 'border-white'
                }  font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer bg-main`}
                onClick={() => setBackground('static')}
              >
                Static
              </button>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'dark' && !active && 'border-transparent'
                } ${background === 'dark' && !active && 'border-white/50'} ${
                  active && 'border-white'
                } font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer bg-gray-900`}
                onClick={() => setBackground('dark')}
              >
                Dark
              </button>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'transition' && !active && 'border-transparent'
                } ${
                  background === 'transition' && !active && 'border-white/50'
                } ${
                  active && 'border-white'
                } font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer animate-background-change-sm`}
                onClick={() => setBackground('transition')}
              >
                Transition
              </button>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'room-and-rain' &&
                  !active &&
                  'border-transparent'
                } ${
                  background === 'room-and-rain' && !active && 'border-white/50'
                } ${
                  active && 'border-white'
                } font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer bg-lofi-rain bg-center bg-cover`}
                onClick={() => setBackground('room-and-rain')}
              >
                Room and Rain
              </button>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'train-and-rain' &&
                  !active &&
                  'border-transparent'
                } ${
                  background === 'train-and-rain' &&
                  !active &&
                  'border-white/50'
                } ${
                  active && 'border-white'
                } font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer bg-train-rain bg-center bg-cover`}
                onClick={() => setBackground('train-and-rain')}
              >
                Train and Rain
              </button>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="snap-start md:w-52">
            {({ active }) => (
              <button
                className={`border-2 ${
                  background !== 'waterfall' && !active && 'border-transparent'
                } ${
                  background === 'waterfall' && !active && 'border-white/50'
                } ${
                  active && 'border-white'
                } font-bold text-xl p-10 md:p-6 w-full rounded-2xl cursor-pointer bg-tree bg-center bg-cover`}
                onClick={() => setBackground('waterfall')}
              >
                Waterfall
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
