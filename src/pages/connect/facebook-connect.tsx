import React, { useRef, useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useFacebookAuthMutation } from "@framework/auth/use-facebook-auth";
import router from "next/router";

function FacebookConnect() {
    let authFbRef = useRef(null);
    const { mutate: authFacebook } = useFacebookAuthMutation();
    const [sdkLoaded, setSdkLoaded] = useState(false);
    async function handleFacebookAuth(e) {
        console.log(e);
        authFacebook({
            email: e?.email,
            avatar: e?.picture,
            name: e?.name,
            tokenId: e?.accessToken,
        });

    }
    useEffect(() => {
        if (sdkLoaded) {
            authFbRef.current.onClick();
        }
    }, [sdkLoaded]);
    return (
        <FacebookLogin
            appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_KEY}
            callback={handleFacebookAuth}
            // autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,email"
            onFailure={handleFacebookAuth}
            render={(renderProps) => {
                console.log(renderProps);
                authFbRef.current = renderProps;
                setSdkLoaded(renderProps.isSdkLoaded);
                return (
                    <div
                    // ref={(button) => (authFbRef.current = button)}
                    // onClick={renderProps.onClick}
                    ></div>
                );
            }}
        />
    );
}

export default FacebookConnect;
