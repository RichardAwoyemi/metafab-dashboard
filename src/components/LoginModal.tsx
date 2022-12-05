import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormInputEmail from "./FormInputEmail";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import FormInputPassword from "./FormInputPassword";
import Image from "next/image";
import { LogoPrimary } from "./LogoPrimary";

export default function LoginModal() {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 w-full z-10 overflow-y-auto">
          <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="bg-gradient-to-b from-modal-black-top to-modal-black-bottom relative transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md 2xl:max-w-[27.5vw]">
                <div className="bg-off-black py-5 px-4 sm:px-12 flex gap-x-3 border-b border-bd-grey">
                  <LogoPrimary />
                </div>
                {/* TODO: Move from border to a padding + bg to catch the rounded edges */}
                <div className="p-6 pb-8 sm:px-12 border-r border-b border-l border-off-black">
                  <div>
                    <div className="text-center gap-y-6 flex flex-col">
                      <Dialog.Title
                        as="h3"
                        className="py-4 flex text-3xl font-medium leading-6 text-white"
                      >
                        Sign in to your account
                      </Dialog.Title>
                      <FormInputEmail />
                      <FormInputPassword />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex flex-col gap-y-3">
                    <ButtonPrimary text="Sign In" triggeredEvent={closeModal} />
                    <ButtonSecondary text="Don’t have an account? Sign up." />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
