"use client";
import * as React from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Div } from "@/components/Div";
import { Button } from "@/components/Button";

import { BackDropShape } from "@/components/BackDropShape";

const Institutions = () => {
    return (
        <div className="bg-backgroundA elative flex flex-col zoom-out scroll-smooth">
            <Nav />
            <main className="flex flex-col space-y-4 sm:space-y-16">
                <section className="bg-white w-full h-full grid sm:grid-cols-2 justify-items-center gap-4 sm:gap-16 px-4 sm:px-24 py-4 sm:py-24" id="partnerWithUs">

                    <header className="flex flex-col gap-4 sm:gap-8">
                        <h1 className="text-primary text-xl sm:text-3xl sm:leading-tight font-bold">Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution</h1>
                        <p className="text-secondary text-md sm:text-lg leading-8">We partner with Universities, Schools, and Trainining Institutions to build the work experience of their students and trainees through project based learning challenges and hackathons.</p>

                        <Button classNames="w-full sm:w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Partner With Us" />

                    </header>

                    <Image
                        aria-hidden
                        src={`/institution_banner.png`}
                        alt={`Hero banner`}
                        layout="responsive"
                        width={200}
                        height={200}
                        className={`object-cover`}
                        priority
                    />

                </section>

                <section className="bg-backgroundA w-full h-full grid  sm:grid-row-3 justify-items-center gap-4 sm:gap-16 px-4 sm:px-32" id="offerings">

                    <div className="flex flex-col text-center">
                        <h1 className="text-secondary text-xl sm:text-3xl sm:leading-tight font-bold">Key Offerings & Benefits:
                        </h1>
                    </div>

                    <div className="grid sm:grid-row-2 gap-2 sm:gap-4">

                        <div className="grid sm:grid-cols-3 gap-2 sm:gap-4">
                            <Div
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Employability and Career Development Opportunities"
                                desc="Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes." />
                            <Div
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Practical Application of Classroom Knowledge"
                                desc="The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses." />

                            <Div
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Students & Trainees Engagement"
                                desc="Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey." />
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 rounded-md">

                            <div className="grid sm:col-span-2">
                                <Div
                                    icon="/briefcase.png"
                                    iconWidth={24}
                                    iconHeight={24}
                                    title="Access to the Industry Experts & Mentors"
                                    desc="Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.." />
                            </div>

                            <div>
                                <Div
                                    icon="/briefcase.png"
                                    iconWidth={24}
                                    iconHeight={24}
                                    title="Skills Assessments"
                                    desc="Embed our projects based tests and skills assessments directly into your curriculum." />
                            </div>
                        </div>

                    </div>

                </section>

                <section className="bg-background w-full h-full grid sm:grid-row-2 gap-8 sm:gap-16 justify-items-center px-4 sm:px-24 py-4 sm:py-8" id="partners">
                    <div className="text-left sm:text-center w-full sm:w-3/4">
                        <h1 className="text-xl sm:text-3xl sm:leading-tight font-bold">Join a few Educational Institutions using Skills Challenges by Umurava</h1>
                    </div>

                    <div className="flex flex-row flex-wrap sm:justify-center gap-4 sm:gap-12">
                        {["Tori 1.png", "Gdg_Kigali 1.png", "EducationCollaborative 2.png", "KeplerLogo 1.png", "HiiL_Logo 1.png", "CIBA 1.png", "Ared 1.png", "IGIHE_LOGO 1.png", "EducationCollaborative 1.png", "HiiL_Logo 2.png", "SokoFund 1.png"].map((logo, index) => (
                            <Image
                                className="object-contain h-12 w-12 sm:h-24 sm:w-24"
                                key={index}
                                aria-hidden
                                src={`/${logo}`}
                                alt={`Institution logo`}
                                // layout="responsive"
                                width={140}
                                height={60}
                                priority
                            />
                        ))}
                    </div>

                </section>

                <section className="bg-backgroundA w-full h-full grid gap-4 sm:gap-16 sm:grid-row-2 justify-items-center px-4 sm:px-24 py-4 sm:py-8" id="participate">
                    <div className="flex flex-col items-center justify-center sm:text-center w-full sm:w-3/4 gap-4 sm:gap-8">
                        <h1 className="text-xl sm:text-4xl sm:leading-tight font-bold">How Skills Challenges Program can Be Integrated into your Learning Institution</h1>

                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                        <div className="space-y-4 sm:space-y-6">
                            {[{ pos: 1, desc: "As Career Development and Job Readiness Program" }, { pos: 2, desc: "As Skills Assessments Method after a course or a term" }, { pos: 3, desc: "As extracurricular activities to complement academic courses" }, { pos: 4, desc: "As the portfolio of the Students" }, { pos: 5, desc: "As part of Capstone Projects or final-year assignments" }].map((item, index) => (
                                <div key={index} className="relative flex gap-4 items-center">
                                    <button className={`absolute top-0 left-0 h-6 sm:w-10 w-6 sm:h-10 bg-primary text-white rounded-full`}>
                                        {item.pos}
                                    </button>
                                    <p className="pl-10 sm:pl-14 sm:pt-2 -mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Image
                                aria-hidden
                                src={`/banner_img1.png`}
                                alt={`Hero banner`}
                                layout="responsive"
                                width={200}
                                height={200}
                                className={`object-cover`}
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white py-4 sm:py-16 px-4 sm:px-24">
                    <div className="relative bg-primary grid sm:grid-cols-1 gap-4 sm:gap-8 justify-items-center text-white rounded-lg p-4 sm:p-8">
                        <h1 className="text-xl sm:text-2xl font-bold">Ready to transform your learning institution?</h1>

                        <Button classNames="w-full sm:w-[200px] bg-white text-primary sm:text-sm p-2 sm:p-3 rounded-md" label={`Let's partner`} onClick={() => console.log("router.push('/hackathons')")} />

                        <BackDropShape type="two" />

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Institutions;