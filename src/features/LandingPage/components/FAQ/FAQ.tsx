import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQStyles.scss";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

interface IAccordion {
    heading: string;
    content: string;
}

export const FAQ = () => {

    return (
        <ScrollAnimation animateIn="zoomIn" className="mb_about_us-bottom">
            <h2 className="header">Frequently Asked Questions</h2>
            <div className="mb_about_us-bottom_questions">
                <FAQCard
                    heading="Who can use Mobilearning?"
                    content="An online learning website is a platform that provides educational content, such as courses, tutorials, and other resources, over the internet. Learners can access these materials from anywhere at any time."
                />
                <FAQCard
                    heading="What Feature Does Mobilearning Offer?"
                    content="An online learning website is a platform that provides educational content, such as courses, tutorials, and other resources, over the internet. Learners can access these materials from anywhere at any time."
                />
                <FAQCard
                    heading="How does the appointment feature work?"
                    content="An online learning website is a platform that provides educational content, such as courses, tutorials, and other resources, over the internet. Learners can access these materials from anywhere at any time."
                />
                <FAQCard
                    heading="How does the video conferencing feature work?"
                    content="An online learning website is a platform that provides educational content, such as courses, tutorials, and other resources, over the internet. Learners can access these materials from anywhere at any time."
                />
                <FAQCard
                    heading="Can Mobilearning Be Use For Personal and Group Purposes?"
                    content="An online learning website is a platform that provides educational content, such as courses, tutorials, and other resources, over the internet. Learners can access these materials from anywhere at any time."
                />
            </div>
        </ScrollAnimation>
    );
};



const FAQCard = (props: IAccordion) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const contentRef = useRef<null | HTMLParagraphElement>(null);

    const { heading, content } = props;

    return (
        <ScrollAnimation
            animateIn="fadeInUp"
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
        </ScrollAnimation>
    );
};

