import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-image.jpg";
import UserMenu from "./UserMenu";

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
