import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./expensesAndBills.css";

const ExpensesAndBills = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser();
    actions.getCommunity();
    actions.getExpenses();
  }, []);

  console.log(store.expenses);

  const dateChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: exp.amount,
      date: e.target.value,
    };
    actions.modifyExpenses(exp.id, newExpense);
  };

  const detailsChange = (exp, e) => {
    const newExpense = {
      details: e.target.value,
      amount: exp.amount,
      date: exp.date,
    };

    actions.modifyExpenses(exp.id, newExpense);
  };

  const amountChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: e.target.value,
      date: exp.date,
    };

    actions.modifyExpense(exp.id, newExpense);
  };

  const deleteExp = (expense_id) => {
    actions.deleteExpense(expense_id);
  };

  const search = (e) => {
    const inc_search = e.target.value;
    if (inc_search === "") {
      actions.getIncidents();
    } else {
      const filteredList = store.incident_copy.filter((incident) => {
        const description = incident.description.toLowerCase();
        if (description.indexOf(inc_search.toLowerCase()) >= 0) {
          return incident;
        }
      });
      console.log(filteredList);
      actions.setIncidents(filteredList);
      console.log(store.incidents);
    }
  };

  return (
    <div className="container-fluid m-auto mt-5 content">
      <h1>Gastos de la comunidad</h1>
      <div className="navbar row">
        {store.role.role_id == 1 ? (
          <div>
            <Link
              className="btn btn-secondary col-2 mx-4 add"
              to="/formNuevoGasto"
            >
              Añadir gasto
            </Link>
            <Link
              className="btn btn-secondary col-2 mx-4 add"
              to="/formNuevaFactura"
            >
              Añadir factura
            </Link>
          </div>
        ) : (
          ""
        )}
        {store.role.role_id == 2 ? (
          <form className="form-inline col-5 offset-md-7">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => search(e)}
            />
          </form>
        ) : (
          ""
        )}
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Concepto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {store.expenses
            .filter((expense) => expense.community_id == store.community)
            .map((exp, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {store.role.role_id == 1 ? (
                      <input
                        defaultValue={exp.details}
                        className="form-control"
                        onKeyDown={(e) => {
                          if (e.keyCode == 13 || e.keyCode == 9) {
                            detailsChange(exp, e);
                          }
                        }}
                      ></input>
                    ) : (
                      exp.details
                    )}
                  </td>
                  <td>
                    {store.role.role_id == 1 ? (
                      <input
                        defaultValue={exp.amount}
                        className="form-control"
                        onKeyDown={(e) => {
                          if (e.keyCode == 13 || e.keyCode == 9) {
                            amountChange(exp, e);
                          }
                        }}
                      ></input>
                    ) : (
                      exp.amount
                    )}
                  </td>

                  <td>
                    {store.role.role_id == 1 ? (
                      <input
                        type="date"
                        defaultValue={exp.date}
                        className="form-control"
                        onKeyDown={(e) => {
                          if (e.keyCode == 13 || e.keyCode == 9) {
                            dateChange(exp, e);
                          }
                        }}
                      ></input>
                    ) : (
                      exp.date
                    )}
                  </td>
                  {store.role.role_id == 1 ? (
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                        onClick={() => deleteExp(exp.id)}
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>

      <ul className="pagination float-end" hidden>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ExpensesAndBills;
