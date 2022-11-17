import React, { Suspense } from "react";
import { Route,Routes, useLocation,Navigate } from "react-router-dom";

// import ErrorBoundary from "../../components/React/ErrorBoundary/ErrorBoundary";
import FallbackLoader from "../../components/React/FallbackLoader/FallbackLoader";

// interface RenderRouteProps extends RouteProps, CustomRoute {}

// const RenderRoute: React.FC<CustomRoute> = props => {
//     const { component } = props;
//     const Component: React.ComponentType<RenderRouteProps> = component!
    
//     return (
//         <Route render={(routerProps: RouteProps) => <ErrorBoundary><Component {...routerProps} {...props} /></ErrorBoundary>}
//         />
//     );
// };

const PrivateRoute = (props: PrivateRouteProps & {redirectPath?: RouteRedirectProps, animate?: boolean}) => {
    const location = useLocation();
    const { appRoutes, redirectPath } = props;
    
    return (
        <Suspense fallback={<FallbackLoader />}>
            <Routes location={location}>
                {appRoutes.map((route, index) => (
                    // <RenderRoute key={index} {...route} />
                    <Route path= {route?.path} key={index} element= {<route.component/>}/>
                ))}
                {redirectPath?.length && redirectPath.map((path, index) => (
                    // path && <Navigate to={path.to} from={path.from} key={index} />
                    <Route path={path?.from} element={<Navigate replace to={`${path?.to}`} key={index}/>} />
                ))}
            </Routes>
        </Suspense>
    )
};

export default PrivateRoute;