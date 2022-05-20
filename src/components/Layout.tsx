import { User } from '@prisma/client';
import Image from 'next/image';
import classNames from '../lib/classNames';
import TextAvatar from './TextAvatar';

const navigation = [
  { name: 'Studies', href: '#', current: true },
  { name: 'People', href: '#', current: false },
  { name: 'Incentives', href: '#', current: false },
];

type Props = {
  children: React.ReactNode;
  user: User;
};

function Layout({ children, user }: Props) {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logoIcon.png"
                    alt="Rally Logo"
                    priority={true}
                    width={38}
                    height={38}
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6 space-x-2">
                  <TextAvatar fullname={user?.name} />
                  <span className="block text-white">{user?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Studies</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
