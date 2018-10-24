// import statements needed to render
// import React from 'react';
// import ReactDOM from 'react-dom';
// to create components
// import PropTypes from 'prop-types';

// using jsx and arrow functions
// const variableName = (parameters) => {
//     return(
//         jsx{parameters}
//     );
// };

// ReactDOM.render(
//     variableName(parameters),
//     whereYouWantToPutIt -- usually document.getElementById('idName')
// );


// MAKE THE FOLLOWING TABLE

// Artist          Song            Year
// Madonna         Vogue           1990
// Ace of Base     The Sign        1994
// 2Pac            California Love 1996
// Hanson          MMMBop          1997
// Cher            Believe         1999



// Now let's do the above using a component and prop types




// Let's look at the component below and review the state changes made on the component
// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = props => {
//   return <BankAccount />;
// };

// class BankAccount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       accountBalance: 2222.22,
//       addAmount: 0
//     };
//   }

//   increment() {
//     this.setState({
//       accountBalance: this.state.accountBalance + parseInt(this.state.addAmount)
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3>Account Balance: ${this.state.accountBalance}</h3>
//         <input
//           type="number"
//           onChange={event => this.setState({ addAmount: event.target.value })}
//           value={this.state.addAmount}
//         />
//         <button onClick={this.increment.bind(this)}>Increase Amount</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));