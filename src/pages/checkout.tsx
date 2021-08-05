import { Layout } from "@components/layout/layout";
import { NextPage } from "next";
import React from "react";

const Checkout: NextPage & { Layout: typeof Layout } = () => {
    return <h2>Checkout</h2>;
};

Checkout.Layout = Layout;
export default Checkout;
