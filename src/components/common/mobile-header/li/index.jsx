// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index"

const Li = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="text-ex_light_blue font-open_sans font-medium text-lg uppercase">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>
    )

}

export default Li
