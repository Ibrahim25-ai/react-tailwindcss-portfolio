import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
import {useTheme} from "../../ThemeContext";


const AppBanner = () => {

	const { theme } = useTheme();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="section flex flex-col sm:justify-between items-center sm:flex-row  "
		>
			<div className="w-full md:w-2/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className=" text-hero font-general-bold  text-center  sm:text-left leading-normal   text-ternary-dark dark:text-primary-light "
				>

					Hi, I&apos;m <span className=" text-custom-purple ">Ibrahim</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Software Engineer & Full-Stack Developer
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="CV_Ibrahim_BENLAKHAL.pdf"
						href="/files/CV_Ibrahim_BENLAKHAL.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-1/2 justify-center align-middle  sm:mt-0"
			>
				<img
					src={
						theme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
					className="small-image"
				/>

			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
