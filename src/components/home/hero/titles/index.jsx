import { TypeAnimation } from "react-type-animation"

const Titles = ( props ) => {

    const { data } = props

    return (
        <div className="flex justify-center">

            <TypeAnimation
                sequence={[
                    'DIGITAL, WEB & TECH SOLUTIONS',
                    2000,
                    'FOR BUSINESS GROWTH',
                    2000,
                ]}
                wrapper="span"
                cursor={ true }
                repeat={ Infinity }
                className="!font-open_sans !font-extrabold !text-white !uppercase !text-3xl !text-center"
            />
        </div>
    )
}

export default Titles
