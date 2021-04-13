import { Route } from "react-router";
import NavigationBarComp from "../../components/NavigationBarComp/NavigationBarComp";
import UserTableComp from "../../components/UserTable/UserTableComp";
import AddUserComp from "../../components/AddUserComp/AddUserComp";
import AboutUsComp from "../../components/AboutUsComp/AboutUsComp";

const MainPage = () => {
    return (
        <div>
            <NavigationBarComp />
            <Route path="/" exact render={() => <UserTableComp />} />
            <Route path="/addUser" exact component={AddUserComp} />
            <Route path="/aboutUs" exact component={AboutUsComp} />
        </div>
    );
};

export default MainPage;
