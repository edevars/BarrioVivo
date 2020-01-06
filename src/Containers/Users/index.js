import { useEffect } from "react";
import SettingsTable from "../../Components/SettingsTable";
import { connect } from "react-redux";
import { getAllUsers } from "../../redux/actions/usersActions";

const UserActions = { getAllUsers };

const Users = ({ users, getAllUsers }) => {
  useEffect(() => {
    if (users.length === 0) {
      getAllUsers();
    }
  }, []);

  return <SettingsTable items={users} />;
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, UserActions)(Users);
