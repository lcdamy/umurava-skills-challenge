"use client";

import * as React from "react";
import { Button } from "./Button";
import { ChallengeFormComponentProps } from "@/@types/global";
import Select from "react-select";
import { getSkills } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

const seniority: Array<Record<string, string>> = [
    {
        "_id": "67a351ad367bf94c40f6dc67",
        "name": "Intermediacte",
        "status": "active"
    },
    {
        "_id": "67a351ad367bf94c40f6dc68",
        "name": "Junior",
        "status": "active"
    },
    {
        "_id": "67a351ad367bf94c40f6dc69",
        "name": "Senior",
        "status": "active"
    }
]


export const ChallengeForm: React.FC<ChallengeFormComponentProps> = ({ submitType, handleFormChange, handleClearForm, handleSubmitForm, errors = {}, values = {} }) => {

    // API Queries
    const { data: skills, isLoading, error } = useQuery({ queryKey: ['skills'], queryFn: getSkills })

    const skillsOptions = !isLoading && !error && skills.data.map((item: { _id: string; skillName: string }) => ({
        value: item._id,
        label: item.skillName,
    }));

    const seniorityOptions = seniority.map((item) => ({
        value: item._id,
        label: item.name,
    }));
    return (
        <form className="w-full sm:space-y-4">
            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="challengeName" className="text-sm text-[#475367]">Challenge/Hackathon Title</label>
                <input type="text" name="challengeName" value={values.challengeName} id="challengeName" className="inputText" onChange={handleFormChange} placeholder="Enter challenge title" />
                <small className="text-[#d3302f]">{errors.challengeName}</small>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="startDate" className="text-sm text-[#475367]">Start Date</label>
                    <input type="date" name="startDate" value={dayjs(values.startDate)} id="startDate" className="inputText" onChange={handleFormChange} />
                    <small className="text-[#d3302f]">{errors.startDate}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="endDate" className="text-sm text-[#475367]">End Date</label>
                    <input type="date" name="endDate" value={dayjs(values.endDate)} id="endDate" className="inputText" onChange={handleFormChange} />
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
                        placeholder="Select skill"
                        className=""
                        classNamePrefix="select"
                        isMulti
                        isSearchable
                        isClearable
                    />
                    <small className="text-[#d3302f]">{errors.skills}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="seniority" className="text-sm text-[#475367]">Seniority</label>
                    <Select
                        id="seniority"
                        name="seniority"
                        options={seniorityOptions}
                        placeholder="Select seniority"
                        className=""
                        classNamePrefix="select"
                        isMulti
                        isSearchable
                        isClearable
                    />
                    <small className="text-[#d3302f]">{errors.seniority}</small>
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
                <Button classNames={`w-[200px] bg-white text-primary border border-primary sm:text-sm font-bold p-3`} label={"Cancel"} onClick={() => handleClearForm()} />
                <Button classNames={`w-[200px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-3`} label={`${submitType === "create" ? "Create Challenge" : "Update Challenge"}`} onClick={handleSubmitForm} />
            </div>
        </form>
    )
}