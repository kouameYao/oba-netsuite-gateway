import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Calendar,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Target,
  User,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MissionDetailsPage() {
  const mission = {
    title: "Mission Golf",
    type: "Escorte",
    location: "Zone Est",
    agent: "Agent Wilson",
    agentPhone: "+33 6 12 34 56 78",
    agentEmail: "wilson@security.com",
    status: "En cours",
    priority: "Haute",
    startDate: "25/01/2025",
    endDate: "27/01/2025",
    time: "10:30",
    description:
      "Assurer la sécurité de la délégation pendant l’événement Golf Pro Tour à la Zone Est.",
    progress: 65,
    notes: [
      "Rendez-vous à 9h au poste de sécurité.",
      "Vérification du matériel avant départ.",
      "Coordination avec la police locale.",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 py-4 space-y-6">
        {/* Back */}
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/dashboard/missions">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Détails mission</h1>
        </div>

        {/* Mission title */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-md">
            <Target className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              {mission.title}
            </h2>
            <p className="text-sm text-gray-500">{mission.type}</p>
          </div>
        </div>

        {/* Status & Priority */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={`text-xs ${getStatusColor(mission.status)}`}>
            {mission.status}
          </Badge>
          <Badge
            variant="secondary"
            className={`text-xs ${getPriorityColor(mission.priority)}`}
          >
            <AlertTriangle className="h-3 w-3 mr-1" />
            {mission.priority}
          </Badge>
        </div>

        {/* Description */}
        <Section title="Description" icon={FileText}>
          <p className="text-sm text-gray-700">{mission.description}</p>
        </Section>

        {/* Agent */}
        <Section title="Agent assigné" icon={User}>
          <div className="bg-gray-50 rounded-md p-3">
            <div className="font-medium text-gray-900">{mission.agent}</div>
            <div className="text-sm text-gray-600 mt-1 flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>{mission.agentPhone}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>{mission.agentEmail}</span>
            </div>
          </div>
        </Section>

        {/* Infos */}
        <Section title="Informations" icon={Calendar}>
          <Info label="Lieu" icon={MapPin} value={mission.location} />
          <Info label="Heure" icon={Clock} value={mission.time} />
          <Info label="Début" value={mission.startDate} />
          <Info label="Fin" value={mission.endDate} />
        </Section>

        {/* Progression */}
        <Section title="Avancement" icon={Activity}>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-500">Progression</span>
            <span className="text-gray-700 font-medium">
              {mission.progress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-orange-600 rounded-full"
              style={{ width: `${mission.progress}%` }}
            />
          </div>
        </Section>

        {/* Notes */}
        <Section title="Notes">
          <ul className="space-y-2">
            {mission.notes.map((note, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1 mr-2" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Buttons */}
        <div className="flex flex-col gap-2 pt-4">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">
            Modifier
          </Button>
          <Button variant="outline" className="w-full border-gray-200">
            {"Contacter l'agent"}
          </Button>
        </div>
      </main>
    </div>
  );
}

// Section Component
function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <div className="flex items-center text-sm font-medium text-gray-800">
        {Icon && <Icon className="h-4 w-4 mr-1 text-gray-500" />}
        {title}
      </div>
      {children}
    </section>
  );
}

// Info Line
function Info({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      {Icon && <Icon className="h-4 w-4 text-gray-400" />}
      <span className="font-medium">{label} :</span>
      <span>{value}</span>
    </div>
  );
}

// Style Helpers
function getStatusColor(status: string) {
  return (
    {
      "En cours": "bg-blue-100 text-blue-800",
      "En attente": "bg-yellow-100 text-yellow-800",
      Terminée: "bg-green-100 text-green-800",
      Échouée: "bg-red-100 text-red-800",
    }[status] ?? "bg-gray-100 text-gray-800"
  );
}

function getPriorityColor(priority: string) {
  return (
    {
      Haute: "bg-red-100 text-red-800",
      Moyenne: "bg-orange-100 text-orange-800",
      Basse: "bg-gray-100 text-gray-800",
    }[priority] ?? "bg-gray-100 text-gray-800"
  );
}
