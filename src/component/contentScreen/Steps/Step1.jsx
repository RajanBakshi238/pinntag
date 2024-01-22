import React from 'react'
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";

const Step1 = () => {
    return (
        <>
            <div className="mb-3">
                <select className="secondary-select w-full" placeholder="Category">
                    <option>Create from Template</option>
                    <option>category1</option>
                    <option>category1</option>
                    <option>category1</option>
                </select>
            </div>
            <div className="mb-4">
                <select className="secondary-select w-full" placeholder="Category">
                    <option>Offer type (Offer or Event)</option>
                    <option>category1</option>
                    <option>category1</option>
                    <option>category1</option>
                </select>
            </div>
            <div className="mb-3">
                <h1 className="text-lg font-bold mb-3">Add Images</h1>
                <div className="w-32 h-20 flex justify-center items-center border-2 border-black rounded-md text-sm font-semibold">
                    Add Image
                </div>
            </div>
            <div className="mb-3">
                <input placeholder="Offer Title" className="common-input" />
            </div>
            <div className="mb-3">
                <textarea
                    placeholder="Description"
                    className="common-textarea"
                    rows={3}
                />
            </div>
            <div className="mb-3">
                <select className="secondary-select w-full" placeholder="Category">
                    <option>Category</option>
                    <option>category1</option>
                    <option>category1</option>
                    <option>category1</option>
                </select>
            </div>
            <div className="mb-3">
                <input
                    placeholder="Keywords: For example, #Cocktails"
                    className="common-input"
                />
            </div>
            {/* <div className="mt-6 flex justify-between items-center">
                <div>
                    <SecondaryButton>
                        <>Cancel</>
                    </SecondaryButton>
                </div>
                <div>
                    <PrimaryButton>
                        <span>Next</span>
                        <ChevronRightIcon className="!text-white" />
                    </PrimaryButton>
                </div>
            </div> */}
        </>
    )
}

export default Step1