import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
// import { CSVLink, CSVDownload } from 'react-csv'
// import { Document, Page } from 'react-pdf';


class Employees extends Component {
  state = {
    posts: [],
    numPages: null,
    pageNumber: 1,
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts })
    })
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }


  render() {
    const { pageNumber, numPages } = this.state;
    const columns = [
        {
            Header: "",
            accessor: "title",
            sortable: false,
            filterable: false
          },
        {
        Header: "Code",
        accessor: "userId",
        style: {
          textAlign: 'center'
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Name",
        accessor: "id",
        style: {
          textAlign: 'center'
        },
        width: 200,
        maxWidth: 200,
        minWidth: 200
      },
      {
        Header: "Position",
        accessor: "title",
        sortable: false,
        filterable: false
      },
      {
        Header: "Birth Date",
        accessor: "body",
        sortable: false,
        filterable: false
      },
      {
        Header: "Gender",
        accessor: "body",
        sortable: false,
        filterable: false
      },
      {
        Header: "Status",
        accessor: "body",
        sortable: false,
        filterable: false
      },
      {
        Header: "Actions",
        Cell: props => {
          return (
            <div>
              <button className="btn btn-primary"
              // onClick={() => {
              //   this.deleteRow(props.original.id)
              // }}
              >Edit</button>
              <button className="mx-4 btn btn-danger"
              // onClick={() => {
              //   this.deleteRow(props.original.id)
              // }}
              >Delete</button>
            </div>

          )
        },
        sortable: false,
        filterable: false,
        width: 200,
        maxWidth: 200,
        minWidth: 200
      }
    ]
    return (
      <div className="App">
        <div className="row m-3">
          <div className="col-lg-4 col-sm-6 mr-auto">
          <p>Employees</p>
          </div>
          <div className="col-lg-4 col-sm-6 ml-auto">
          <Link className="btn btn-info" to="/user">Add New Employees</Link>
          </div>
        </div>
        
        <ReactTable
          ref={(r) => this.reactTable = r}
          columns={columns}
          data={this.state.posts}
          defaultFilterMethod={(filter, row) => String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
          filterable
          noDataText={"Data Loading..."}
          defaultPageSize={5}>
        </ReactTable>
        {/* <CSVLink data={this.state.posts}
          filename="data.csv"
          className="hidden btn btn-info"
          ref={(r) => this.csvLink = r}
          target="_blank"
        >Export To CSV</CSVLink> */}
        {/* <Document data={this.state.posts}
          onLoadSuccess={this.onDocumentLoadSuccess}
          className="hidden btn btn-info"
          filename="data.pdf"
          target="_blank"
        >Export To PDF
          <Page pageNumber={pageNumber} />
        </Document> */}
      </div>
    );
  }

}

export default Employees;
