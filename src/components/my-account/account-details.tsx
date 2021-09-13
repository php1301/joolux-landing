import { UserProfile } from "@framework/types";
import { useState, FC } from "react";
import AccountEdit from "./account-edit";
import AccountInfo from "./account-info";

const AccountDetails: FC = () => {
    const [page, setPage] = useState(1);
    const [details, setDetails] = useState<UserProfile>();
    if (page === 1) {
        return <AccountInfo setPage={setPage} setDetails={setDetails} />;
    } else {
        return <AccountEdit setPage={setPage} details={details} />;
    }
};
export default AccountDetails;
