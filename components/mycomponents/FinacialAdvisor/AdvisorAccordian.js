import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

const AdvisorAccordian = () => {
    const data = [
        {
            id: 1,
            title: "What harsh truths do you prefer to ignore?", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa."
        },
        {
            id: 2,
            title: "Is free will real or just an illusion?", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa."
        },
        {
            id: 3,
            title: "Is there a meaning to life? If so, what is it?", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa."
        },
    ];
    return (
        <Accordion>
            {data.map((item, index) => (
                <AccordionItem key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader className={`${open ? 'bg-orange-600 text-white' : 'bg-white'} p-3 w-[100%] md:w-[100%] lg:w-[100%] flex justify-start items-center gap-3 mb-2`}>
                                    {!open ? <FaPlus /> : <FaMinus />}
                                    <h3 className={`accordion-title ${open ? 'accordion-active' : ''} text-start`}>{item.title}</h3>
                                
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body w-[100%] md:w-[100%] lg:w-[100%] border-[1px] p-3 border-orange-500">
                                    {item.content}
                                </div>
                            </AccordionBody>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AdvisorAccordian;