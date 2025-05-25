"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Save,
  Eye,
  Calendar,
  MapPin,
  User,
  AlertTriangle,
  FileText,
  Paperclip,
  Plus,
  X,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { WysiwygEditor } from "@/features/missions/wysiwyg-editor";
import { FileUpload } from "@/features/missions/file-upload";
import { Mission } from "@/type/mission";

export default function NouvelleMissionPage() {
  const [formData, setFormData] = useState<Mission>({
    title: "",
    type: "",
    category: "",
    priority: "",
    status: "En attente",
    description: "",
    objectives: [""],
    requirements: [""],
    location: "",
    specificArea: "",
    assignedAgent: "",
    supervisor: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    client: "",
    budget: "",
    riskLevel: "",
    safetyProtocols: [""],
    attachments: [],
  });

  const [activeTab, setActiveTab] = useState("general");

  const missionTypes = [
    "Audit & Conformité",
    "Relation Client",
    "Formation",
    "Gestion des Risques",
    "Contrôle Qualité",
    "Analyse Crédit",
    "Sécurité",
    "Inspection",
    "Due Diligence",
    "Certification",
  ];

  const priorities = ["Critique", "Haute", "Moyenne", "Basse"];

  const locations = [
    "Agence Plateau",
    "Agence Cocody",
    "Agence Marcory",
    "Agence Treichville",
    "Siège Social",
    "Centre d'Affaires",
    "Siège BCEAO",
    "Client - Sur site",
  ];

  const agents = [
    {
      id: "1",
      name: "Owen Japhet KOUAMÉ",
      role: "Conseiller Clientèle Senior",
    },
    { id: "2", name: "Emmanuel GUIEBI", role: "Directeur d'Agence" },
    { id: "3", name: "Marie MARTIN", role: "Analyste Financier" },
    { id: "4", name: "Pierre DUBOIS", role: "Responsable Conformité" },
    { id: "5", name: "Sophie LEBLANC", role: "Responsable Risques" },
    { id: "6", name: "Thomas LEFEBVRE", role: "Auditeur Interne" },
    { id: "7", name: "Chloe MOREAU", role: "Chargée de Clientèle Entreprise" },
  ];

  const riskLevels = ["Très faible", "Faible", "Moyen", "Élevé", "Critique"];

  const addObjective = () => {
    setFormData((prev) => ({
      ...prev,
      objectives: [...prev.objectives, ""],
    }));
  };

  const removeObjective = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      objectives: prev.objectives.filter((_, i) => i !== index),
    }));
  };

  const updateObjective = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      objectives: prev.objectives.map((obj, i) => (i === index ? value : obj)),
    }));
  };

  const addRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }));
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const updateRequirement = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.map((req, i) =>
        i === index ? value : req
      ),
    }));
  };

  const addSafetyProtocol = () => {
    setFormData((prev) => ({
      ...prev,
      safetyProtocols: [...prev.safetyProtocols, ""],
    }));
  };

  const removeSafetyProtocol = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      safetyProtocols: prev.safetyProtocols.filter((_, i) => i !== index),
    }));
  };

  const updateSafetyProtocol = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      safetyProtocols: prev.safetyProtocols.map((protocol, i) =>
        i === index ? value : protocol
      ),
    }));
  };

  const handleSave = () => {
    console.log("Sauvegarde de la mission:", formData);
    // Logique de sauvegarde
  };

  const handlePreview = () => {
    console.log("Prévisualisation de la mission:", formData);
    // Logique de prévisualisation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500">
          <span>Missions</span>
          <span>{">"}</span>
          <span>Nouvelle mission</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Link href="/missions">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Créer une nouvelle mission
              </h1>
              <p className="text-gray-600 mt-1">
                Définissez les détails et objectifs de votre mission
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handlePreview}
              className="rounded-full"
            >
              <Eye className="h-4 w-4 mr-2" />
              Prévisualiser
            </Button>
            <Button
              onClick={handleSave}
              className="bg-orange-600 hover:bg-orange-700 rounded-full"
            >
              <Save className="h-4 w-4 mr-2" />
              Enregistrer
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Formulaire principal */}
          <div className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 bg-gray-100 rounded-md p-1 mb-8">
                <TabsTrigger
                  value="general"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Général
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Détails
                </TabsTrigger>
                <TabsTrigger
                  value="planning"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Planning
                </TabsTrigger>
                <TabsTrigger
                  value="conformite"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Conformité
                </TabsTrigger>
              </TabsList>

              {/* Onglet Général */}
              <TabsContent value="general" className="space-y-6">
                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-orange-600" />
                      Informations générales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Titre de la mission *</Label>
                        <Input
                          id="title"
                          placeholder="Ex: Audit Conformité BCEAO Q1 2025"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Type de mission *</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, type: value }))
                          }
                        >
                          <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                            <SelectValue placeholder="Sélectionner un type" />
                          </SelectTrigger>
                          <SelectContent>
                            {missionTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priorité *</Label>
                        <Select
                          value={formData.priority}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              priority: value,
                            }))
                          }
                        >
                          <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                            <SelectValue placeholder="Sélectionner une priorité" />
                          </SelectTrigger>
                          <SelectContent>
                            {priorities.map((priority) => (
                              <SelectItem key={priority} value={priority}>
                                <div className="flex items-center space-x-2">
                                  <AlertTriangle className="h-4 w-4" />
                                  <span>{priority}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="client">Client / Entité</Label>
                        <Input
                          id="client"
                          placeholder="Ex: SODECI, Air Côte d'Ivoire..."
                          value={formData.client}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              client: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description détaillée</Label>
                      <WysiwygEditor
                        value={formData.description}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            description: value,
                          }))
                        }
                        placeholder="Décrivez en détail les objectifs, le contexte et les enjeux de cette mission..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Onglet Détails */}
              <TabsContent value="details" className="space-y-6">
                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle>Objectifs de la mission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder={`Objectif ${index + 1}`}
                          value={objective}
                          onChange={(e) =>
                            updateObjective(index, e.target.value)
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                        {formData.objectives.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeObjective(index)}
                            className="rounded-md text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={addObjective}
                      className="w-full h-12 rounded-md border-dashed border-2 border-gray-300 hover:border-orange-400 bg-gray-50 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un objectif
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle>Prérequis et exigences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder={`Prérequis ${index + 1}`}
                          value={requirement}
                          onChange={(e) =>
                            updateRequirement(index, e.target.value)
                          }
                          className="h-12  bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                        {formData.requirements.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeRequirement(index)}
                            className="rounded-md text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={addRequirement}
                      className="w-full h-12 rounded-md border-dashed border-2 border-gray-300 hover:border-orange-400 bg-gray-50 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un prérequis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Paperclip className="h-5 w-5 mr-2 text-orange-600" />
                      Documents et pièces jointes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      onFilesChange={(files) =>
                        setFormData((prev) => ({ ...prev, attachments: files }))
                      }
                      acceptedTypes={[
                        ".pdf",
                        ".doc",
                        ".docx",
                        ".xls",
                        ".xlsx",
                        ".jpg",
                        ".png",
                      ]}
                      maxSize={10}
                      multiple={true}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Onglet Planning */}
              <TabsContent value="planning" className="space-y-6">
                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                      Planification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Date de début *</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              startDate: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">Date de fin *</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={formData.endDate}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              endDate: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="startTime">Heure de début</Label>
                        <Input
                          id="startTime"
                          type="time"
                          value={formData.startTime}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              startTime: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endTime">Heure de fin</Label>
                        <Input
                          id="endTime"
                          type="time"
                          value={formData.endTime}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              endTime: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location">Localisation *</Label>
                        <Select
                          value={formData.location}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              location: value,
                            }))
                          }
                        >
                          <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                            <SelectValue placeholder="Sélectionner un lieu" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location} value={location}>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{location}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specificArea">Zone spécifique</Label>
                        <Input
                          id="specificArea"
                          placeholder="Ex: Salle de réunion A, Bureau direction..."
                          value={formData.specificArea}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              specificArea: e.target.value,
                            }))
                          }
                          className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget alloué</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="budget"
                          placeholder="Ex: 500 000 FCFA"
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              budget: e.target.value,
                            }))
                          }
                          className="pl-12 h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Onglet Conformité */}
              <TabsContent value="conformite" className="space-y-6">
                <Card className="bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                      Évaluation des risques
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="riskLevel">Niveau de risque</Label>
                      <Select
                        value={formData.riskLevel}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, riskLevel: value }))
                        }
                      >
                        <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                          <SelectValue placeholder="Évaluer le niveau de risque" />
                        </SelectTrigger>
                        <SelectContent>
                          {riskLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label>Protocoles de sécurité</Label>
                      {formData.safetyProtocols.map((protocol, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Input
                            placeholder={`Protocole ${index + 1}`}
                            value={protocol}
                            onChange={(e) =>
                              updateSafetyProtocol(index, e.target.value)
                            }
                            className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border"
                          />
                          {formData.safetyProtocols.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeSafetyProtocol(index)}
                              className="rounded-md text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={addSafetyProtocol}
                        className="w-full h-12 rounded-md border-dashed border-2 border-gray-300 hover:border-orange-400 bg-gray-50 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter un protocole
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assignation */}
            <Card className="bg-white rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <User className="h-5 w-5 mr-2 text-orange-600" />
                  Assignation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assignedAgent">Responsable mission *</Label>
                  <Select
                    value={formData.assignedAgent}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, assignedAgent: value }))
                    }
                  >
                    <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                      <SelectValue placeholder="Sélectionner un agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {agents.map((agent) => (
                        <SelectItem key={agent.id} value={agent.id}>
                          <div className="tracking-tighter">
                            <div className="font-base">{agent.name}</div>
                            <div className="text-xs text-gray-500">
                              {agent.role}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supervisor">Superviseur</Label>
                  <Select
                    value={formData.supervisor}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, supervisor: value }))
                    }
                  >
                    <SelectTrigger className="h-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-md border">
                      <SelectValue placeholder="Sélectionner un superviseur" />
                    </SelectTrigger>
                    <SelectContent>
                      {agents.map((agent) => (
                        <SelectItem key={agent.id} value={agent.id}>
                          <div className="tracking-tighter">
                            <div className="font-base">{agent.name}</div>
                            <div className="text-xs text-gray-500">
                              {agent.role}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Statut */}
            <Card className="bg-white rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Statut</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 rounded-md px-3 py-1">
                  {formData.status}
                </Badge>
              </CardContent>
            </Card>

            {/* Actions rapides */}
            <Card className="bg-white rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full rounded-xl justify-start"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Modèle de mission
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl justify-start"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Planifier plus tard
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl justify-start"
                >
                  <User className="h-4 w-4 mr-2" />
                  Inviter collaborateurs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
