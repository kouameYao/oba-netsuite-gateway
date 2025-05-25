"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus } from "lucide-react";
import { useState, useMemo } from "react";
import { UsersTable } from "@/components/table/user-table";
import { adminUsers } from "@/constants/users";
import { UserDetailsSheet } from "./_components/UserDetails";

export interface User {
  id: string;
  username: string;
  role: string;
  accessKey: string;
  createdAt: string;
  status: "Actif" | "Bloqué" | "En attente";
  email: string;
  lastLogin: string;
  permissions: string[];
}

export default function GestionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsSheetOpen(true);
  };

  // Filtrage des données
  const filteredUsers = useMemo(() => {
    return adminUsers.filter((user) => {
      const matchesSearch =
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchTerm, roleFilter, statusFilter]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setRoleFilter("all");
    setStatusFilter("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">Utilisateurs</h1>
          <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un utilisateur
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-white rounded-2xl border-0 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Utilisateurs administration
              </h2>

              {/* Filtres */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                <div className="relative flex-1 w-full lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Nom d'utilisateur, email, rôle..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-0 bg-gray-50 h-11 rounded-full w-full"
                  />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-full lg:w-48 border-0 bg-gray-50 h-11 rounded-full">
                    <SelectValue placeholder="Rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les rôles</SelectItem>
                    <SelectItem value="Administrateur">
                      Administrateur
                    </SelectItem>
                    <SelectItem value="Superviseur">Superviseur</SelectItem>
                    <SelectItem value="Support">Support</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full lg:w-48 border-0 bg-gray-50 h-11 rounded-full">
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="Actif">Actif</SelectItem>
                    <SelectItem value="Bloqué">Bloqué</SelectItem>
                    <SelectItem value="En attente">En attente</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={handleResetFilters}
                  className="border-0 bg-gray-50 h-11 px-4 rounded-full w-full lg:w-auto"
                >
                  Réinitialiser
                </Button>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {adminUsers.length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total utilisateurs
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {adminUsers.filter((u) => u.status === "Actif").length}
                  </div>
                  <div className="text-sm text-gray-600">Actifs</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-600">
                    {adminUsers.filter((u) => u.status === "Bloqué").length}
                  </div>
                  <div className="text-sm text-gray-600">Bloqués</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {adminUsers.filter((u) => u.status === "En attente").length}
                  </div>
                  <div className="text-sm text-gray-600">En attente</div>
                </div>
              </div>

              {/* Tableau */}
              <UsersTable data={filteredUsers} onUserClick={handleUserClick} />

              <UserDetailsSheet
                user={selectedUser}
                open={isSheetOpen}
                onOpenChange={(open) => {
                  setIsSheetOpen(open);
                  if (!open) setSelectedUser(null);
                }}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
