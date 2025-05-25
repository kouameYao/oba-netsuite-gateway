import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Users, TrendingUp, MoreHorizontal } from "lucide-react";
import { Header } from "@/components/layout/header";

export default function DashboardV2Page() {
  const pointsDeVente = [
    {
      name: "Point Angré Djibi 1",
      users: "06 utilisateurs",
      transactions: "+100 transactions",
      active: true,
      avatar: null,
    },
    {
      name: "Point Angré Djibi 1",
      users: "06 utilisateurs",
      transactions: "+100 transactions",
      active: false,
      avatar: "E",
    },
    {
      name: "Point Angré Djibi 1",
      users: "06 utilisateurs",
      transactions: "+100 transactions",
      active: false,
      avatar: null,
    },
    {
      name: "Point Angré Djibi 1",
      users: "06 utilisateurs",
      transactions: "+100 transactions",
      active: false,
      avatar: null,
    },
  ];

  const transactions = [
    {
      type: "Rendu monnaie",
      pointDeVente: "Angré Djibi 1",
      montant: "+220 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: true,
    },
    {
      type: "Rendu monnaie",
      pointDeVente: "Angré Djibi 1",
      montant: "-220 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: false,
    },
    {
      type: "Paiement caisse",
      pointDeVente: "Angré Djibi 1",
      montant: "+8 000 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: true,
    },
    {
      type: "Rendu monnaie",
      pointDeVente: "Angré Djibi 1",
      montant: "-220 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: false,
    },
    {
      type: "Rendu monnaie",
      pointDeVente: "Angré Djibi 1",
      montant: "+220 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: true,
    },
    {
      type: "Rendu monnaie",
      pointDeVente: "Angré Djibi 1",
      montant: "-220 FCFA",
      client: "+ 225 09 32 13 11 33",
      numeroAvoir: "19492948204",
      date: "20 Avril 2023, 10:20",
      positive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7FA]">
      <Header />
      <main className="p-4 sm:p-6">
        {/* Solde Principal */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium text-gray-600 mb-2">
            Solde principal
          </h2>
          <div className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            9 231 000 F
            <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Points de vente */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-xl font-bold text-gray-900">Points de vente</h2>
            <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 w-full sm:w-auto">
              Voir tout {">"}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pointsDeVente.map((point, index) => (
              <Card
                key={index}
                className={`transition-all rounded-2xl ${
                  point.active
                    ? "bg-orange-600 text-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        point.active ? "bg-orange-500" : "bg-gray-100"
                      }`}
                    >
                      {point.avatar ? (
                        <span className="text-white font-semibold">
                          {point.avatar}
                        </span>
                      ) : (
                        <Store
                          className={`h-5 w-5 ${
                            point.active ? "text-white" : "text-gray-600"
                          }`}
                        />
                      )}
                    </div>
                    {point.avatar && (
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {point.avatar}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm mb-3">{point.name}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Users
                        className={`h-3 w-3 ${
                          point.active ? "text-orange-200" : "text-orange-600"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          point.active ? "text-orange-100" : "text-gray-600"
                        }`}
                      >
                        {point.users}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp
                        className={`h-3 w-3 ${
                          point.active ? "text-orange-200" : "text-orange-600"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          point.active ? "text-orange-100" : "text-gray-600"
                        }`}
                      >
                        {point.transactions}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <Card className="bg-white rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Transactions
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Type
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Point de vente
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Montant
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Client
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      {"N° d'avoir"}
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Date
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-gray-25"
                    >
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-900">
                            {transaction.type}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-900">
                        {transaction.pointDeVente}
                      </td>
                      <td
                        className={`py-4 text-sm font-medium ${
                          transaction.positive
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {transaction.montant}
                      </td>
                      <td className="py-4 text-sm text-gray-900">
                        {transaction.client}
                      </td>
                      <td className="py-4 text-sm text-gray-900">
                        {transaction.numeroAvoir}
                      </td>
                      <td className="py-4 text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="py-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full"
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
      </main>
    </div>
  );
}
