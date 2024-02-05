import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import Label from "../../components/lable/Label";
import Input from "../../components/input/Input";
import Radio from "../../components/checkbox/Radio";
import Dropdown from "../../components/dropdowm/Dropdown";
const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
  const { control, watch, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
      category: "",
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  console.log("PostAddNew ~ watchCategory", watchCategory);
  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "approved"}
                onClick={() => setValue("status", "approved")}
                value="approved"
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "pending"}
                onClick={() => setValue("status", "pending")}
                value="pending"
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "reject"}
                onClick={() => setValue("status", "reject")}
                value="reject"
              >
                Reject
              </Radio>
            </div>
            {/* <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input> */}
          </Field>
          <Field>
            <Label>Author</Label>
            <Input
              control={control}
              placeholder="Find the author"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
          </Field>
          <Field>
            <Label>Author</Label>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Option>Knowledge</Dropdown.Option>
              <Dropdown.Option>Blockchain</Dropdown.Option>
              <Dropdown.Option>Setup</Dropdown.Option>
              <Dropdown.Option>Nature</Dropdown.Option>
              <Dropdown.Option>Developer</Dropdown.Option>
            </Dropdown>
          </Field>
          <Field></Field>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
