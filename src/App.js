import { useEffect, useState } from "react";
import axios from "axios";
import ModalComponent from "./components/ModalComponent";
import Footer from "./components/Footer";

export default function App() {
  const [burger, setBurger] = useState([]);
  const [kebab, setKebab] = useState([]);
  const [side, setSide] = useState([]);
  const [drink, setDrink] = useState([]);

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

  const getSide = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/2/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setSide(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDrink = (Name) => {
    axios
      .get(
        "https://api.npoint.io/5f458ccb947908d10993/MenuSections/3/MenuItems"
      )
      .then((res) => {
        console.log(res.data);
        setDrink(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Call API when component renders to make data available

  useEffect(() => {
    getBurger();
    getKebab();
    getSide();
    getDrink();
  }, []);

  return (
    <div className="background">
      {/* NAV --------------------------------------------------------------  */}
      <div>
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
      </div>
      {/* BODY --------------------------------------------------------------  */}
      <div>
        <main>
          {/* BURGER SECTION -------------------------------------------------------------- */}
          <div id="burger-section" className="menuSection1">
            <div className="menuSection2">
              <div>
                <table className="tableSection">
                  <thead>
                    <h2>BURGER MENU</h2>
                  </thead>
                  <tbody>
                    {/* Render list of menu items */}
                    {burger.map((burgers, Name) => (
                      <tr key={Name}>
                        <td>
                          <h3>{burgers.Name}</h3>
                        </td>
                        <td>
                          {/* Conditional check for stock */}
                          {burgers.SoldOut === false ? (
                            <span className="inStock">In Stock</span>
                          ) : (
                            <span className="noStock">No Stock</span>
                          )}
                        </td>
                        <td>
                          <p>€{burgers.Price}</p>
                        </td>
                        <td>
                          {/* Conditional check for clickable button */}
                          {burgers.SoldOut === false ? (
                            // Modal component with data passed through as props
                            <ModalComponent
                              name={burgers.Name}
                              price={burgers.Price}
                            />
                          ) : (
                            // Red Button
                            <button type="button" className="REDorderDetails">
                              Order Details
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
          {/* KEBAB SECTION -------------------------------------------------------------- */}
          <div id="kebab-section" className="menuSection1">
            <div className="menuSection2">
              <div>
                <table className="tableSection">
                  <thead>
                    <h2>KEBAB MENU</h2>
                  </thead>
                  <tbody>
                    {/* Render list of menu items */}
                    {kebab.map((kebabs, Name) => (
                      <tr key={Name}>
                        <td>
                          <h3>{kebabs.Name}</h3>
                        </td>
                        <td>
                          {/* Conditional check for stock */}
                          {kebabs.SoldOut === false ? (
                            <span className="inStock">In Stock</span>
                          ) : (
                            <span className="noStock">No Stock</span>
                          )}
                        </td>
                        <td>
                          <p>€{kebabs.Price}</p>
                        </td>
                        <td>
                          {/* Conditional check for clickable button */}
                          {kebabs.SoldOut === false ? (
                            // Modal component with data passed through as props
                            <ModalComponent
                              name={kebabs.Name}
                              price={kebabs.Price}
                            />
                          ) : (
                            // Red Button
                            <button type="button" className="REDorderDetails">
                              Order Details
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
          {/* SIDE SECTION -------------------------------------------------------------- */}
          <div id="sides-section" className="menuSection1">
            <div className="menuSection2">
              <div>
                <table className="tableSection">
                  <thead>
                    <h2>SIDES MENU</h2>
                  </thead>
                  <tbody>
                    {/* Render list of menu items */}
                    {side.map((sides, Name) => (
                      <tr key={Name}>
                        <td>
                          <h3>{sides.Name}</h3>
                        </td>
                        <td>
                          {/* Conditional check for stock */}
                          {sides.SoldOut === false ? (
                            <span className="inStock">In Stock</span>
                          ) : (
                            <span className="noStock">No Stock</span>
                          )}
                        </td>
                        <td>
                          <p>€{sides.Price}</p>
                        </td>
                        <td>
                          {/* Conditional check for clickable button */}
                          {sides.SoldOut === false ? (
                            // Modal component with data passed through as props
                            <ModalComponent
                              name={sides.Name}
                              price={sides.Price}
                            />
                          ) : (
                            // Red Button
                            <button type="button" className="REDorderDetails">
                              Order Details
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
          {/* DRINKS SECTION -------------------------------------------------------------- */}
          <div id="drinks-section" className="menuSection1">
            <div className="menuSection2">
              <div>
                <table className="tableSection">
                  <thead>
                    <h2>DRINKS MENU</h2>
                  </thead>
                  <tbody>
                    {/* Render list of menu items */}
                    {drink.map((drinks, Name) => (
                      <tr key={Name}>
                        <td>
                          <h3>{drinks.Name}</h3>
                        </td>
                        <td>
                          {/* Conditional check for stock */}
                          {drinks.SoldOut === false ? (
                            <span className="inStock">In Stock</span>
                          ) : (
                            <span className="noStock">No Stock</span>
                          )}
                        </td>
                        <td>€{drinks.Price}</td>
                        <td>
                          {/* Conditional check for clickable button */}
                          {drinks.SoldOut === false ? (
                            // Modal component with data passed through as props
                            <ModalComponent
                              name={drinks.Name}
                              price={drinks.Price}
                            />
                          ) : (
                            // Red Button
                            <button type="button" className="REDorderDetails">
                              Order Details
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
        </main>
        {/* FOOTER -------------------------------------------------------------- */}
        <Footer />
      </div>
    </div>
  );
}
