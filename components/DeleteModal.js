"use client";
import { deleteModalState } from "@/atom/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CameraIcon } from "@heroicons/react/outline";
import { db, storage } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteModal = () => {
  const [loading, setloading] = useState(null);
  const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

  const handleDeletePost = async () => {
    setloading(true);
    // Implement post deletion logic here
    const postIdToDelete = deleteModal.postId;
    await deleteDoc(doc(db, "posts", postIdToDelete));

    // Close the delete modal
    setDeleteModal({ open: false, postId: null });
    setloading(false);
  };

  return (
    <Transition.Root show={deleteModal.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 overflow-y-auto inset-0"
        onClose={() => setDeleteModal({ open: false, postId: null })}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="">
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-500"
                  >
                    Delete Modal
                  </Dialog.Title>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={handleDeletePost}
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-offset-1 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                  >
                    {loading ? "Deleting..." : "Delete Post"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteModal;
