import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import {connect} from "react-redux";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    }
}
const connectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default connectedExpenseList;


// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseListItem from './ExpenseListItem';
// import selectExpenses from '../store/expenses';
//
// const ExpenseList = (props) => (
//   <div>
//     <h1>Expense List</h1>
//     {props.expenses.map((expense) => {
//       return <ExpenseListItem key={expense.id} {...expense} />;
//     })}
//   </div>
// );
//
// const mapStateToProps = (state) => {
//   return {
//     expenses: selectExpenses(state.expenses, state.filters)
//   };
// };
//
// export default connect(mapStateToProps)(ExpenseList);
