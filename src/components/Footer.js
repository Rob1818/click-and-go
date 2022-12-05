const footerNavigation = {
  col1: [
    { name: "Item One", href: "#" },
    { name: "Item Two", href: "#" },
    { name: "Item Three", href: "#" },
    { name: "Item Four", href: "#" },
  ],
  col2: [
    { name: "Item One", href: "#" },
    { name: "Item Two", href: "#" },
    { name: "Item Three", href: "#" },
    { name: "Item Four", href: "#" },
  ],
  col3: [
    { name: "Item One", href: "#" },
    { name: "Item Two", href: "#" },
    { name: "Item Three", href: "#" },
    { name: "Item Four", href: "#" },
  ],
  col4: [
    { name: "Item One", href: "#" },
    { name: "Item Two", href: "#" },
    { name: "Item Three", href: "#" },
    { name: "Item Four", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              {/* Col 1 */}
              <div>
                <h3 className="text-lg font-bold text-indigo-700  ">
                  Column One
                </h3>
                <ul role="list" className="mt-2 space-y-6">
                  {footerNavigation.col1.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Col 2 */}
              <div>
                <h3 className="text-lg font-bold text-indigo-700  ">
                  Column Two
                </h3>
                <ul role="list" className="mt-2 space-y-6">
                  {footerNavigation.col2.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              {/* Col 3 */}
              <div>
                <h3 className="text-lg font-bold text-indigo-700  ">
                  Column Three
                </h3>
                <ul role="list" className="mt-2 space-y-6">
                  {footerNavigation.col3.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Col 4 */}
              <div>
                <h3 className="text-lg font-bold text-indigo-700  ">
                  Column One
                </h3>
                <ul role="list" className="mt-2 space-y-6">
                  {footerNavigation.col4.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* GitHub Link */}
          <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <a href="http://" target="_blank">
                <p class="mb-8 text-center text-base text-gray-400">
                  Made by Robert Kriby 'Rob1818' Click here for github repo.
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
