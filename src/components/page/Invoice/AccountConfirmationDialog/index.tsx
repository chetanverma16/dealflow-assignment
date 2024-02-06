import React from "react";
import Modal from "@/components/view/Modal";
import { Button } from "@/components/ui/button";

// Types
import { AccountRadio } from "../AccountRadio";

type AccountConfirmationDialogProps = {
  selectedAccount: string;
  allAccounts: AccountRadio[];
  onConfirm: () => void;
  onCancel: () => void;
};

const AccountConfirmationDialog = ({
  allAccounts,
  selectedAccount,
  onCancel,
  onConfirm,
}: AccountConfirmationDialogProps) => {
  return (
    <Modal onClose={onCancel}>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold">Is this the right account?</h2>
        <p className="text-gray-500">some text here?</p>
        <div className="mt-6 flex w-full flex-col gap-y-1 rounded-2xl bg-gray-100 px-4 py-2 text-xs">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500">Account</dt>
            <dd>
              {
                allAccounts.find((account) => account.value === selectedAccount)
                  ?.label.title
              }
            </dd>
          </dl>
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500">BIC</dt>
            <dd>REVOLT21</dd>
          </dl>
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500">IBAN</dt>
            <dd>AT483200000012345864</dd>
          </dl>
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500">Currency</dt>
            <dd>EUR</dd>
          </dl>
        </div>
        <div className="mt-6 flex w-full flex-col gap-y-2">
          <Button onClick={onCancel} variant="secondary" className="w-full">
            Change account details
          </Button>
          <Button onClick={onConfirm} className="w-full">
            Confirm account
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AccountConfirmationDialog;
