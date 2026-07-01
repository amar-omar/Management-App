import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { children, buttonCaption },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));

  return (
    <dialog
      ref={dialog}
      className="rounded-md p-6 shadow-xl backdrop:bg-stone-900/90"
    >
      {children}

      <form method="dialog" className="mt-4 text-right">
        <Button type="submit">
          {buttonCaption}
        </Button>
      </form>
    </dialog>
  );
});

export default Modal;