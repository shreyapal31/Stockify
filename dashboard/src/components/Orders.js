import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3004/allOrders")

      .then((res) => {

        setAllOrders(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <div className="orders">

      {allOrders.length === 0 ? (

        <div className="no-orders">

          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>

        </div>

      ) : (

        <>

          <h3 className="title">
            Orders ({allOrders.length})
          </h3>

          <div className="order-table">

            <table>

              <tbody>

                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>

                {allOrders.map((order, index) => {

                  return (

                    <tr key={index}>

                      <td>{order.name}</td>

                      <td>{order.qty}</td>

                      <td>{order.price}</td>

                      <td
                        className={
                          order.mode === "BUY"
                            ? "profit"
                            : "loss"
                        }
                      >
                        {order.mode}
                      </td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>

        </>

      )}

    </div>

  );
};

export default Orders;