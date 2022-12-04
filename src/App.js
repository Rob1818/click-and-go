import { useEffect, useState } from "react";
import axios from "axios";
import ModalComponent from "./components/ModalComponent";

const Menu = () => {
  // State Managment

  const [burger, setBurger] = useState([]);
  const [kebab, setKebab] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Get requests to API

  const getBurger = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/0/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setBurger(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getKebab = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/1/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setKebab(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSides = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/2/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setSides(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDrinks = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/3/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setDrinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Call API when component renders to make data available

  useEffect(() => {
    getBurger();
    getKebab();
    getSides();
    getDrinks();
  }, []);

  return (
    <div className="background">
      {/* ----- NAV ----- */}
      <nav>
        <div className="navBar">
          <div>
            <a href="#burger-section" className="navBarButtons">
              Burgers
            </a>
          </div>
          <div>
            <a href="#kebab-section" className="navBarButtons">
              Kebabs
            </a>
          </div>
          <div>
            <a href="#sides-section" className="navBarButtons">
              Sides
            </a>
          </div>
          <div>
            <a href="#drinks-section" className="navBarButtons">
              Drinks
            </a>
          </div>
        </div>
      </nav>
      {/* ----- BODY ----- */}

      <main>
        {/* Burger Section 1 */}
        <a href="">
          <div id="burger-section">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <div className="py-3.5 pl-4 pr-3 text-left text-3xl font-black text-indigo-600 sm:pl-6">
                            BURGER MENU
                          </div>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {/* Render list of menu items */}
                          {burger.map((burgers, Name) => (
                            <tr key={Name}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="font-bold text-gray-900 text-xl">
                                      {burgers.Name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              {/* Conditional check for in stock not in stock */}
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {burgers.SoldOut === false ? (
                                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                    No Stock
                                  </span>
                                )}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <div className="text-gray-900">
                                  € {burgers.Price}
                                </div>
                              </td>

                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {/* Conditional check if not in stock render non clickable button */}
                                {/* Modal component with data passed through as props*/}
                                {burgers.SoldOut === false ? (
                                  <ModalComponent
                                    name={burgers.Name}
                                    price={burgers.Price}
                                  />
                                ) : (
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
                                  >
                                    Purchase
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* Kebab Section 2 */}
        <div id="kebab-section">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <div className="py-3.5 pl-4 pr-3 text-left text-3xl font-black text-indigo-600 sm:pl-6">
                          KEBAB MENU
                        </div>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {/* Render list of menu items */}
                        {kebab.map((kebabs, Name) => (
                          <tr key={Name}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-bold text-gray-900 text-xl">
                                    {kebabs.Name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            {/* Conditional check for in stock not in stock */}
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {kebabs.SoldOut === false ? (
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                  In Stock
                                </span>
                              ) : (
                                <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                  No Stock
                                </span>
                              )}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">
                                € {kebabs.Price}
                              </div>
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {/* Conditional check if not in stock render non clickable button */}
                              {/* Modal component with data passed through as props*/}
                              {kebabs.SoldOut === false ? (
                                <ModalComponent
                                  name={kebabs.Name}
                                  price={kebabs.Price}
                                />
                              ) : (
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
                                >
                                  Purchase
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sides Section 3 */}
        <div id="sides-section">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col-3 lg:flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <div className="py-3.5 pl-4 pr-3 text-left text-3xl font-black text-indigo-600 sm:pl-6">
                          SIDES MENU
                        </div>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {/* Render list of menu items */}
                        {sides.map((side, Name) => (
                          <tr key={Name}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-bold text-gray-900 text-xl">
                                    {side.Name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            {/* Conditional check for in stock not in stock */}
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {side.SoldOut === false ? (
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                  In Stock
                                </span>
                              ) : (
                                <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                  No Stock
                                </span>
                              )}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">
                                € {side.Price}
                              </div>
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {/* Conditional check if not in stock render non clickable button */}
                              {/* Modal component with data passed through as props*/}
                              {side.SoldOut === false ? (
                                <ModalComponent
                                  name={side.Name}
                                  price={side.Price}
                                />
                              ) : (
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
                                >
                                  Purchase
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Drinks Section 4 */}
        <div id="drinks-section">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col-3 lg:flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <div className="py-3.5 pl-4 pr-3 text-left text-3xl font-black text-indigo-600 sm:pl-6">
                          DRINKS MENU
                        </div>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {/* Render list of menu items */}
                        {drinks.map((drink, Name) => (
                          <tr key={Name}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-bold text-gray-900 text-xl">
                                    {drink.Name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            {/* Conditional check for in stock not in stock */}
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {drink.SoldOut === false ? (
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                  In Stock
                                </span>
                              ) : (
                                <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                  No Stock
                                </span>
                              )}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">
                                € {drink.Price}
                              </div>
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {/* Conditional check if not in stock render non clickable button */}
                              {/* Modal component with data passed through as props*/}
                              {drink.SoldOut === false ? (
                                <ModalComponent
                                  name={drink.Name}
                                  price={drink.Price}
                                />
                              ) : (
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
                                >
                                  Purchase
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* ----- FOOTER ----- */}
      <footer class="bg-white mt-20">
        <div>
          <nav className="mt-8">
            <div className="footerBar">
              <div>
                <a
                  href="#burger-section"
                  className="uppercase text-gray-900 no-underline hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-xl3"
                >
                  Burgers
                </a>
                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
              <div>
                <a
                  href="#kebab-section"
                  className="uppercase text-gray-900 no-underline hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-xl3"
                >
                  Kebabs
                </a>
                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
              <div>
                <a
                  href="#sides-section"
                  className="uppercase text-gray-900 no-underline hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-xl3"
                >
                  Sides
                </a>
                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
              <div>
                <a
                  href="#drinks-section"
                  className="uppercase text-gray-900 no-underline hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-xl3"
                >
                  Drinks
                </a>
                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </div>
          </nav>
          <p class="mb-8 text-center text-base text-gray-400">
            Made by Robert Kriby 'Rob1818'{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Click here for github repo.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
