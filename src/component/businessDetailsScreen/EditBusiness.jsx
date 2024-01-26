import React from "react";

const EditBusiness = () => {
  return (
    <div className="mx-12">
      <div className="flex">
        <div className="w-1/2">
          <div className="mb-3">
            <input placeholder="Business Name" className="common-input" />
          </div>
          <div className="mb-3">
            <select className="common-select w-full" placeholder="Category">
              <option>Type [Business/Non-profit]</option>
              <option>category1</option>
              <option>category1</option>
              <option>category1</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Description"
              className="common-textarea"
              rows={3}
            />
          </div>
          <div className="mb-3">
            <select className="common-select w-full" placeholder="Category">
              <option>Category</option>
              <option>category1</option>
              <option>category1</option>
              <option>category1</option>
            </select>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default EditBusiness;
