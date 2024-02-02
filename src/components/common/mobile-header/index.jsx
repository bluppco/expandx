// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS USESTATE
import { useState } from "react"

// IMPORTS COMPONENTS
import Li from "./li/index"

const HeaderMobile = ( props ) => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-black px-6 py-4 fixed top-24 z-20 w-full border-b border-b-ex_ocean_blue">
            <div className="flex justify-between items-center z-20">
                <a href="/">
                    <div className="h-10 w-32">
                        <img
                            src="/logo/expandx-logo.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/close.svg"
                            className="w-6 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

                    }
                </div>
            </div>
            <AnimatePresence initial={false}>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className={`${ isOpen ? "z-10" : "hidden"} flex flex-col gap-1 items-center justify-center h-full`}>
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <Li href="/" aria_label="">Home</Li>
                                <Li href="/services" aria_label="">Services</Li>
                                <Li href="/clients" aria_label="">Clients</Li>
                                <Li href="/portfolio-of-expandx" aria_label="">Portfolio</Li>
                                <Li href="/clients" aria_label="">Reviews</Li>
                                <Li href="/team" aria_label="">Team</Li>
                                <Li href="/blog" aria_label="">Blog</Li>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
