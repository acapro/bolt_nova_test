import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  NvDialogfooter,
  NvFieldtext,
  NvFieldselect,
} from "@nova-design-system/nova-react";

// Define form field types
type FormValues = {
  fullName: string;
  email: string;
  company: string;
  role: string;
};

interface UserFormModalProps {
  onSubmit?: (data: FormValues) => void;
  onCancel?: () => void;
  initialValues?: FormValues;
}

const UserFormModal: React.FC<UserFormModalProps> = ({
  onSubmit,
  onCancel,
  initialValues,
}) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: initialValues || {
      fullName: "",
      email: "",
      company: "",
      role: "",
    },
  });

  // Reset form when initialValues change
  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  const processSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    onSubmit?.(data);
  };

  const handleCancel = (e: CustomEvent) => {
    console.log(e);
    reset();
    onCancel?.();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(processSubmit)}
        id="new-user-form"
        className="flex flex-col gap-4 mb-2"
      >
        <NvFieldtext
          label="Full name"
          placeholder="John Smith"
          {...register("fullName", { required: "Full name is required" })}
          error={!!errors.fullName}
          errorDescription={errors.fullName?.message}
        />

        <NvFieldtext
          label="Email address"
          placeholder="john.smith@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          errorDescription={errors.email?.message}
        />

        <NvFieldselect
          label="Company"
          {...register("company", { required: "Company is required" })}
          error={!!errors.company}
          errorDescription={errors.company?.message}
        >
          <option disabled value="">
            Select a company
          </option>
          <option value="Company 1">Company 1</option>
          <option value="Company 2">Company 2</option>
          <option value="Company 3">Company 3</option>
        </NvFieldselect>

        <NvFieldselect
          label="Role"
          {...register("role", { required: "Role is required" })}
          error={!!errors.role}
          errorDescription={errors.role?.message}
        >
          <option disabled value="">
            Select a role
          </option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </NvFieldselect>
      </form>

      <NvDialogfooter
        slot="footer"
        form="new-user-form"
        primaryLabel="Save"
        cancelLabel="Cancel"
        onDialogCanceled={handleCancel}
        onDialogPrimaryClicked={handleSubmit(processSubmit) as any}
      />
    </>
  );
};

UserFormModal.displayName = "UserFormModal";

export default UserFormModal;
