"use client";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const columns = [
  {
    accessorKey: "patientName",
    header: "Patient Name",
  },
  {
    accessorKey: "patientId",
    header: ({ column }) => {
      return (
        <div className="flex gap-1 items-center">
        <p>Patient Id</p>
        <Button
          className=''
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "OD",
    header: "OD",
  },
  {
    accessorKey: "OS",
    header: "OS",
  },
  {
    accessorKey: "allergies",
    header: "Allergies",
  },
  {
    accessorKey: "remark",
    header: "Remark",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const attendee = row.original;
    

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              View Patient
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit Patient
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


