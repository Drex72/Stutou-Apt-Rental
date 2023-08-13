import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQStyles.scss";
import { motion } from "framer-motion";

interface IAccordion {
    heading: string;
    content: string;
}

export const FAQ = () => {

    return (
        <div className="mb_about_us-bottom">
            <h2 className="header">Frequently Asked Questions</h2>
            <div className="mb_about_us-bottom_questions">
                <FAQCard
                    heading="How does the platform work?"
                    content="Our platform allows you to search and book accommodations in Aberdeen. Simply enter your desired location, dates, and other preferences, and browse through the available listings. Once you find the perfect accommodation, you can book it securely through our platform."
                />
                <FAQCard
                    heading="Are the listings on the platform verified?"
                    content="Yes, we ensure that all the listings on our platform are verified and meet our quality standards. Our team reviews each listing to ensure authenticity and reliability."
                />
                <FAQCard
                    heading="Can I cancel or modify my booking?"
                    content="Cancellation and modification policies may vary depending on the specific accommodation you book. We recommend reviewing the cancellation policy of the accommodation before making a booking. You can typically find this information on the accommodation's listing page."
                />
                <FAQCard
                    heading="Is there a fee for using the platform?"
                    content="Our platform is free to use for users searching and browsing accommodations. However, please note that there may be booking fees or charges associated with specific accommodations or services."
                />
                <FAQCard
                    heading="What happens if I need assistance during my stay?"
                    content="We have a dedicated customer support team available to assist you. If you encounter any issues or have questions during your stay, simply reach out to our support team, and they will be happy to help."
                />
            </div>
        </div>
    );
};



const FAQCard = (props: IAccordion) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const contentRef = useRef<null | HTMLParagraphElement>(null);

    const { heading, content } = props;

    return (
        <div
            // animateIn="fadeInUp"
            className="mb_frequently_asked_question"
        >
            <div
                className={`mb_frequently_asked_question_top ${menuOpened ? "is_open" : ""
                    }`}
                onClick={() => setMenuOpened(!menuOpened)}
            >
                <div className="header">{heading}</div>
                <IoIosArrowUp className={`icon ${menuOpened ? "icon_up" : ""}`} />
            </div>

            <div
                ref={contentRef}
                className="text_container"
                style={{
                    maxHeight: menuOpened
                        ? contentRef.current?.scrollHeight + "px"
                        : "0px",
                    overflow: "hidden",
                }}
            >
                <motion.p
                    className={`text ${menuOpened}`}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    {content}
                </motion.p>
            </div>
        </div>
    );
};

