import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
    return(
        <Card className="flex-1 ">
            <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Overview de vendas
              </CardTitle>
              <CircleDollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
                Alunos pagantes nos últimos 30 dias.
              </CardDescription>
          </CardHeader>

          <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">John Doe</p>
                    <span className="text-[12px] sm:text-sm">john.doe@example.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">John Doe</p>
                    <span className="text-[12px] sm:text-sm">john.doe@example.com</span>
                </div>
            </article>
          </CardContent>
        </Card>
    )
}