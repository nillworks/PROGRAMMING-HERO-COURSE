import gateUsersData from '@/lib/gateUsersData';
import Link from 'next/link';

const ListedBookLayout = async ({ children }) => {
  const userPromise = await gateUsersData();

  return (
    <div>
      <section className="pt-25 px-3">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}

            {children}

            <label
              htmlFor="my-drawer-3"
              className="btn drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <ul className="flex flex-col gap-4">
                {userPromise.map(item => (
                  <li className="text-2xl font-medium" key={item.id}>
                    <Link href={`/listedBooks/${item.id}`}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListedBookLayout;
