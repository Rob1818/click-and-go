import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalComponent(props) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Open Modal */}
      <button
        type="button"
        className="orderDetails"
        onClick={() => setOpen(true)}
      >
        Order Details
      </button>
      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relativez-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full lg:max-w-sm sm:p-6">
                  <div>
                    {/* Close Modal */}
                    <div className="m-2 text-right">
                      <button
                        type="button"
                        className="inline-flex text-right px-4 py-2 text-3xl font-black text-black hover:text-red-400"
                        onClick={() => setOpen(false)}
                      >
                        X
                      </button>
                    </div>
                    {/* Modal Body */}
                    <div className=" text-center sm:mt-5">
                      <div>
                        <h1 className="uppercase bg-indigo-700 font-bold text-white rounded-lg text-3xl">
                          {props.name}
                        </h1>
                      </div>
                      <ul className="text-center my-3">
                        <li>
                          Item Price:{" "}
                          <span className="font-bold">€{props.price}</span>
                        </li>
                        <li>
                          Number of Items:{" "}
                          <span className="font-bold">{count}</span>
                        </li>
                        <li>
                          Totat Price:{" "}
                          <span className="font-bold">
                            {" "}
                            €{count * props.price}
                          </span>
                        </li>
                      </ul>

                      <div className="flex flex-col mx-auto px-2 m-1">
                        <button
                          className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded active:outline-none hover:bg-gray-500 transition-bg transition-500 transition-linear m-1"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          Add Items +
                        </button>

                        {count > 0 ? (
                          <button
                            className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded active:outline-none hover:bg-gray-500 transition-bg transition-500 transition-linear m-1"
                            onClick={() => {
                              setCount(count - 1);
                            }}
                          >
                            Remove Items -
                          </button>
                        ) : (
                          <button className="bg-gray-200 text-gray-300 font-bold py-2 px-4 rounded active:outline-none transition-bg transition-500 transition-linear m-1">
                            Remove Items -
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Purchase Button */}
                  {/* Purchase button sends alert */}
                  <div>
                    <button
                      type="button"
                      className="addToOrder"
                      onClick={() => setOpen(false)}
                    >
                      Add to Order
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
