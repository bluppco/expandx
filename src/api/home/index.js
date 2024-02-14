import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        about : "",
        services : "",
        specific_service : "",
        ongoing_projects : "",
        services_packs : "",
        image_banner : "",
        reviews_and_clients : "",
        projects_coverage : "",
        clients : "",
        portfolio : "",
        reviews : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "about" )
            home_data.about = data
        else if ( data.slug === "services" )
            home_data.services = data
        else if( data.slug === "specific-service" )
            home_data.specific_service = data
        else if ( data.slug === "ongoing-projects" )
            home_data.ongoing_projects = data
        else if( data.slug === "services-packs" )
            home_data.services_packs = data
        else if ( data.slug === "image-banner" )
            home_data.image_banner = data
        else if( data.slug === "reviews-and-clients" )
            home_data.reviews_and_clients = data
        else if ( data.slug === "projects-coverage" )
            home_data.projects_coverage = data
        else if ( data.slug === "clients" )
            home_data.clients = data
        else if( data.slug === "portfolio" )
            home_data.portfolio = data
        else if ( data.slug === "reviews" )
            home_data.reviews = data

    })

    return { home_data, meta }

}
