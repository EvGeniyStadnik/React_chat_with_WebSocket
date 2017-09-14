import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserItem from 'components/UserItem';
// import PeopleSearch from 'components/PeopleSearch';

class MessagesList extends Component {
  render() {
    console.log('props of MessagesList: ', this.props);
    const { people } = this.props;
    return (
      <div
        class="people-list"
        id="people-list">
        {/*<PeopleSearch />*/}
        <ul class="list">
          {people.map(user => {
            return(
              <UserItem key={user.id} userName={user.data}/>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peopleReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);