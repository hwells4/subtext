"use client"

import React, { useState, useTransition, useEffect, useRef } from "react"
import { createWaitlistEntryAction } from "@/actions/waitlist-actions"
import { cn } from "@/lib/utils"
import {
  Loader2,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChevronDown
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FormStepConfig {
  id: keyof FormData
  name: keyof FormData
  label: string // The question or main text for the step
  type: "email" | "text" | "checkbox" | "select"
  placeholder?: string // Optional, not for checkbox
  required: boolean
  checkboxLabel?: string // Specific label for the checkbox input itself
  options?: string[] // For select type
  otherInputPlaceholder?: string // For select type when 'Other' is chosen
}

interface FormData {
  email: string
  name: string
  howHeard: string
  howHeardOtherDetail?: string
  applyForBeta: boolean
}

const allFormSteps: FormStepConfig[] = [
  {
    id: "email",
    name: "email",
    label: "What\'s your email address?",
    type: "email",
    placeholder: "you@example.com",
    required: true
  },
  {
    id: "name",
    name: "name",
    label: "What should we call you? (Optional)",
    type: "text",
    placeholder: "Your Name",
    required: false
  },
  {
    id: "howHeard",
    name: "howHeard",
    label: "How did you hear about us? (Optional)",
    type: "select",
    options: ["", "Twitter", "LinkedIn", "Google", "A Friend", "Other"],
    placeholder: "Select an option",
    otherInputPlaceholder: "Please specify where",
    required: false
  },
  {
    id: "applyForBeta",
    name: "applyForBeta",
    label: "One last thing...", // Main question/prompt for the step
    type: "checkbox",
    checkboxLabel:
      "I\'d like to apply to be a beta user and receive an invitation for a demo.",
    required: false
  }
]

export default function WaitlistForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    howHeard: "",
    howHeardOtherDetail: "",
    applyForBeta: false
  })
  const [isPending, startTransition] = useTransition()
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  const otherInputRef = useRef<HTMLInputElement>(null)
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSubmitted) return
    const currentFieldType = allFormSteps[currentStepIndex]?.type
    if (currentFieldType === "checkbox") {
      checkboxRef.current?.focus()
    } else if (currentFieldType === "select") {
      selectRef.current?.focus()
    } else {
      inputRef.current?.focus()
    }
  }, [currentStepIndex, isSubmitted])

  useEffect(() => {
    if (
      allFormSteps[currentStepIndex]?.name === "howHeard" &&
      formData.howHeard === "Other"
    ) {
      otherInputRef.current?.focus()
    }
  }, [formData.howHeard, currentStepIndex])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => {
      const newState = {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
      if (name === "howHeard" && value !== "Other") {
        newState.howHeardOtherDetail = ""
      }
      return newState
    })

    if (
      formMessage &&
      allFormSteps[currentStepIndex].required &&
      value.trim() !== ""
    ) {
      setFormMessage(null)
    }
  }

  const handleNextStep = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    setFormMessage(null)

    const currentStepConfig = allFormSteps[currentStepIndex]
    let currentValue = formData[currentStepConfig.name]

    if (
      currentStepConfig.name === "howHeard" &&
      currentValue === "Other" &&
      !formData.howHeardOtherDetail?.trim()
    ) {
      // If 'Other' is selected but no detail is provided for an optional field, it's not an error for THIS step.
      // If it were a *required* field, we'd error here.
    }

    if (
      currentStepConfig.required &&
      currentStepConfig.type !== "checkbox" &&
      currentStepConfig.type !== "select" &&
      !(currentValue as string)?.trim()
    ) {
      setFormMessage({
        type: "error",
        text: `${currentStepConfig.label.replace("(Optional)", "").trim()} is required.`
      })
      return
    }
    if (currentStepConfig.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(currentValue as string)) {
        setFormMessage({
          type: "error",
          text: "Please enter a valid email address."
        })
        return
      }
    }
    if (
      currentStepConfig.type === "select" &&
      currentStepConfig.required &&
      !currentValue
    ) {
      setFormMessage({
        type: "error",
        text: `Please select an option for ${currentStepConfig.label.replace("(Optional)", "").trim()}.`
      })
      return
    }

    if (currentStepIndex < allFormSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    } else {
      handleSubmitForm()
    }
  }

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setFormMessage(null) // Clear any messages when going back
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleSubmitForm = () => {
    startTransition(async () => {
      const result = await createWaitlistEntryAction(formData)
      if (result.isSuccess) {
        setFormMessage({ type: "success", text: result.message })
        setIsSubmitted(true)
      } else {
        setFormMessage({ type: "error", text: result.message })
      }
    })
  }

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      const currentFieldType = allFormSteps[currentStepIndex].type
      if (currentFieldType === "checkbox" || currentFieldType === "select") {
        return
      }
      event.preventDefault()
      handleNextStep()
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg rounded-lg bg-transparent p-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="mx-auto mb-6 size-16 text-green-500" />
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Thank You!
          </h2>
          <p className="text-slate-600 sm:text-lg">
            {formMessage?.text || "You have successfully joined our waitlist."}
          </p>
        </motion.div>
      </div>
    )
  }

  const currentStepConfig = allFormSteps[currentStepIndex]
  const totalSteps = allFormSteps.length

  let containerMinHeight = "280px"
  if (currentStepConfig.type === "checkbox") containerMinHeight = "320px"
  if (currentStepConfig.type === "select") {
    containerMinHeight = formData.howHeard === "Other" ? "380px" : "300px"
  }

  return (
    <div className="w-full max-w-lg">
      {/* Progress Dots */}
      <div className="mb-6 flex justify-center space-x-2">
        {allFormSteps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "size-2.5 rounded-full transition-all duration-300 ease-in-out",
              index === currentStepIndex
                ? "scale-125 bg-slate-700"
                : "bg-slate-300"
            )}
          />
        ))}
      </div>

      <div
        className="relative overflow-hidden rounded-lg bg-transparent p-2"
        style={{ minHeight: containerMinHeight }}
      >
        <AnimatePresence mode="wait">
          <motion.form
            key={currentStepIndex}
            onSubmit={handleNextStep}
            initial={{ opacity: 0, x: currentStepIndex > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col p-4"
          >
            {currentStepIndex > 0 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="mb-5 inline-flex items-center self-start text-sm text-slate-600 hover:text-slate-800"
              >
                <ArrowLeft className="mr-1.5 size-4" />
                Back
              </button>
            )}
            <div className="flex grow flex-col justify-center">
              <label
                htmlFor={currentStepConfig.id}
                className="mb-4 block text-xl font-medium text-slate-800 sm:text-2xl"
              >
                {currentStepConfig.label}
              </label>

              {currentStepConfig.type === "checkbox" ? (
                <div className="mt-2 flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      ref={checkboxRef}
                      id={currentStepConfig.id}
                      name={currentStepConfig.name}
                      type="checkbox"
                      checked={formData[currentStepConfig.name] as boolean}
                      onChange={handleInputChange}
                      disabled={isPending}
                      onKeyPress={handleKeyPress}
                      className="size-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor={currentStepConfig.id}
                      className="font-medium text-slate-700 hover:cursor-pointer sm:text-base"
                    >
                      {currentStepConfig.checkboxLabel}
                    </label>
                  </div>
                </div>
              ) : currentStepConfig.type === "select" ? (
                <div className="relative w-full">
                  <select
                    ref={selectRef}
                    id={currentStepConfig.id}
                    name={currentStepConfig.name}
                    value={formData[currentStepConfig.name] as string}
                    onChange={handleInputChange}
                    required={currentStepConfig.required}
                    disabled={isPending}
                    className={cn(
                      "block w-full appearance-none rounded-lg border-0 border-b-2 border-slate-300 bg-transparent p-2.5 text-lg text-slate-900 shadow-sm focus:border-slate-600 focus:outline-none focus:ring-0 sm:text-xl",
                      formData[currentStepConfig.name] === ""
                        ? "text-slate-400"
                        : "text-slate-900"
                    )}
                  >
                    {currentStepConfig.options?.map(option => (
                      <option
                        key={option}
                        value={option}
                        disabled={option === "" && currentStepConfig.required}
                      >
                        {option === ""
                          ? currentStepConfig.placeholder || "Select an option"
                          : option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                  {formData.howHeard === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "1rem"
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="mt-4 w-full"
                    >
                      <input
                        ref={otherInputRef}
                        type="text"
                        id={`${currentStepConfig.id}-other`}
                        name="howHeardOtherDetail"
                        value={formData.howHeardOtherDetail || ""}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        disabled={isPending}
                        className="block w-full appearance-none rounded-lg border-0 border-b-2 border-slate-300 bg-transparent p-2.5 text-lg text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-600 focus:outline-none focus:ring-0 sm:text-xl"
                        placeholder={currentStepConfig.otherInputPlaceholder}
                      />
                    </motion.div>
                  )}
                </div>
              ) : (
                <input
                  ref={inputRef}
                  type={currentStepConfig.type}
                  id={currentStepConfig.id}
                  name={currentStepConfig.name}
                  value={formData[currentStepConfig.name] as string}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  required={currentStepConfig.required}
                  disabled={isPending}
                  className="block w-full appearance-none rounded-lg border-0 border-b-2 border-slate-300 bg-transparent p-2.5 text-lg text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-600 focus:outline-none focus:ring-0 sm:text-xl"
                  placeholder={currentStepConfig.placeholder}
                />
              )}

              {formMessage?.type === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600"
                >
                  {formMessage.text}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-end pt-6">
              <button
                type="submit"
                disabled={isPending}
                className={cn(
                  "inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base",
                  currentStepIndex === totalSteps - 1 &&
                    "w-full justify-center py-3 sm:text-lg md:px-10 md:py-3.5"
                )}
              >
                {isPending && currentStepIndex === totalSteps - 1 ? (
                  <Loader2 className="mr-2 size-5 animate-spin" />
                ) : null}
                {currentStepIndex === totalSteps - 1
                  ? "Submit Waitlist Application"
                  : "Next"}
                {!(currentStepIndex === totalSteps - 1) && (
                  <ArrowRight className="ml-2 size-4 sm:size-5" />
                )}
              </button>
            </div>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  )
}
