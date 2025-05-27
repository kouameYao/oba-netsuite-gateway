import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fba669] via-[#fc8c34] to-[#fc8429] flex items-center justify-center p-4 relative overflow-hidden">
      <Card className="w-full max-w-md relative border-0 backdrop-blur-sm bg-white rounded-3xl p-6 z-10 shadow-[8px_8px_1px_rgba(255,255,255,0.5)]">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center space-x-8">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGJJJx2GrKkmQ/company-logo_200_200/company-logo_200_200/0/1647521160562/orange_bank_logo?e=1753315200&v=beta&t=ZFWVzwPQT8S0FCcZcf05sHWDXVb-_5iTKguG070wpe0"
              alt="logo orange bank"
              width={50}
              height={1}
            />
            <div className="flex flex-col items-start">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Connexion
              </CardTitle>
              <CardDescription className="text-gray-600 text-left text-sm">
                Saisissez vos identifiants pour vous connecter
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pb-8">
          <div className="space-y-2">
            <Label htmlFor="identifiant" className="text-gray-700 font-medium">
              Identifiant
            </Label>
            <Input
              id="identifiant"
              type="text"
              className="h-12 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              className="h-12 focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all rounded-xl"
            />
          </div>
          <div className="text-right">
            <Link
              href="#"
              className="text-sm text-[#fc8429] hover:text-orange-700 font-medium"
            >
              Mot de passe oublié
            </Link>
          </div>
        </CardContent>
        <Link href="/dashboard" className="mt-10 mx-10">
          <Button
            className="w-full rounded-3xl bg-[#fc8429] hover:bg-black h-12 text-base font-semibold"
            size="lg"
          >
            Se connecter
          </Button>
        </Link>
      </Card>
    </div>
  );
}
