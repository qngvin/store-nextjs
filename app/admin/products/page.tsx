import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import EmptyList from "@/components/global/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import React from "react";

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

const AdminProductsPage = async () => {
  const item = await fetchAdminProducts();
  if (item.length === 0)
    return <EmptyList heading="No items found" className="text-emerald-50" />;
  return (
    <section>
      <Table>
        <TableCaption className="capitalize ">
          total products: {item.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {item.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Link
                  href={`/products/${product.id}`}
                  className="underline text-muted-foreground tracking-wide capitalize"
                >
                  {product.name}
                </Link>
              </TableCell>
              <TableCell>{product.company}</TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell className="flex items-center gap-x-2">
                <Link href={`/admin/products/${product.id}/edit`}>
                  <IconButton actionType="edit" />
                </Link>
                <DeleteProduct productId={product.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AdminProductsPage;
