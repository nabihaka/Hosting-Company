import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { ModalLayout } from "@/layouts/ModalLayout";

interface NavbarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarModal = ({ isOpen, onClose }: NavbarModalProps) => {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="absolute inset-y-0 right-0 py-4 pl-7 pr-3 bg-white w-75 rounded-l-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -left-4 top-1/2 -translate-y-1/2 flex w-8 h-12 bg-white border border-gray-400/20 rounded-lg shadow-xl shadow-black/20 cursor-pointer"
        >
          <IoIosArrowForward className="mx-auto my-auto text-2xl" />
        </button>
      </motion.div>
    </ModalLayout>
  );
};
