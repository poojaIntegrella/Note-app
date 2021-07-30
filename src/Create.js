import React from "react";

const Create = (props) => {
  const { handleSubmit, onChange, textState } = props;
  return (
    <div className="create">
      <h2>Add a new Note</h2>

      <label>Note Heading:</label>
      <input
        name="heading"
        type="text"
        required
        value={textState?.heading}
        onChange={(e) => onChange(e)}
      />
      <label>Note Description:</label>
      <textarea
        name={"description"}
        value={textState?.description}
        onChange={(e) => onChange(e)}
      />
      <button onClick={() => handleSubmit()}>Add note</button>
    </div>
  );
};

export default Create;
