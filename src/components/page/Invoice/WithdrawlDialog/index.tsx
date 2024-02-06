import React from "react";
import Modal from "@/components/view/Modal";
import { Button } from "@/components/ui/button";
import { CheckCircle, CornerRightUpIcon } from "lucide-react";

type WithdrawnDialogProps = {
  onSuccess: () => void;
  onClose: () => void;
};

const WithdrawlDialog = ({ onSuccess, onClose }: WithdrawnDialogProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center gap-y-2 text-center">
        <CheckCircle size={40} />
        <h2 className="text-xl font-bold">Success!</h2>
        <p className="text-xs text-gray-500">
          The money is soon in your account. Remember that it’s your own
          responsibility to report taxes 🙏
        </p>

        <div className="mt-6 flex w-full flex-col gap-y-2">
          <Button onClick={onClose} variant="secondary" className="w-full">
            Finish
          </Button>
          <Button onClick={onSuccess} className="w-full">
            Create review
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawlDialog;
