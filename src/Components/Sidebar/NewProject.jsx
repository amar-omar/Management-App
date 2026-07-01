import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value.trim();
    const enteredDueDate = dueDateRef.current.value.trim();

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="py-4 text-xl font-bold text-stone-600">
          Invalid Input
        </h2>

        <p className="mb-2 text-stone-500">
          Oops... it looks like you forgot to enter a value.
        </p>

        <p className="mb-4 text-stone-500">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              type="button"
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <Input
          ref={titleRef}
          label="Title"
          type="text"
        />

        <Input
          ref={descriptionRef}
          label="Description"
          textArea
        />

        <Input
          ref={dueDateRef}
          label="Due Date"
          type="date"
        />
      </div>
    </>
  );
}