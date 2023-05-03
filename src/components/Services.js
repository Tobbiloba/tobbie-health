import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


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
    },
    {
        "id": 6,
        "section": "adult",
        "question": "What are the risk factors for age-related macular degeneration?",
        "answer": "The risk factors for age-related macular degeneration (AMD) include age (being over 60 years old), smoking, having a family history of AMD, being female, and having light-colored eyes."
    },
    {
        "id": 7,
        "section": "child",
        "question": "What is congenital cataract?",
        "answer": "Congenital cataract is a type of cataract that is present at birth or develops in the first few months of life. It can be caused by genetic factors, infections during pregnancy, or other medical conditions."
    },
    {
        "id": 8,
        "section": "adult",
        "question": "What are the common causes of dry eye?",
        "answer": "Dry eye can be caused by a variety of factors, including aging, hormonal changes (such as menopause), certain medications, environmental factors (such as dry or windy conditions), and medical conditions such as rheumatoid arthritis and Sjogren's syndrome."
    },
    {
        "id": 9,
        "question": "What is amblyopia?",
        "answer": "Amblyopia, also known as lazy eye, is a vision development disorder in which an eye fails to achieve normal visual acuity, even with prescription eyeglasses or contact lenses. This can occur if one eye is weaker than the other or if there is a misalignment in the eyes.",
        "section": "child"
    },
    {
        "id": 10,
        "question": "What is glaucoma?",
        "answer": "Glaucoma is a group of eye conditions that damage the optic nerve, which is essential for good vision. This damage is often caused by an abnormally high pressure in the eye. Without treatment, glaucoma can lead to permanent vision loss.",
        "section": "adult"
    },
    {
        "id": 11,
        "question": "What is retinal detachment?",
        "answer": "Retinal detachment is a medical emergency in which the retina, a layer of tissue at the back of the eye, pulls away from its normal position. This can cause permanent vision loss if not treated promptly. Symptoms include a sudden increase in floaters, flashes of light, and a curtain-like shadow over your visual field.",
        "section": "adult"
    },
    {
        "id": 12,
        "question": "What is diabetic retinopathy?",
        "answer": "Diabetic retinopathy is a complication of diabetes that affects the eyes. It occurs when high blood sugar levels damage the blood vessels in the retina, which can lead to vision loss if left untreated. Symptoms include blurred vision, floaters, and difficulty seeing at night.",
        "section": "adult"
    },
    {
        "id": 13,
        "question": "What is color blindness?",
        "answer": "Color blindness is a condition in which a person is unable to distinguish certain colors or perceive them at all. It is usually an inherited condition that affects more men than women. There are several types of color blindness, but the most common type involves difficulty distinguishing between red and green.",
        "section": "adult"
    },
    {
        "id": 14,
        "question": "What is macular degeneration?",
        "answer": "Macular degeneration is a common eye disease that affects the macula, a part of the retina that is responsible for central vision. It is usually age-related and can cause a loss of central vision, which is needed for activities such as reading and driving.",
        "section": "adult"
    },
    {
        "id": 15,
        "question": "What is cataract?",
        "answer": "A cataract is a clouding of the natural lens in the eye, which can cause blurry vision, glare, and halos around lights. It is usually an age-related condition, but it can also be caused by injury, certain medications, or underlying health problems.",
        "section": "adult"
    },
    {
        "id": 16,
        "question": "What is strabismus?",
        "answer": "Strabismus is a condition in which the eyes do not align properly. It can cause double vision, amblyopia, and difficulty with depth perception. Treatment may involve glasses, vision therapy, or surgery.",
        "section": "adult"
    },
]

function Services() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('all');
    const [isTrue, setIsTrue] = useState(false);

    const fetchData = (filt) => {
        const filtered = questions.filter((item) => item.section === filt);
        setData(filtered);
    };

    const handleFilterClick = (value) => {
        setFilter(value);
    };



    const handleButtonClick = () => {
        setIsTrue(true);
        setTimeout(() => setIsTrue(false), 5000); // Set isTrue to false after 5 seconds
    };

    useEffect(() => {
        // handleButtonClick()
        if (filter === 'all') {
            setData(questions);
        } else {
            fetchData(filter);
        }
    }, [filter, questions]);

    console.log(data);

    return (
        <div className='bg-white flex flex-col px-6 lg:px-[7.5vw] pt-12 pb-10 md:px-[7vw]'>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='text-2xl font-bold text-slate-600 flex justify-center'>
                        <h1>Services</h1>
                    </div>
                    <div className=' mt-6 lg:ml-20 lg:w-[450px]'>
                        <div>
                            <h1 className='text-[16px] flex text-center leading-4 lg:font-medium justify-center font-bold lg:text-5xl lg:text-slate-500 lg:justify-normal lg:text-left '>Excellent services of our clinic</h1>
                        </div>
                        <div className='flex flex-row justify-between md:justify-start mt-7'>
                            <button className={` px-5 rounded-2xl md:mr-6  py-2 ${filter === 'all' ? 'bg-blue-500 text-white' : ' border border-blue-500 text-blue-500'}`} onClick={() => handleFilterClick('all')}
                            >All</button>
                            <button className={` px-5 rounded-2xl md:mr-6  py-2 ${filter === 'adult' ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500'}`} onClick={() => handleFilterClick('adult')}
                            >For adults</button>
                            <button className={` px-5 rounded-2xl  py-2 ${filter === 'child' ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500'}`} onClick={() => handleFilterClick('child')}
                            >For children</button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <ArrowRightIcon /> */}
                </div>
            </div>
            <div className='mt-12'>
                {/* Loader */}
                <div className={`bg-whitepy-12 ${isTrue ? 'flex justify-center items-center' : 'hidden'}`}>

                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>

                {/* Dropdown */}
                <div className={`bg-white ${!isTrue ? 'flex flex-col' : 'hidden'}`}>
                    {data.map((item) => {
                        return (
                            <div key={item.id} className='mb-6 lg:mb-12'>
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
export default Services;