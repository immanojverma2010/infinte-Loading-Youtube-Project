import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, deleteUser } from "../../actions/actions_user";

class UsersShow extends Component {
componentDidMount(){
  const { id } = this.props.match.params;
  this.props.fetchUser(id);
}

onDeleteClick(){
  const { id } = this.props.match.params;

  this.props.deleteUser(id, () => {
    this.props.history.push("/");
  });
}
  render(){
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete User
        </button>
        <h3>{user.username}</h3>
        <h6> Name: {user.name}</h6>
        <h6> Email: {user.email}</h6>
        <h6> COntact: {user.phone}</h6>
        <h6> website: {user.website}</h6>
        <h6> Address: <p>{user.address.street}{user.address.suite}{user.address.city}{user.address.zipcode}</p></h6>
        <h6> website: {user.company.name}</h6>
      </div>
    );
  }

}

function mapStateToProps({ users }, ownProps) {
  return {
user: users[ownProps.match.params.id]
  };
}

const mapDispatchtoProps = { fetchUser, deleteUser };

export default connect (mapStateToProps, mapDispatchtoProps)(UsersShow);
