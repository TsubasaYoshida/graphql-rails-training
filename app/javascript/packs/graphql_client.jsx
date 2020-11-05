import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

class GraphqlClient extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const query = `
      query GetArticles {
        articles {
          id
          title
          body
        }
      }
    `;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken();
    axios
      .post('/graphql', {
        query: query
      })
      .then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      });
  }

  render(){
    return (
      <button onClick={this.handleSubmit}>送信</button>
    );
  }
}

ReactDOM.render(
  <GraphqlClient />,
  document.getElementById('graphqlClient')
)
