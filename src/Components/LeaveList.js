import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class LeaveList extends Component {
    state = {
        posts: [],
        numPages: null,
        pageNumber: 1,
        leaveStatus: ""
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

    onLeaveApprove() {
        this.setState({
            leaveStatus: "Approved!"
        })
    }
    onLeaveReject() {
        this.setState({
            leaveStatus: "Rejected!"
        })
    }


    render() {
        const columns = [
            {
                Header: "Employee Name",
                accessor: "title",
                sortable: false,
                filterable: false
            },
            {
                Header: "Code",
                sortable: false,
                filterable: false,
                accessor: "userId",
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Position",
                accessor: "id",
                sortable: false,
                filterable: false,
                style: {
                    textAlign: 'center'
                },
                width: 200,
                maxWidth: 200,
                minWidth: 200
            },
            {
                Header: "Leave Status",
                accessor: "title",
                sortable: false,
                filterable: false
            },
            {
                Header: "Duration",
                accessor: "body",
                sortable: false,
                filterable: false
            },
            {
                Header: "Actions",
                Cell: props => {
                    const admin = {
                        username: "useradmin@techsavvyng.com",
                        password: "admin"
                    }

                    if (admin.username === "admin@techsavvyng.com" && admin.password === "admin") {
                        return (
                            <div>
                                <div>
                                    <Link to="/details" className="m-1 btn btn-primary"
                                        onClick={() => {
                                            this.deleteRow(props.original.id)
                                        }}
                                    >Approve</Link>
                                    <Link to="/details" className="m-1 btn btn-danger"
                                    // onClick={() => {
                                    //   this.deleteRow(props.original.id)
                                    // }}
                                    >Reject</Link>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <Link to="/details" className="m-1 btn btn-primary"
                                // onClick={() => {
                                //   this.deleteRow(props.original.id)
                                // }}
                                >Details</Link></div>
                        )

                    }
                },
                sortable: false,
                filterable: false,
                width: 400,
                maxWidth: 400,
                minWidth: 400
            }
        ]
        return (
            <div className="App">
                <div className="row m-3">
                    <div className="col-lg-4 col-sm-6 mr-auto">
                        <p>Employee Leave Request</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 ml-auto">
                        <Link className="btn btn-info" to="/create-leave">New Leave Request</Link>
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
            </div>
        );
    }

}

export default LeaveList;
