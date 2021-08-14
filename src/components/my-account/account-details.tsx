import { useState, FC } from "react";
import AccountEdit from "./account-edit";
import AccountInfo from "./account-info";

const AccountDetails: FC = () => {
    const [page, setPage] = useState(1);
    if (page === 1) {
        return <AccountInfo setPage={setPage} />;
    } else {
        return <AccountEdit setPage={setPage} />;
    }
};
export default AccountDetails;
