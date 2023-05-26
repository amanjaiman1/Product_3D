import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Hero = ({props}) => {
    const snap = useSnapshot(state);

    return (   
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <div className="up">
                       
                        </div>
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                        
                            <div className={props && props.isActive ? 'head-text' : 'head-text-dark'}>
                            <h1 className="max-sm:text-[70px]" >
                            LET'S <br className="xl:block hidden" /> DO IT.
                            </h1>
                            </div>
                        
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p>
                                Create your unique and exlusive shirt with our
                                brand-new 3D customization tool.
                                <strong> Unleash your imagination</strong>
                                {" "} and define your own style.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />

                        </motion.div>
                    </motion.div>

                </motion.section>
            )}
        
        </AnimatePresence>
    )
}

export default Hero