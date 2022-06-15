import React, { useState } from "react";

export const Products = () => {
  const [input, setInput] = useState([
    {
      productName: "",
      productPrice: 0,
      qty: 1,
      total: 0,
    },
  ]);
  const handleChange = (event, index) => {
    let itemChange = event.target;
    let { name, value } = itemChange;
    const list = [...input];
    list[index][name] = value;

    setInput(list);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleAdd = () => {
    setInput([
      ...input,
      {
        productName: "",
        productPrice: 0,
        qty: 1,
        total: 0,
      },
    ]);
  };

  const handleDelete = (item) => {
    const list = [...input];
    list.splice(item, 1);
    setInput(list);
  };
  return (
    <>
      <section className="pt-36 pb-32 lg:w-full">
        <div className="container pl-12">
          <form action="" method="post" onSubmit={handleSubmit}>
            <div>
              <div>
                <button
                  className="text-base font-semibold text-white bg-slate-500 px-8 py-3 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                  onClick={handleAdd}
                >
                  New
                </button>
              </div>
              {input.map((item, idx) => (
                <div key={idx}>
                  <div className="py-4 inline-block mr-10 mb-5 xs:my-10">
                    <label
                      htmlFor="productName"
                      className="text-base font-bold"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      className="w-full bg-slate-200 text-dark p-3 rounded-lg focus:outline-sky-500 focus:ring-skay-500 focus:ring-1 focus:border-skay-500 text-center "
                      onChange={(event) => handleChange(event, idx)}
                      value={item.productName || ""}
                    />
                  </div>
                  <div className="py-4 inline-block mr-10 mb-5 xs:my-10">
                    <label
                      htmlFor="productPrice"
                      className="text-base font-bold"
                    >
                      Product Price
                    </label>
                    <input
                      type="text"
                      name="productPrice"
                      className="w-full bg-slate-200 text-dark p-3 rounded-lg focus:outline-sky-500 focus:ring-skay-500 focus:ring-1 focus:border-skay-500 text-center mr-10 mb-5"
                      onChange={(event) => handleChange(event, idx)}
                      value={item.productPrice || ""}
                    />
                  </div>
                  <div className="py-4 inline-block mr-10 mb-5 xs:my-10">
                    <label htmlFor="qty" className="text-base font-bold">
                      Qty
                    </label>
                    <input
                      type="text"
                      name="qty"
                      className="w-full bg-slate-200 text-dark p-3 rounded-lg focus:outline-sky-500 focus:ring-skay-500 focus:ring-1 focus:border-skay-500 text-center mr-10 mb-5"
                      onChange={(event) => handleChange(event, idx)}
                      value={item.qty || ""}
                    />
                  </div>
                  <div className="py inline-block mr-10 mb-5 xs:my-10">
                    <label htmlFor="total" className="text-base font-bold">
                      Total
                    </label>
                    <input
                      type="text"
                      name="total"
                      className="w-full bg-slate-200 text-dark p-3 rounded-lg focus:outline-sky-500 focus:ring-skay-500 focus:ring-1 focus:border-skay-500 text-center "
                      //   disabled
                      value={
                        isNaN(parseFloat(item.productPrice)) ||
                        isNaN(parseFloat(item.qty))
                          ? "Belum ada total atu QTY!"
                          : parseFloat(item.productPrice) *
                              parseFloat(item.qty) || item.total
                      }
                      onChange={handleChange}
                    />
                  </div>

                  <div className="py inline-block mr-10 ">
                    {input.length - 1 === idx && input.length !== 1 && (
                      <button
                        className="text-base font-semibold text-white bg-red-600 px-8 py-3 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                        onClick={() => handleDelete(idx)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  {input.length - 1 === idx && (
                    <div className="grand-total grid justify-items-stretch">
                      <input
                        type="text"
                        className="w-60 bg-slate-200 text-dark p-3 rounded-lg focus:outline-sky-500 focus:ring-skay-500 focus:ring-1 focus:border-skay-500 text-center justify-self-end mr-48"
                        value={item.total}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
