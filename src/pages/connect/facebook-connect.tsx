import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useFacebookAuthMutation } from "@framework/auth/use-facebook-auth";

function FacebookConnect() {
    const { mutate: authFacebook } = useFacebookAuthMutation();
    async function handleFacebookAuth(e) {
        console.log(e);
        authFacebook({
            email: e?.email,
            avatar: e?.picture,
            name: e?.name,
            tokenId: e?.accessToken,
        });
    }
    return (
        <FacebookLogin
            appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_KEY}
            onSuccess={handleFacebookAuth}
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,email"
            onFail={handleFacebookAuth}
            style={{
                color: "transparent",
            }}
        />
    );
}

export default FacebookConnect;
