import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUsers } from   '../../actions/actions_user'


class UsersIndex extends Component {

componentDidMount(){
  this.props.fetchUsers();
}
renderUsers(){
return _.map(this.props.users, user=>{
  return (
    <li className="list-group-item" key={user.id}>
      <Link to={`/users/${user.id}`}>
        {user.name}
      </Link>
    </li>
  )
})

}
render(){
  return(
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/users/new">
          Add a User
        </Link>
      </div>
      <h3>Users</h3>
      <ul className="list-group">
        {this.renderUsers()}
      </ul>
    </div>
  )}
}
function mapStateToProps(state){
  return { users: state.users };
}
export default connect (mapStateToProps,{ fetchUsers })(UsersIndex);
