"use client"

import { useState } from "react"
import { Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { AppSelect } from "@/components/ui/app-select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "@/lib/firestore/schema"

interface Props {
  accounts: User[]
}

export function UserManagement({ accounts }: Props) {
  const [accountFilter, setAccountFilter] = useState<"all" | "super_admin" | "admin" | "technician" | "customer">("all")
  const [search, setSearch] = useState("")

  const filteredAccounts = accounts.filter((acc) => {
    const matchesFilter = accountFilter === "all" || acc.role === accountFilter
    const matchesSearch =
      (acc.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (acc.name || "").toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Card className="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-border/70 pb-4 bg-muted/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Users className="size-4" />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-foreground">Global Account Directory</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Overview of system users across all roles and credentials.
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AppSelect
              value={accountFilter}
              onValueChange={(value) => setAccountFilter(value as typeof accountFilter)}
              items={[
                { value: "all", label: "All roles" },
                { value: "super_admin", label: "Super admins" },
                { value: "admin", label: "Admins" },
                { value: "technician", label: "Technicians" },
                { value: "customer", label: "Customers" },
              ]}
              size="sm"
              className="w-36 bg-background border-input text-foreground"
            />
            <div className="relative w-48 sm:w-64">
              <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search user or email..."
                className="h-9 pl-9 text-xs rounded-xl bg-background border-input text-foreground"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-2 max-h-[360px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full">
          {filteredAccounts.length === 0 ? (
            <div className="text-center p-8 text-xs text-muted-foreground">No accounts found matching search.</div>
          ) : (
            filteredAccounts.map((acc) => (
              <div
                key={acc.uid}
                className="p-3.5 rounded-xl border border-border/70 bg-background/60 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-3 text-xs"
              >
                <div className="min-w-0 flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-muted flex items-center justify-center font-bold text-xs shrink-0 text-foreground">
                    {(acc.name || acc.email || "U").charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground truncate">{acc.name || acc.email}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{acc.email}</p>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className={
                    acc.role === "super_admin"
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30 text-[10px] font-black uppercase shrink-0"
                      : acc.role === "admin"
                      ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30 text-[10px] font-black uppercase shrink-0"
                      : "bg-muted text-muted-foreground border-border text-[10px] font-bold uppercase shrink-0"
                  }
                >
                  {acc.role}
                </Badge>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
