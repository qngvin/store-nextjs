import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />{" "}
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            {name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>{" "}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
