import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./expensesAndBills.css";

const ExpensesAndBills = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser();
    actions.getExpenses();
    actions.getBills();
  }, []);

  const dateChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: exp.amount,
      date: e.target.value,
    };

    actions.modifyExpenses(exp.id, newExpense);
  };

  const billDateChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: exp.amount,
      date: e.target.value,
    };

    actions.modifyBills(exp.id, newExpense);
  };
  const detailsChange = (exp, e) => {
    const newExpense = {
      details: e.target.value,
      amount: exp.amount,
      date: exp.date,
    };

    actions.modifyExpenses(exp.id, newExpense);
  };

  const billDetailsChange = (exp, e) => {
    const newExpense = {
      details: e.target.value,
      amount: exp.amount,
      date: exp.date,
    };

    actions.modifyBills(exp.id, newExpense);
  };

  const amountChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: e.target.value,
      date: exp.date,
    };

    actions.modifyExpenses(exp.id, newExpense);
  };

  const billAmountChange = (exp, e) => {
    const newExpense = {
      details: exp.details,
      amount: e.target.value,
      date: exp.date,
    };

    actions.modifyBills(exp.id, newExpense);
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
          </div>
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
                        type="text"
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
                </tr>
              );
            })}
        </tbody>
      </table>

      <h1>Facturas de incidencias</h1>
      <div className="navbar row">
        {store.role.role_id == 1 ? (
          <div>
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
          {store.bills
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
                            billDetailsChange(exp, e);
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
                            billAmountChange(exp, e);
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
                        type="text"
                        defaultValue={exp.date}
                        className="form-control"
                        onKeyDown={(e) => {
                          if (e.keyCode == 13 || e.keyCode == 9) {
                            billDateChange(exp, e);
                          }
                        }}
                      ></input>
                    ) : (
                      exp.date
                    )}
                  </td>
                  <td>
                    <Link to={`/factura/${exp.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-receipt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </Link>
                  </td>
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
