"use client";

import * as React from "react";
import { Button } from "./Button";
import Select from "react-select";
import { getSkills } from "@/apis";
import { useQuery } from "@tanstack/react-query";

import { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { useRouter } from "next/navigation";
import { ChallengeFormComponentProps, CustomChangeEvent, OptionType } from "@/@types/global";

const seniorityOptions = [
    {
        "value": "Intermediate",
        "label": "Intermediate",
    },
    {
        "value": "Junior",
        "label": "Junior",
    },
    {
        "value": "Senior",
        "label": "Senior",
    }
]

export const ChallengeForm: React.FC<ChallengeFormComponentProps> = ({ submitType, handleFormChange, handleClearForm, handleSubmitForm, errors = {}, values = {} }) => {

    const router = useRouter();

    // API Queries
    const { data: skills, isLoading, error } = useQuery({ queryKey: ['skills'], queryFn: getSkills })

    const skillsOptions = !isLoading && !error && skills.data.map((item: { skillName: string }) => ({
        value: item.skillName,
        label: item.skillName,
    }));

    const handleSelectChange = (
        newValue: MultiValue<OptionType> | SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => {
        const customEvent: CustomChangeEvent = {
            target: {
                name: actionMeta.name as string,
                value: newValue ? (newValue as MultiValue<OptionType>).map((option) => option.value) : [],
            },
        };
        handleFormChange(customEvent);
    };

    return (
        <form className="w-full sm:space-y-4">
            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="challengeName" className="text-sm text-[#475367]">Challenge/Hackathon Title</label>
                <input type="text" name="challengeName" value={values.challengeName} id="challengeName" className="inputText" onChange={handleFormChange} placeholder="Enter challenge title" />
                <small className="text-[#d3302f]">{errors.challengeName}</small>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="startDate" className="text-sm text-[rgb(71,83,103)]">Start Date</label>
                    <input type="date" value={values.startDate} name="startDate" id="startDate" className="inputText" onChange={handleFormChange} />
                    <small className="text-[#d3302f]">{errors.startDate}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="endDate" className="text-sm text-[#475367]">End Date</label>
                    <input type="date" value={values.endDate} name="endDate" id="endDate" className="inputText" onChange={handleFormChange} />
                    <small className="text-[#d3302f]">{errors.endDate}</small>
                </div>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="skills" className="text-sm text-[#475367]">Skills</label>
                    <Select
                        id="skills"
                        name="skills"
                        options={skillsOptions}
                        onChange={handleSelectChange}
                        placeholder="Select skill"
                        classNamePrefix="select"
                        isMulti
                        isSearchable
                        isClearable
                        value={values.skills ? values.skills?.map((skill: string) => ({ value: skill, label: skill })) : []}
                    />
                    <small className="text-[#d3302f]">{errors.skills}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="levels" className="text-sm text-[#475367]">Seniority</label>
                    <Select
                        id="levels"
                        name="levels"
                        options={seniorityOptions}
                        onChange={handleSelectChange}
                        placeholder="Select seniority"
                        classNamePrefix="select"
                        isMulti
                        isSearchable
                        isClearable
                        value={values.levels ? values.levels?.map((level: string) => ({ value: level, label: level })) : []}
                    />
                    <small className="text-[#d3302f]">{errors.levels}</small>
                </div>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="moneyPrize" className="text-sm text-[#475367]">Prize Money</label>
                    <input type="text" name="moneyPrize" value={values.moneyPrize} id="moneyPrize" className="inputText" onChange={handleFormChange} placeholder="Prize money" />
                    <small className="text-[#d3302f]">{errors.moneyPrize}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="contactEmail" className="text-sm text-[#475367]">Contact Email</label>
                    <input type="contactEmail" name="contactEmail" value={values.contactEmail} id="email" className="inputText" onChange={handleFormChange} placeholder="Email" />
                    <small className="text-[#d3302f]">{errors.contactEmail}</small>
                </div>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectDescription" className="text-sm text-[#475367]">Project Description</label>
                <textarea id="projectDescription" name="projectDescription" value={values.projectDescription} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectDescription}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectBrief" className="text-sm text-[#475367]">Project Brief</label>
                <textarea id="projectBrief" name="projectBrief" value={values.projectBrief} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectBrief}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectTasks" className="text-sm text-[#475367]">Project Description & Tasks</label>
                <textarea id="projectTasks" name="projectTasks" value={values.projectTasks} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectTasks}</small>
            </div>

            <div className="w-full flex justify-between">
                <Button classNames={`w-[200px] bg-white text-primary border border-primary sm:text-sm font-bold p-3`} label={`${submitType === "create" ? "Clear" : "Cancel"}`} onClick={() => submitType === "create" ? handleClearForm() : router.back()} />
                <Button classNames={`w-[200px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-3`} label={`${submitType === "create" ? "Create Challenge" : "Update Challenge"}`} onClick={handleSubmitForm} />
            </div>
        </form>
    )
}