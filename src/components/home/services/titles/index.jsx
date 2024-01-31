import { TypeAnimation } from "react-type-animation"

const Titles = () => {

    return (
        <div className="flex justify-center">
            <TypeAnimation
                sequence={[
                    'We execute Marketing Strategies',
                    2000,
                    'We execute Marketing Strategies',
                    2000,
                    "We execute Marketing Strategies",
                    2000,
                    'We execute Marketing Strategies',
                    2000,
                ]}
                wrapper="span"
                cursor={ true }
                repeat={ Infinity }
                className="!font-open_sans !font-extrabold !text-ex_blue !text-4xl !text-center"
            />
        </div>
    )
}

export default Titles
