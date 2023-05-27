import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
const FAQ = () => {
    const questions = [
        {
            "id": 1,
            "section": "child",
            "question": "What are the most common causes of vision problems in children?",
            "answer": "The most common causes of vision problems in children are refractive errors (nearsightedness, farsightedness, and astigmatism), amblyopia (lazy eye), and strabismus (crossed or misaligned eyes)."
        },
        {
            "id": 2,
            "section": "adult",
            "question": "What are the symptoms of glaucoma?",
            "answer": "The symptoms of glaucoma can include blurred vision, eye pain, redness in the eye, halos around lights, and tunnel vision. However, in many cases, glaucoma has no symptoms until it has progressed significantly."
        },
        {
            "id": 3,
            "section": "child",
            "question": "What is amblyopia (lazy eye)?",
            "answer": "Amblyopia, commonly known as lazy eye, is a condition in which one eye has reduced vision because the brain has learned to favor the other eye. This can happen if one eye is misaligned or if there is a difference in prescription between the two eyes."
        },
        {
            "id": 4,
            "section": "adult",
            "question": "What are the common causes of cataracts?",
            "answer": "Cataracts are most commonly caused by aging, but can also be caused by injury, certain medications, and other medical conditions such as diabetes."
        },
        {
            "id": 5,
            "section": "child",
            "question": "What is strabismus?",
            "answer": "Strabismus is a condition in which the eyes are not aligned properly. This can cause double vision or the brain to ignore the input from one eye, leading to amblyopia (lazy eye). Strabismus can be caused by problems with the eye muscles, the nerves that control the muscles, or the brain."
        }
    ]
    const [isTrue, setIsTrue] = useState(false);
    return (
        <div className="bg-white lg:px-[7.5vw] px-6 md:px-[7vw] py-6">
            <div>
                <h1 className='text-xl font-mono font-bold text-center'>FAQ</h1>
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className='text-2xl font-mono'>Questions from <br /> our clients</h1>
                </div>
                <div className={`bg-white mt-6 flex flex-col `}>
                    {questions.map((item) => {
                        return (
                            <div key={item.id} className='mb-6 lg:mb-12 lg:w-[75vw]'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"

                                    >
                                        <Typography className=" md:font-bold md:px-5 lg:py-4"><span className="md:text-xl lg:text-xl lg:text-slate-700 lg:font-bold">{item.question}</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='text-slate-400 border md:px-8 lg:py-6 border-white border-t-slate-400 pt-2 lg:px-16'>
                                            <span className="md:text-[16px] lg:text-[18px] ">{item.answer}</span>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default FAQ;