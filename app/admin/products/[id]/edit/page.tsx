import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import {
  fetchAdminProductDetail,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import React from "react";

const EditeProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await fetchAdminProductDetail(id);

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-8 ">
        update product
      </h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          name={product.name}
          image={product.image}
          text="update image"
          action={updateProductImageAction}
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={product.name}
            />{" "}
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={product.company}
            />
            <PriceInput defaultValue={product.price} />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={product.description}
            labelText="product description"
          />
          <div className="mt-6">
            <CheckboxInput
              label="featured"
              name="featured"
              defaultChecked={product.featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditeProductPage;
