import Title from "../../../component/title/Index";
import UserTableList from "./UserTableList";

const User = () => {
    return (
        <div>
            <Title title={'Users List'} />
            <UserTableList />
        </div>
    );
};

export default User;