import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts })
    })
  }



  render() {
    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
        style: {
          textAlign: 'center'
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "ID",
        accessor: "id",
        style: {
          textAlign: 'center'
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: false,
        filterable: false
      },
      {
        Header: "Content",
        accessor: "body",
        sortable: false,
        filterable: false
      },
      {
        Header: "Actions",
        Cell: props => {
          return (
            <button className="btn btn-danger"
              onClick={() => {
                this.deleteRow(props.original.id)
              }}
            >Delete</button>
          )
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ]
    return (
      <div className="App">
        <h1>Dealing with react tables</h1>

        <ReactTable
          columns={columns}
          data={this.state.posts}
          filterable
          noDataText={"Data Loading..."}
          defaultPageSize={10}
        >

        </ReactTable>
      </div>
    );
  }

}

export default App;
