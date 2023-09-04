import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});
export const deleteModalState = atom({
  key: "deleteModalState",
  default: { open: false, postId: null },
});
