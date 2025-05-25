"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  UserIcon,
  Mail,
  Calendar,
  Clock,
  Shield,
  Key,
  Activity,
  Settings,
  Edit,
  Ban,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { User } from "../page";

interface UserDetailsSheetProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserDetailsSheet({
  user,
  open,
  onOpenChange,
}: UserDetailsSheetProps) {
  if (!user) return null;

  const getStatusConfig = (status: User["status"]) => {
    switch (status) {
      case "Actif":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          bgColor: "bg-green-100",
          badge: "bg-green-100 text-green-700 hover:bg-green-100",
        };
      case "Bloqué":
        return {
          icon: XCircle,
          color: "text-red-600",
          bgColor: "bg-red-100",
          badge: "bg-red-100 text-red-700 hover:bg-red-100",
        };
      case "En attente":
        return {
          icon: AlertCircle,
          color: "text-orange-600",
          bgColor: "bg-orange-100",
          badge: "bg-orange-100 text-orange-700 hover:bg-orange-100",
        };
      default:
        return {
          icon: AlertCircle,
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          badge: "bg-gray-100 text-gray-700 hover:bg-gray-100",
        };
    }
  };

  const getRoleConfig = (role: string) => {
    switch (role) {
      case "Administrateur":
        return {
          color: "bg-purple-600",
          badge: "bg-purple-100 text-purple-700",
        };
      case "Superviseur":
        return { color: "bg-blue-600", badge: "bg-blue-100 text-blue-700" };
      case "Support":
        return { color: "bg-cyan-600", badge: "bg-cyan-100 text-cyan-700" };
      case "Marketing":
        return { color: "bg-pink-600", badge: "bg-pink-100 text-pink-700" };
      default:
        return { color: "bg-gray-600", badge: "bg-gray-100 text-gray-700" };
    }
  };

  const getPermissionIcon = (permission: string) => {
    switch (permission.toLowerCase()) {
      case "read":
        return "👁️";
      case "write":
        return "✏️";
      case "delete":
        return "🗑️";
      case "admin":
        return "👑";
      default:
        return "🔧";
    }
  };

  const statusConfig = getStatusConfig(user.status);
  const roleConfig = getRoleConfig(user.role);
  const StatusIcon = statusConfig.icon;

  // Données d'activité simulées
  const recentActivities = [
    { action: "Connexion", time: "Il y a 2 heures", type: "login" },
    { action: "Modification profil", time: "Il y a 1 jour", type: "edit" },
    { action: "Création utilisateur", time: "Il y a 3 jours", type: "create" },
    { action: "Export données", time: "Il y a 1 semaine", type: "export" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="space-y-4 pb-6">
          {/* Avatar et informations principales */}
          <div className="flex items-center space-x-4">
            <div
              className={`w-16 h-16 ${roleConfig.color} rounded-full flex items-center justify-center`}
            >
              <span className="text-white text-xl font-bold">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <SheetTitle className="text-xl font-bold text-gray-900">
                {user.username}
              </SheetTitle>
              <SheetDescription className="text-gray-600">
                {user.email}
              </SheetDescription>
              <div className="flex items-center space-x-2 mt-2">
                <Badge
                  variant="secondary"
                  className={`rounded-lg text-xs font-medium ${roleConfig.badge}`}
                >
                  {user.role}
                </Badge>
                <Badge
                  variant="secondary"
                  className={`rounded-lg text-xs font-medium ${statusConfig.badge}`}
                >
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {user.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Actions rapides */}
          <div className="flex space-x-2">
            <Button
              size="sm"
              className="flex-1 bg-orange-600 hover:bg-orange-700 rounded-xl"
            >
              <Edit className="w-4 h-4 mr-2" />
              Modifier
            </Button>
            <Button variant="outline" size="sm" className="flex-1 rounded-xl">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          {/* Informations de base */}
          <Card className="border-0 bg-gray-50 rounded-xl">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <UserIcon className="w-4 h-4 mr-2" />
                Informations générales
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.email}
                    </div>
                    <div className="text-xs text-gray-500">Email principal</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Key className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 font-mono">
                      {user.accessKey}
                    </div>
                    <div className="text-xs text-gray-500">{"Clé d'accès"}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.createdAt}
                    </div>
                    <div className="text-xs text-gray-500">
                      Date de création
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.lastLogin}
                    </div>
                    <div className="text-xs text-gray-500">
                      Dernière connexion
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card className="border-0 bg-gray-50 rounded-xl">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Permissions et accès
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {user.permissions.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-200"
                  >
                    <span className="text-lg">
                      {getPermissionIcon(permission)}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-gray-900 capitalize">
                        {permission}
                      </div>
                      <div className="text-xs text-gray-500">
                        {permission === "read" && "Lecture"}
                        {permission === "write" && "Écriture"}
                        {permission === "delete" && "Suppression"}
                        {permission === "admin" && "Administration"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistiques */}
          <Card className="border-0 bg-gray-50 rounded-xl">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                {"Statistiques d'activité"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">127</div>
                  <div className="text-xs text-gray-500">Connexions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">45</div>
                  <div className="text-xs text-gray-500">Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-500">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-xs text-gray-500">Rapports</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activité récente */}
          <Card className="border-0 bg-gray-50 rounded-xl">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Activité récente
              </h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-xl">
                {"Voir tout l'historique"}
              </Button>
            </CardContent>
          </Card>

          {/* Actions avancées */}
          <Card className="border-0 bg-gray-50 rounded-xl">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900">Actions avancées</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start rounded-xl"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Réinitialiser le mot de passe
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start rounded-xl"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  {"Voir les logs d'activité"}
                </Button>
                <Separator className="my-3" />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Ban className="w-4 h-4 mr-2" />
                  {user.status === "Bloqué"
                    ? "Débloquer l'utilisateur"
                    : "Bloquer l'utilisateur"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
