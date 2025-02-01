"use client";
import { updateDefaultAccount } from "@/actions/accounts";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import useFetch from "@/hooks/use-fetch";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { use, useEffect } from 'react'
import { toast } from "sonner";

const AccountCard = ({account}) => {
    const { name, balance, type, id, isDefault } = account;
    const {
        loading: updateDefaultAccountLoading,
        fn: updateDefaultAccountFn,
        error,
        data: updatedAccount,
        } = useFetch(updateDefaultAccount);

    const handleDefaultChange = async(e) => {
        e.preventDefault();

        if(isDefault){
            toast.warning("You need atleast one default account");
            return;
        }

        await updateDefaultAccountFn(id);

    }

    useEffect(() => {
        if(updatedAccount?.success){
            toast.success("Default account updated successfully");
        }
    }, [updatedAccount, updateDefaultAccountLoading]);

    useEffect(() => {
        if(error){
            toast.error(error.message || "Failed to update default account");
        }
    }, [error]);

    
    return (
    <Card className="hover:shadow-md transition-shadow group relative ">
        <Link href={`/account/${id}`}>

        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" >
            <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
            <Switch checked={isDefault} onClick={handleDefaultChange}
            disabled={updateDefaultAccountLoading}
             />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">
                ${parseFloat(balance).toFixed(2)}
            </div>
            <p className="text-muted-foreground text-xs">
                {type.charAt(0) + type.slice(1).toLowerCase()} Account
            </p>
        </CardContent>
        <CardFooter className="flex justify-between text-muted-foreground text-xs">
            <div className="flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1 text-green-500" />
                Income
            </div>
            <div className="flex items-center">
                <ArrowDownRight className="w-4 h-4 mr-1 text-red-500" />
                Expense
            </div>

        </CardFooter>
        </Link>

    </Card>
    
    )
}

export default AccountCard