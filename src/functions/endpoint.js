export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.expandx.blupp.co" : "https://api.expandx.blupp.co"

}
