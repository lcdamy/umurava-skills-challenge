"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChallengeFormProps, CustomChangeEvent } from "@/@types/global";
import { validateForm } from "@/utils/validation";
import { ChallengeForm } from "@/components/ChallengesForm";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editChallenge, getSingleChallenge } from "@/apis";
import { useAuth } from "@/providers/AuthProvider";
import dayjs from "dayjs";
const Modal = React.lazy(() => import('@/components/Modal'));

const EditChallenge = ({ searchParams }) => {
    const queryClient = useQueryClient();

    const { id }: { id: string } = React.use(searchParams);
    const { data, authenticate } = useAuth();

    const router = useRouter();

    React.useEffect(() => {
        if (!data.token) {
            const handleAuthentication = async () => {
                try {
                    await authenticate({ userRole: "admin" });
                } catch (error) {
                    console.error("Failed to authenticate:", error);
                    router.push("/");
                }
            };

            handleAuthentication();
        }
    }, [authenticate, router, data.token]);

    // API Queries
    const { data: singleChallenge, isLoading, error } = useQuery({
        queryKey: ['challenges', id],
        queryFn: () =>
            getSingleChallenge(id),
        enabled: !!id,
    })

    const mutation = useMutation({
        mutationFn: ({ token, id, payload }: { token: string, id: string, payload: ChallengeFormProps }) => editChallenge(token, id, payload),
        onSuccess: async (response) => {
            if (response.status === "error") {
                setModal({ open: true, message: response.message, title: "Failed" })
            } else {
                queryClient.invalidateQueries({ queryKey: ['challenges'] })
                await handleClearForm();
                router.push("/admin/dashboard/hackathons");
            }
        },
        onError: () => {
            setModal({ open: true, message: "Challenge creation Failed ", title: "Failed" })
        }
    })

    // Form and Error States
    const [errors, setErrors] = React.useState<ChallengeFormProps>({});

    const [formState, setFormState] = React.useState<ChallengeFormProps>({
        challengeName: singleChallenge?.data?.challengeName || "",
        startDate: dayjs(singleChallenge?.data?.startDate).format("YYYY-MM-DD") || "",
        endDate: dayjs(singleChallenge?.data?.endDate).format("YYYY-MM-DD") || "",
        moneyPrize: singleChallenge?.data?.moneyPrize || "",
        contactEmail: singleChallenge?.data?.contactEmail || "",
        projectDescription: singleChallenge?.data?.projectDescription || "",
        projectBrief: singleChallenge?.data?.projectBrief || "",
        projectTasks: singleChallenge?.data?.projectTasks || "",
        skills: singleChallenge?.data?.skills || [],
        levels: singleChallenge?.data?.levels || [],
    })

    const [modal, setModal] = React.useState({ open: false, message: "", title: "" })


    // Action Functions
    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | CustomChangeEvent
    ) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleClearForm = async (): Promise<void> => {
        setFormState({
            challengeName: "",
            startDate: "",
            endDate: "",
            moneyPrize: "",
            contactEmail: "",
            projectDescription: "",
            projectBrief: "",
            projectTasks: "",
            skills: [],
            levels: []
        });
        setErrors({});
    };

    const handleSubmitForm = async () => {
        if (await validateForm(formState, setErrors)) {
            console.log("formState", formState);
            mutation.mutate({ token: data.token, id, payload: formState })
            await handleClearForm();
        } else {
            setModal({ open: true, message: "Failed to validate", title: "Failed" })
        }
    }

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className=" bg-white sm:p-4 border rounded-lg">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.push("/admin/dashboard/hackathons")}>
                        <Image
                            src="/svgs/arrow-left.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />
                        Go back</div>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-tertiaryColor" onClick={() => router.push('/admin/dashboard/hackathons')}>Challenge & Hackathons</span>
                    <span className="text-tertiaryColor"> / </span>
                    <span className="text-primary">Edit a Challenge</span>
                </div>
            </div>

            <div className="w-full flex sm:flex-col items-center">
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">

                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Edit a Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">Fill out these details to build your broadcast</p>
                    </header>

                    {isLoading || error ? (<p>Loading ...</p>) : (<ChallengeForm submitType="edit" handleFormChange={handleFormChange} handleClearForm={handleClearForm} handleSubmitForm={handleSubmitForm} errors={errors} values={formState} />)}

                </div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                title={modal.title}
            >
                <div className='flex flex-col items-start justify-start sm:gap-4'>
                    <p className='text-center'>{modal.message}</p>
                </div>
            </Modal>

        </div >
    )
}

export default EditChallenge;