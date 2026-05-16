'use client';

import { authClient } from '@/lib/auth-client';
import { Button, Modal, toast } from '@heroui/react';
import { FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useState } from 'react';
import { BiUser } from 'react-icons/bi';

const UpdateProfile = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateFormData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.updateUser({
      name: updateFormData.name,
      image: updateFormData.image,
    });

    if (error) {
      toast.danger('Update Failed', {
        description: error.message || 'Something went wrong. Please try again.',
        timeout: 3000,
      });
      return;
    }

    if (data) {
      toast.success('Profile Updated Successfully', {
        description: 'Your profile information has been updated.',
        timeout: 3000,
      });
      setOpen(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <Button className="btn-premium px-6 py-2.5 mt-2 rounded-xl" onClick={() => setOpen(true)}>
        Update Your Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md">
            {/* Close Button */}
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="text-center">
              <Modal.Icon className="bg-default text-foreground mx-auto">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
            </Modal.Header>

            {/* Form */}
            <Form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
              {/* Name + Image */}

              <TextField isRequired name="name" type="text">
                <Label>Full Name</Label>
                <Input placeholder="Enter your name" />
                <FieldError />
              </TextField>

              <TextField isRequired name="image" type="text">
                <Label>Photo URL</Label>
                <Input placeholder="https://example.com/image.jpg" />
                <FieldError />
              </TextField>

              {/* Submit */}
              <Button
                slot="close"
                type="submit"
                className="w-full btn-premium rounded-xl py-2.5"
              >
                Save Changes →
              </Button>
            </Form>

            {/* Footer */}
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
