// // NOTE: this file is only necessary for bonus objective #1
// import React from 'react'

// const authorEndpoint =
//   "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json";

// // make a GET request to the above endpoint to get author data
// export default class fetchAuthorData extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       authors: []
//     };
//   }

//   componentDidMount() {
//     fetch(authorEndpoint)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             authors: result.authors
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, authors } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {authors.map(author => (
//             <li key={author.name}>
//               {author.name}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

