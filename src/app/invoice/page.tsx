"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ListItem from "@/components/page/Invoice/InvoiceListItem";
import Card from "@/components/page/Invoice/Card";
import AccountRadio from "@/components/page/Invoice/AccountRadio";

// Types
import { AccountRadio as AccountRadioType } from "@/components/page/Invoice/AccountRadio";

// Icons
import {
  ChevronRightIcon,
  Cross1Icon,
  DotsHorizontalIcon,
  PlusIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { ArrowUp } from "lucide-react";
import AccountConfirmationDialog from "@/components/page/Invoice/AccountConfirmationDialog";
import WithdrawlDialog from "@/components/page/Invoice/WithdrawlDialog";

const allInvoices = [
  {
    id: 1,
    name: "Invoice 01",
    company: "Company",
    status: "Paid",
    amount: "+200.87€",
  },
  {
    id: 2,
    name: "Invoice 02",
    company: "Company 2",
    status: "Pending",
    amount: "+487.62€",
  },
  {
    id: 3,
    name: "Invoice 03",
    company: "Company 3",
    status: "Paid",
    amount: "+349.18€",
  },
  {
    id: 4,
    name: "Invoice 04",
    company: "Company 4",
    status: "Pending",
    amount: "+82.36€",
  },
  {
    id: 5,
    name: "Invoice 05",
    company: "Company 5",
    status: "Paid",
    amount: "+415.09€",
  },
  {
    id: 6,
    name: "Invoice 06",
    company: "Company 6",
    status: "Pending",
    amount: "+293.74€",
  },
  {
    id: 7,
    name: "Invoice 07",
    company: "Company 7",
    status: "Paid",
    amount: "+123.50€",
  },
  {
    id: 8,
    name: "Invoice 08",
    company: "Company 8",
    status: "Pending",
    amount: "+456.81€",
  },
  {
    id: 9,
    name: "Invoice 09",
    company: "Company 9",
    status: "Paid",
    amount: "+234.67€",
  },
  {
    id: 10,
    name: "Invoice 10",
    company: "Company 10",
    status: "Pending",
    amount: "+167.29€",
  },
  {
    id: 11,
    name: "Invoice 11",
    company: "Company 11",
    status: "Paid",
    amount: "+82.15€",
  },
  {
    id: 12,
    name: "Invoice 12",
    company: "Company 12",
    status: "Pending",
    amount: "+498.36€",
  },
  {
    id: 13,
    name: "Invoice 13",
    company: "Company 13",
    status: "Paid",
    amount: "+175.24€",
  },
  {
    id: 14,
    name: "Invoice 14",
    company: "Company 14",
    status: "Pending",
    amount: "+412.53€",
  },
  {
    id: 15,
    name: "Invoice 15",
    company: "Company 15",
    status: "Paid",
    amount: "+297.80€",
  },
  {
    id: 16,
    name: "Invoice 16",
    company: "Company 16",
    status: "Pending",
    amount: "+421.67€",
  },
  {
    id: 17,
    name: "Invoice 17",
    company: "Company 17",
    status: "Pending",
    amount: "+125.45€",
  },
];

const allAccounts: AccountRadioType[] = [
  {
    label: {
      title: "Account 01",
      avatar: "/avatar.svg",
    },
    value: "1",
  },
  {
    label: {
      title: "Account 02",
      avatar: "/avatar.svg",
    },
    value: "2",
  },
  {
    label: {
      title: "Account 03",
      avatar: "/avatar.svg",
    },
    value: "3",
  },
];

const InvoicePage = () => {
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [showSelection, setShowSelection] = useState(false);

  // Accounts
  const [showAccounts, setShowAccounts] = useState(false);
  const [currentAccountStep, setCurrentAccountStep] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState("1");
  const [showAccountConfirmation, setShowAccountConfirmation] = useState(false);
  const [showWithdrawal, setShowWithdrawal] = useState(false);

  return (
    <div className="mx-auto flex items-center gap-x-6">
      <AnimatePresence>
        {/* Main Card */}
        <Card className="bg-[url('/images/bg.jpeg')]">
          <div className="flex w-[450px] flex-col items-center gap-y-2 py-6 text-white">
            <h3 className="text-sm">Main · EUR</h3>
            <h2 className="text-4xl font-bold">200.87€</h2>

            {!showSelection && (
              <>
                <Badge variant="glass">Accounts</Badge>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="my-2 flex items-center gap-x-6"
                >
                  <Button variant="glass" size="icon">
                    <PlusIcon className="h-4" />
                  </Button>
                  <Button
                    onClick={() => setShowSelection(true)}
                    variant="glass"
                    size="icon"
                  >
                    <ArrowUp className="h-4" />
                  </Button>
                  <Button variant="glass" size="icon">
                    <DotsHorizontalIcon className="h-4" />
                  </Button>
                </motion.div>
              </>
            )}
          </div>
          <div className="relative flex w-full flex-col gap-y-2 overflow-hidden overflow-y-scroll rounded-t-3xl bg-white px-6 py-10">
            {showSelection ? (
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Select Invoices</h3>
                <Button
                  onClick={() => {
                    setShowSelection(false);
                    setSelectedId([]);
                  }}
                  variant="secondary"
                  className="rounded-full p-3"
                >
                  <Cross1Icon />
                </Button>
              </div>
            ) : (
              <Tabs defaultValue="all">
                <TabsList className="sticky -top-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="recurring">Recurring</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
            <div className="my-2 flex flex-col gap-y-2">
              {allInvoices.map((invoice) => (
                <ListItem
                  key={invoice.id}
                  isSelected={selectedId.includes(invoice.id.toString())}
                  showSelection={showSelection}
                  onSelect={(id) => {
                    if (selectedId.includes(id.toString())) {
                      setSelectedId(
                        selectedId.filter((i) => i !== id.toString()),
                      );
                    } else {
                      setSelectedId([...selectedId, id.toString()]);
                    }
                  }}
                  {...invoice}
                />
              ))}
            </div>
          </div>
          {showSelection && (
            <Button
              onClick={() => setShowAccounts(true)}
              className="absolute bottom-2 w-4/5"
            >
              Confirm
            </Button>
          )}
        </Card>

        {/* Accounts Card */}
        {showAccounts && (
          <Card>
            {/* Account Confirmation Modal */}
            {showAccountConfirmation && (
              <AccountConfirmationDialog
                allAccounts={allAccounts}
                onCancel={() => {
                  setCurrentAccountStep(1);
                  setShowAccountConfirmation(false);
                }}
                onConfirm={() => {
                  setCurrentAccountStep(2);
                  setShowAccountConfirmation(false);
                }}
                selectedAccount={selectedAccount}
              />
            )}

            {/* Withdrawl Modal */}
            {showWithdrawal && (
              <WithdrawlDialog
                onClose={() => {
                  setShowWithdrawal(false);
                }}
                onSuccess={() => {
                  setShowWithdrawal(false);
                  setShowAccounts(false);
                }}
              />
            )}

            <div className="flex w-full flex-col items-center justify-center p-6">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-bold">Withdraw money</h3>
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-gray-500">
                    Step {currentAccountStep} of 2
                  </span>
                  <Button
                    onClick={() => setShowAccounts(false)}
                    variant="secondary"
                    className="rounded-full p-3"
                  >
                    <Cross1Icon />
                  </Button>
                </div>
              </div>

              {/* Stepper */}
              <div className="my-2 flex w-full items-center justify-between gap-x-2">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-1/2 rounded-full bg-gray-200 ${
                      i < currentAccountStep ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Accounts Step 1 */}
              {currentAccountStep === 1 && (
                <div className="my-2 flex w-full flex-col gap-y-2">
                  <AccountRadio
                    value={selectedAccount}
                    radios={allAccounts}
                    onClick={(value) => setSelectedAccount(value)}
                  />
                  <Button
                    variant="ghost"
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-2">
                      <PlusIcon className="h-4" />
                      <h3>New account</h3>
                    </div>
                    <ChevronRightIcon className="h-4" />
                  </Button>
                </div>
              )}

              {currentAccountStep === 2 && (
                <div className="my-2 flex w-full flex-col gap-y-2">
                  <h4 className="text-lg font-medium">Your withdrawal</h4>
                  <dl className="flex items-center justify-between gap-x-2 rounded-xl bg-gray-100 px-4 py-2 text-sm">
                    <dt className="text-gray-500">Amount</dt>
                    <dd>200.87€</dd>
                  </dl>
                  <div className="flex flex-col gap-y-2 rounded-2xl bg-gray-100 px-4 py-2 text-sm">
                    <dl className="flex items-center justify-between gap-x-2">
                      <dt className="text-gray-500">Dealflow fee</dt>
                      <dd>€ 30</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-x-2">
                      <dt className="text-gray-500">Your payout</dt>
                      <dd>~ € 5</dd>
                    </dl>
                  </div>
                  <h4 className="mt-6 text-lg font-medium">
                    Your will receive
                  </h4>
                  <dl className="flex items-center justify-between gap-x-2 rounded-xl bg-gray-100 px-4 py-2 text-sm">
                    <dt className="text-gray-500">Eur</dt>
                    <dd className="flex items-center gap-x-2">
                      <Button size="sm" variant="outline">
                        Convert
                      </Button>
                      <span>€ 1470</span>
                      <Button size="sm" variant="ghost">
                        <UpdateIcon />
                      </Button>
                    </dd>
                  </dl>
                  <div className="flex w-full flex-col gap-y-1 rounded-2xl bg-gray-100 px-4 py-2 text-xs">
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
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="absolute bottom-2 flex w-full items-center justify-between gap-x-2 px-2">
              <Button variant="secondary" className="w-full">
                Edit
              </Button>
              <Button
                onClick={() => {
                  if (currentAccountStep === 1) {
                    setShowAccountConfirmation(true);
                  }
                  if (currentAccountStep === 2) {
                    setShowWithdrawal(true);
                  }
                }}
                className="w-full"
              >
                {currentAccountStep === 1 ? "Next" : "Withdraw"}
              </Button>
            </div>
          </Card>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvoicePage;
