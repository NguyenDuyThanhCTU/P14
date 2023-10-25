import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";

export const Editor = () => {
  const { editor, setEditor } = useContext(AppContext);
  const handleChange = (value: any) => {
    setEditor({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={editor.value}
        onChange={handleChange}
        placeholder={"Viết nội dung bài viết..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
