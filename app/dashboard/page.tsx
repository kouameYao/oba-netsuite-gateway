import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const topAgents = [
    { name: "Agent Alpha", location: "Zone Nord", active: true },
    { name: "Agent Beta", location: "Zone Sud", active: false },
    { name: "Agent Gamma", location: "Zone Est", active: false },
    { name: "Agent Delta", location: "Zone Ouest", active: false },
  ];

  const recentMissions = [
    {
      type: "Mission surveillance",
      agent: "Agent Alpha",
      status: "Terminée",
      client: "Secteur 7",
      date: "20/01/2025, 10:20",
    },
    {
      type: "Mission reconnaissance",
      agent: "Agent Beta",
      status: "En cours",
      client: "Secteur 3",
      date: "20/01/2025, 09:15",
    },
    {
      type: "Mission escorte",
      agent: "Agent Gamma",
      status: "Terminée",
      client: "Secteur 5",
      date: "19/01/2025, 16:45",
    },
    {
      type: "Mission protection",
      agent: "Agent Delta",
      status: "En attente",
      client: "Secteur 1",
      date: "19/01/2025, 14:30",
    },
    {
      type: "Mission infiltration",
      agent: "Agent Alpha",
      status: "Terminée",
      client: "Secteur 9",
      date: "19/01/2025, 12:20",
    },
    {
      type: "Mission extraction",
      agent: "Agent Beta",
      status: "Échouée",
      client: "Secteur 2",
      date: "18/01/2025, 18:10",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminée":
        return "text-green-600";
      case "En cours":
        return "text-blue-600";
      case "En attente":
        return "text-orange-600";
      case "Échouée":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7FA]">
      <Header />
      <main className="p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Global Stats */}
            <Card className="bg-white rounded-2xl">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-gray-600 text-sm font-medium mb-2">
                  Missions actives
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  47 missions
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Agents */}
            <Card className="bg-white rounded-2xl">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 space-y-4 sm:space-y-0">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Les agents les plus performants
                </CardTitle>
                <Link href="/dashboard/gestions">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-orange-600 border-orange-200 hover:bg-orange-50 rounded-full px-4 w-full sm:w-auto"
                  >
                    Tous les agents {">"}
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {topAgents.map((agent, index) => (
                    <Card
                      key={index}
                      className={`transition-all hover:shadow-md rounded-2xl ${
                        index === 0
                          ? "bg-orange-600 text-white"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <Target className="h-5 w-5" />
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">
                          {agent.name}
                        </h3>
                        <p
                          className={`text-xs ${
                            index === 0 ? "text-orange-100" : "text-gray-500"
                          }`}
                        >
                          {agent.location}
                        </p>
                        <div className="mt-2">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              agent.active
                                ? index === 0
                                  ? "bg-orange-500 text-white"
                                  : "bg-green-100 text-green-800"
                                : index === 0
                                ? "bg-orange-400 text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {agent.active ? "En mission" : "Disponible"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Missions */}
            <Card className="bg-white rounded-2xl">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 space-y-4 sm:space-y-0">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Missions récentes
                </CardTitle>
                <Link href="/dashboard/missions">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-orange-600 border-orange-200 hover:bg-orange-50 rounded-full px-4 w-full sm:w-auto"
                  >
                    Toutes les missions {">"}
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 text-sm font-medium text-gray-600">
                          Type de mission
                        </th>
                        <th className="text-left py-3 text-sm font-medium text-gray-600">
                          Agent assigné
                        </th>
                        <th className="text-left py-3 text-sm font-medium text-gray-600">
                          Statut
                        </th>
                        <th className="text-left py-3 text-sm font-medium text-gray-600">
                          Secteur
                        </th>
                        <th className="text-left py-3 text-sm font-medium text-gray-600">
                          Date
                        </th>
                        <th className="text-left py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMissions.map((mission, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-50 hover:bg-gray-25"
                        >
                          <td className="py-3 text-sm text-gray-900">
                            {mission.type}
                          </td>
                          <td className="py-3 text-sm text-gray-900">
                            {mission.agent}
                          </td>
                          <td
                            className={`py-3 text-sm font-medium ${getStatusColor(
                              mission.status
                            )}`}
                          >
                            {mission.status}
                          </td>
                          <td className="py-3 text-sm text-gray-900">
                            {mission.client}
                          </td>
                          <td className="py-3 text-sm text-gray-500">
                            {mission.date}
                          </td>
                          <td className="py-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4 text-gray-400" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Statistics */}
          <div>
            <Card className="bg-white rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Statistiques
                </CardTitle>
                <select className="text-sm bg-gray-50 rounded-2xl px-3 py-1 text-gray-600">
                  <option>30 derniers jours</option>
                </select>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg
                      className="w-32 h-32 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="3"
                        strokeDasharray="65, 35"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="3"
                        strokeDasharray="15, 85"
                        strokeDashoffset="-65"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        strokeDasharray="20, 80"
                        strokeDashoffset="-80"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          342
                        </div>
                        <div className="text-sm text-gray-500">Missions</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Terminées</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      65%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">En cours</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      20%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Échouées</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      15%
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {"Aujourd'hui"}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      12 missions
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      7 derniers jours
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      89 missions
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      30 derniers jours
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      342 missions
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Cette année</span>
                    <span className="text-sm font-medium text-gray-900">
                      1,247 missions
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
