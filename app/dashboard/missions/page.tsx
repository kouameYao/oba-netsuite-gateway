"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Building2,
  Clock,
  Plus,
  Search,
  MapPin,
  User,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Pause,
  Phone,
  Mail,
  FileText,
  Activity,
  Shield,
  TrendingUp,
  Users,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Mission {
  id: number;
  title: string;
  type: string;
  location: string;
  agent: string;
  status: string;
  priority: string;
  date: string;
  time: string;
  description: string;
  agentPhone: string;
  agentEmail: string;
  startDate: string;
  endDate: string;
  progress: number;
  notes: string[];
  client?: string;
  budget?: string;
}

export default function MissionsPage() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const missions: Mission[] = Array(15)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `${
        [
          "Audit Conformité",
          "Visite Client Premium",
          "Formation Équipe",
          "Évaluation Risques",
          "Inspection Agence",
          "Analyse Crédit",
          "Contrôle Qualité",
          "Réunion Stratégique",
          "Due Diligence",
          "Certification ISO",
          "Audit Interne",
          "Présentation Produits",
          "Évaluation Performance",
          "Contrôle Sécurité",
          "Formation Digitale",
        ][index]
      }`,
      type: [
        "Audit & Conformité",
        "Relation Client",
        "Formation",
        "Gestion des Risques",
        "Contrôle Qualité",
        "Analyse Crédit",
        "Sécurité",
      ][index % 7],
      location: [
        "Agence Plateau",
        "Agence Cocody",
        "Agence Marcory",
        "Siège Social",
        "Centre d'Affaires",
      ][index % 5],
      agent: [
        "Owen Japhet KOUAMÉ",
        "Emmanuel GUIEBI",
        "Marie MARTIN",
        "Pierre DUBOIS",
        "Sophie LEBLANC",
      ][index % 5],
      status: ["En cours", "En attente", "Terminée", "Reportée"][index % 4],
      priority: ["Critique", "Haute", "Moyenne", "Basse"][index % 4],
      date: "25/01/2025",
      time: `${8 + (index % 10)}:${index % 2 === 0 ? "00" : "30"}`,
      description: `Mission de ${
        [
          "audit conformité réglementaire",
          "visite client entreprise",
          "formation équipe commerciale",
          "évaluation des risques opérationnels",
          "inspection des procédures",
          "analyse de dossier crédit",
          "contrôle sécurité informatique",
        ][index % 7]
      } à ${
        [
          "l'agence Plateau",
          "l'agence Cocody",
          "l'agence Marcory",
          "au siège social",
          "au centre d'affaires",
        ][index % 5]
      }. Objectif : ${
        [
          "assurer la conformité BCEAO",
          "développer le portefeuille client",
          "renforcer les compétences équipe",
          "minimiser les risques opérationnels",
          "optimiser les processus",
          "valider l'octroi de crédit",
          "sécuriser les systèmes",
        ][index % 7]
      }.`,
      agentPhone: `+225 ${Math.floor(Math.random() * 90000000) + 10000000}`,
      agentEmail: `${
        [
          "owen.japhet",
          "emmanuel.guiebi",
          "marie.martin",
          "pierre.dubois",
          "sophie.leblanc",
        ][index % 5]
      }@orangebank.ci`,
      startDate: "25/01/2025",
      endDate: "26/01/2025",
      progress: Math.floor(Math.random() * 100),
      notes: [
        "Mission initiée selon planning",
        "Documentation préparée et validée",
        "Équipe briefée sur les objectifs",
        "Première phase complétée avec succès",
        "Rapport intermédiaire transmis",
        "Recommandations formulées",
      ].slice(0, Math.floor(Math.random() * 4) + 1),
      client:
        index % 3 === 0
          ? ["SODECI", "Air Côte d'Ivoire", "Groupe NSIA", "CFAO", "Bolloré"][
              index % 5
            ]
          : undefined,
      budget:
        index % 4 === 0
          ? `${(Math.floor(Math.random() * 500) + 100) * 1000} FCFA`
          : undefined,
    }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-600 text-white";
      case "En attente":
        return "bg-orange-600 text-white";
      case "Terminée":
        return "bg-green-600 text-white";
      case "Reportée":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critique":
        return "text-red-700 bg-red-100";
      case "Haute":
        return "text-red-600 bg-red-50";
      case "Moyenne":
        return "text-orange-600 bg-orange-50";
      case "Basse":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "En cours":
        return <Activity className="h-4 w-4" />;
      case "En attente":
        return <Pause className="h-4 w-4" />;
      case "Terminée":
        return <CheckCircle className="h-4 w-4" />;
      case "Reportée":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Audit & Conformité":
        return <Shield className="h-5 w-5 text-orange-600" />;
      case "Relation Client":
        return <Users className="h-5 w-5 text-orange-600" />;
      case "Formation":
        return <FileText className="h-5 w-5 text-orange-600" />;
      case "Gestion des Risques":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "Contrôle Qualité":
        return <CheckCircle className="h-5 w-5 text-orange-600" />;
      case "Analyse Crédit":
        return <CreditCard className="h-5 w-5 text-orange-600" />;
      case "Sécurité":
        return <Shield className="h-5 w-5 text-orange-600" />;
      default:
        return <Building2 className="h-5 w-5 text-orange-600" />;
    }
  };

  const handleMissionClick = (mission: Mission) => {
    setSelectedMission(mission);
    setIsSheetOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Missions</h1>
            <p className="text-gray-600 mt-1">Gestion des missions</p>
          </div>
          <Link href="/dashboard/missions/nouveau">
            <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Créer une mission
            </Button>
          </Link>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "En cours",
              count: missions.filter((m) => m.status === "En cours").length,
              icon: <Activity className="h-5 w-5 text-blue-600" />,
              iconBg: "bg-blue-100",
              color: "text-blue-600",
            },
            {
              label: "En attente",
              count: missions.filter((m) => m.status === "En attente").length,
              icon: <Pause className="h-5 w-5 text-orange-600" />,
              iconBg: "bg-orange-100",
              color: "text-orange-600",
            },
            {
              label: "Terminées",
              count: missions.filter((m) => m.status === "Terminée").length,
              icon: <CheckCircle className="h-5 w-5 text-green-600" />,
              iconBg: "bg-green-100",
              color: "text-green-600",
            },
            {
              label: "Critiques",
              count: missions.filter((m) => m.priority === "Critique").length,
              icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
              iconBg: "bg-red-100",
              color: "text-red-600",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-5 flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.count}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filtres */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
          <div className="relative flex-1 w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Nom de mission, agent, client..."
              className="pl-10 border-0 bg-white h-11 rounded-full w-full "
            />
          </div>
          <Select defaultValue="statut">
            <SelectTrigger className="w-full lg:w-48 border-0 bg-white h-11 rounded-full ">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="statut">Tous les statuts</SelectItem>
              <SelectItem value="en-cours">En cours</SelectItem>
              <SelectItem value="en-attente">En attente</SelectItem>
              <SelectItem value="terminee">Terminée</SelectItem>
              <SelectItem value="reportee">Reportée</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="type">
            <SelectTrigger className="w-full lg:w-48 border-0 bg-white h-11 rounded-full ">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type">Tous les types</SelectItem>
              <SelectItem value="audit">Audit & Conformité</SelectItem>
              <SelectItem value="client">Relation Client</SelectItem>
              <SelectItem value="formation">Formation</SelectItem>
              <SelectItem value="risques">Gestion des Risques</SelectItem>
              <SelectItem value="qualite">Contrôle Qualité</SelectItem>
              <SelectItem value="credit">Analyse Crédit</SelectItem>
              <SelectItem value="securite">Sécurité</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="priorite">
            <SelectTrigger className="w-full lg:w-48 border-0 bg-white h-11 rounded-full ">
              <SelectValue placeholder="Priorité" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="priorite">Toutes priorités</SelectItem>
              <SelectItem value="critique">Critique</SelectItem>
              <SelectItem value="haute">Haute</SelectItem>
              <SelectItem value="moyenne">Moyenne</SelectItem>
              <SelectItem value="basse">Basse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grille des missions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="cursor-pointer transition-all hover:shadow-md hover:border-1 border-0 rounded-2xl bg-white hover:bg-gray-50 "
              onClick={() => handleMissionClick(mission)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-xl">
                      {getTypeIcon(mission.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {mission.title}
                      </h3>
                      <p className="text-xs text-gray-500">{mission.type}</p>
                    </div>
                  </div>
                  <Badge
                    className={`rounded-full text-xs font-medium ${getStatusColor(
                      mission.status
                    )}`}
                  >
                    {mission.status}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {mission.agent}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {mission.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {mission.date} à {mission.time}
                    </span>
                  </div>
                  {mission.client && (
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {mission.client}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <Badge
                    variant="secondary"
                    className={`rounded-lg text-xs font-medium ${getPriorityColor(
                      mission.priority
                    )}`}
                  >
                    {mission.priority}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    {mission.budget && (
                      <span className="text-xs text-gray-500 font-medium">
                        {mission.budget}
                      </span>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg h-8 px-3"
                    >
                      Détails →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          <Button
            variant="outline"
            className="bg-orange-600 text-white border-orange-600 hover:bg-orange-700 w-10 h-10 p-0 rounded-full"
          >
            1
          </Button>
          <Button
            variant="outline"
            className="border-0 bg-white hover:bg-gray-50 w-10 h-10 p-0 rounded-full "
          >
            2
          </Button>
          <Button
            variant="outline"
            className="border-0 bg-white hover:bg-gray-50 w-10 h-10 p-0 rounded-full "
          >
            3
          </Button>
          <Button
            variant="outline"
            className="border-0 bg-white hover:bg-gray-50 w-10 h-10 p-0 rounded-full "
          >
            4
          </Button>
          <Button
            variant="outline"
            className="border-0 bg-white hover:bg-gray-50 w-10 h-10 p-0 rounded-full "
          >
            {">"}
          </Button>
        </div>
      </main>

      {/* Mission Details Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto px-5">
          {selectedMission && (
            <>
              <SheetHeader className="space-y-4 pb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    {getTypeIcon(selectedMission.type)}
                  </div>
                  <div>
                    <SheetTitle className="text-xl font-bold text-gray-900">
                      {selectedMission.title}
                    </SheetTitle>
                    <SheetDescription className="text-gray-600">
                      {selectedMission.type}
                    </SheetDescription>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge
                    className={`rounded-full text-sm font-medium ${getStatusColor(
                      selectedMission.status
                    )}`}
                  >
                    <span className="mr-2">
                      {getStatusIcon(selectedMission.status)}
                    </span>
                    {selectedMission.status}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={`rounded-full text-sm font-medium ${getPriorityColor(
                      selectedMission.priority
                    )}`}
                  >
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Priorité {selectedMission.priority.toLowerCase()}
                  </Badge>
                </div>
              </SheetHeader>

              <div className="space-y-6">
                {/* Description */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Description
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedMission.description}
                  </p>
                </div>

                {/* Agent Information */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Responsable mission
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {selectedMission.agent}
                      </span>
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {selectedMission.agent.split(" ")[0]?.[0] || "A"}
                          {selectedMission.agent.split(" ")[1]?.[0] || ""}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {selectedMission.agentPhone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {selectedMission.agentEmail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission Details */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Détails de la mission
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Localisation
                      </span>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">
                          {selectedMission.location}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Horaire
                      </span>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">
                          {selectedMission.time}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Date de début
                      </span>
                      <span className="text-sm font-medium text-gray-900 block">
                        {selectedMission.startDate}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Date de fin
                      </span>
                      <span className="text-sm font-medium text-gray-900 block">
                        {selectedMission.endDate}
                      </span>
                    </div>
                    {selectedMission.client && (
                      <>
                        <div className="space-y-1">
                          <span className="text-xs text-gray-500 uppercase tracking-wide">
                            Client
                          </span>
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">
                              {selectedMission.client}
                            </span>
                          </div>
                        </div>
                        {selectedMission.budget && (
                          <div className="space-y-1">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">
                              Budget
                            </span>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">
                                {selectedMission.budget}
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <Activity className="h-4 w-4 mr-2" />
                    Progression
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Avancement</span>
                      <span className="font-medium text-gray-900">
                        {selectedMission.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${selectedMission.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    Notes de mission
                  </h3>
                  <div className="space-y-2">
                    {selectedMission.notes.map((note, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700 rounded-xl">
                    Modifier la mission
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-gray-200"
                  >
                    Contacter le responsable
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
