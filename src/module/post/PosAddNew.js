import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import Label from "../../components/lable/Label";
import Input from "../../components/input/Input";
import Radio from "../../components/checkbox/Radio";

import { db } from "../../firebase/firebase-config";
import slugify from "slugify";
import ImageUpload from "../../components/image/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import Toggle from "../../components/toggle/Toggle";

import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";
import { Dropdown } from "../../components/dropdown";
import { postStatus } from "../../utils/constants";

const PostAddNew = () => {
  // const { userInfo } = useAuth();
  // const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
  //   mode: "onChange",
  //   defaultValues: {
  //     title: "",
  //     slug: "",
  //     status: 2,

  //     hot: false,
  //     image: "",
  //     category: {},
  //     user: {},
  //   },
  // });

  // const watchStatus = watch("status");
  // const watchHot = watch("hot");

  // const {
  //   image,
  //   progress,
  //   handleSelectImage,
  //   handleDeleteImage,
  //   handleResetUpload,
  //   setImage,
  // } = useFirebaseImage(setValue, getValues);
  // const [categories, setCategories] = useState([]);
  // const [selectCategory, setSelectCategory] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchUserData() {
  //     if (!userInfo.email) return;
  //     const q = query(
  //       collection(db, "users"),
  //       where("email", "==", userInfo.email)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setValue("user", {
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //   }
  //   fetchUserData();

  // }, [userInfo.email]);
  // const addPostHandler = async (values) => {
  //   setLoading(true);
  //   try {
  //     const cloneValues = { ...values };
  //     console.log(cloneValues);
  //     // cloneValues.slug = slugify(values.slug || values.title, { lower: true });
  //     if (values.slug || values.title) {
  //       cloneValues.slug = slugify(values.slug || values.title, {
  //         lower: true,
  //       });
  //     }
  //     cloneValues.status = Number(values.status);
  //     const colRef = collection(db, "posts");
  //     await addDoc(colRef, {
  //       ...cloneValues,
  //       image,
  //       userId: userInfo.uid,
  //       createdAt: serverTimestamp(),
  //     });
  //     toast.success("Create new post successfully!");
  //     reset({
  //       title: "",
  //       slug: "",
  //       status: 2,
  //       category: {},
  //       hot: false,
  //       image: "",
  //     });
  //     handleResetUpload();
  //     setImage("");
  //     setSelectCategory({});
  //   } catch (error) {
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   async function getData() {
  //     const colRef = collection(db, "categories");
  //     const q = query(colRef, where("status", "==", 1));
  //     const querySnapshot = await getDocs(q);
  //     let result = [];
  //     querySnapshot.forEach((doc) => {

  //       result.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });

  //     setCategories(result);
  //   }
  //   getData();
  // }, []);
  // useEffect(() => {
  //   document.title = "Monkey Blogging - Add new post";
  // }, []);

  // const handleClickOption = async (item) => {

  //   const colRef = doc(db, "categories", item.id);
  //   const docData = await getDoc(colRef);

  //   setValue("category", {
  //     id: docData.id,
  //     ...docData.data(),
  //   });
  //   setSelectCategory(item);
  // };
  const { userInfo } = useAuth();
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      hot: false,
      image: "",
      category: {},
      user: {},
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const {
    image,
    handleResetUpload,
    progress,
    handleSelectImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchUserData() {
      if (!userInfo.email) return;
      const q = query(
        collection(db, "users"),
        where("email", "==", userInfo.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setValue("user", {
          id: doc.id,
          ...doc.data(),
        });
      });
    }
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.email]);
  const addPostHandler = async (values) => {
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      cloneValues.status = Number(values.status);
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        image,
        createdAt: serverTimestamp(),
      });
      toast.success("Create new post successfully!");
      reset({
        title: "",
        slug: "",
        status: 2,
        category: {},
        hot: false,
        image: "",
        user: {},
      });
      handleResetUpload();
      setSelectCategory({});
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);

  useEffect(() => {
    document.title = "Monkey Blogging - Add new post";
  }, []);

  const handleClickOption = async (item) => {
    const colRef = doc(db, "categories", item.id);
    const docData = await getDoc(colRef);
    setValue("category", {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(item);
  };
  return (
    // <PostAddNewStyles>
    <>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              // onChange={() => {}}
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
              // onChange={() => {}}
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              className="h-[250px]"
              onChange={handleSelectImage}
              progress={progress}
              handleDeleteImage={handleDeleteImage}
              image={image}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Author</Label>
            <Input
              control={control}
              placeholder="Find the author"
              name="author"
              // onChange={() => {}}
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Please select an option"></Dropdown.Select>
              <Dropdown.List>
                {/* {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))} */}
                {categories.length > 0 ? (
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))
                ) : (
                  <Dropdown.Option disabled>Loading...</Dropdown.Option>
                )}
              </Dropdown.List>
            </Dropdown>
            {selectCategory?.name && (
              <span className="inline-block p-3 rounded-lg bg-green-50 text-sm text-green-600 font-medium">
                {selectCategory?.name}
              </span>
            )}
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field></Field>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[250px]"
          isLoading={loading}
          disabled={loading}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default PostAddNew;
